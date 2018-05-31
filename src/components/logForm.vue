<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
          v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ pwdErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{ errText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errText: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (!(/\d/.test(this.usernameModel))) {
        status = false
        errorText = '不包含数字'
      } else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    pwdErrors () {
      let errorText, status
      if (!(/^\w{1,6}$/.test(this.passwordModel))) {
        status = false
        errorText = '密码不符合要求'
      } else {
        status = true
        errorText = ''
      }
      if (!this.pwdFlag) {
        errorText = ''
        this.pwdFlag = true
      }
      return {
        status,
        errorText
      }
    }    
  },
  methods: {
    onLogin () {
      if (!this.userErrors.status || !this.pwdErrors.status) {
        this.errText = '未通过验证'
        return false
      } else {
        this.errText = ''
        this.$http.get('api/login').then((res) => {
          this.$emit('has-login', res.data)
        }, (err) => {
          this.errText = '登录失败'
        })
      }
    }
  }
}
</script>