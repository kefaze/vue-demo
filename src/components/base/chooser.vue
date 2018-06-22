<template>
    <div class="chooser-component">
        <ul class="chooser-list">
          <li
          v-for="(item, index) in selections"
          @click="chosenSelection(index)"
          :title="item.label"
          :class="{active:index === nowIndex}"
          >{{ item.label }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    selections: {
      type: Array,
      default: [{
        label: 'test',
        value: 0
      }]
    },
    linkList: Object
  },
  data () {
    return {
      nowIndex: 0,
      linkObj: [
        {id: "1", name: 'aaa'},
        {id: "2", name: 'bbb'},
        {id: "3", name: 'ccc'},
        {id: "4", name: 'ddd'},
        {id: "5", name: 'eee'}
      ],
     // linkObjList: {},
      currentArr: []
    }
  },
  watch: {
    // linkList(curVal, oldVal) {
    //   if(val){
    //     this.linkObjList = curVal;
    //   }
    // }
  },
  methods: {
    chosenSelection (index) {
      this.nowIndex = index
      this.$emit('on-change', this.selections[index])
    },
    getCurrentObject() {
     
      this.linkObj.forEach((val, index) => {

        for(var i in this.linkList){
           var objTmp = {};
          // console.log(i, this.linkList[i])
          if(val.id.toString() == i.toString()) {
            objTmp.count = this.linkList[i];
            objTmp.name = val.name;
            this.currentArr.push(objTmp);
          }
          //this.currentArr.push(objTmp);
        }
        // console.log(Object.keys(this.linkList));
        // Object.keys(this.linkList).forEach((value, idx)=>{
        //   console.log(val.id)
        //   console.log(value)
        // })
        // console.log(val.id)
        //if(val.id == )
        // for(var i in this.linkObjList){
        //   alert(1)
        //   console.log(i)
        // }
      });
      console.log(this.currentArr)
    }

  },
  mounted() {
     console.log(this.linkList);
    //console.log(this.linkObjList)
    this.getCurrentObject();
  }
}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
