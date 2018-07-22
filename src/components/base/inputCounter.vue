<template>
  <div class="input-number">
    <input type="text" :value="currentValue" @change="handleChange" @keyup.down="handleDown" @keyup.up="handleUp"/>
    <button @click="handleDown" :disabled="currentValue <= min" >-</button>
    <button @click="handleUp"  :disabled="currentValue >= max">+</button>
  </div>
</template>
<script>
// 引入判断函数
import { isValueNumber } from '../common/number'
export default {
  data () {
    return {
      step: 10, // 控制步伐
      currentValue: this.value //初始化引用父组件value
    }
  },
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      type: Number,
      default: 0
    }
  },
  // 监听选项用来监听某个prop或data的改变，当它们发生变化时，就会触发watch配置的函数
  watch: {
    currentValue: function (val) {
      // 使用v-model时改变value
      this.$emit('input', val)
      // 触发自定义事件on-change事件，用于告知父组件数字输入框的值有所改变
      this.$emit('on-change', val)
    },
    value: function (val) {
      this.updateValue(val)
    }
  },
  methods: {
    handleDown: function () {
      if (this.currentValue <= this.min) return
      this.currentValue -= this.step
    },
    handleUp: function () {
      if (this.currentValue >= this.max) return
      this.currentValue += this.step
    },
    // 过滤出一个正确的currentValue
    updateValue: function (val) {
      if (val > this.max) val = this.max
      if (val < this.min) val = this.min
      this.currentValue = val
    },
    // 判断输入的值是否为数字
    handleChange: function (event) {
      // e.target.value:指向事件执行时鼠标所点击区域的那个元素的值
      // trim():删除字符串开始和末尾的空格
      var val = event.target.value.trim()
      var max = this.max
      var min = this.min
      if (isValueNumber(val)) {
        val = Number(val)
        this.currentValue = val
        if (val > max) {
          this.currentValue = max
        } else if (val < min) {
          this.currentValue = min
        }
      } else {
        event.target.value = this.currentValue
      }
    }
  },
  // 第一次初始化需对value进行过滤
  mounted: function () {
    this.updateValue(this.value)
  }
}
</script>