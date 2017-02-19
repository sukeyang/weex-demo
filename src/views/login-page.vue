<template>
  <div class="cnt">
    <app-header></app-header>
    <div class="inputs">
      <div class="input" @click="focus">
        <input class="input-item" type="text" placeholder="name" value="" autofocus="true" ref="name">
      </div>
      <div class="input" @click="focus">
        <input class="input-item" type="text" placeholder="password" value="" ref="password">
      </div>
      <button class="button" @click="login">确认</button>
    </div>
  </div>
</template>
<script>
var stream = weex.requireModule('stream')
var modal = weex.requireModule('modal')
const storage = weex.requireModule('storage')
import AppHeader from '../components/app-header.vue'
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      name: "",
      password: ""
    }
  },
  methods: {
    login() {
      stream.fetch({
        method: 'POST',
        type: 'json',
        url: 'http://localhost:3000/login',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `name=${this.$refs.name.value}&password=${this.$refs.password.value}`
      }, function(res) {
        if (res.data.code === 200) {
          modal.toast({
            message: '登录成功',
            duration: 0.3
          })
          storage.setItem('username', res.data.result.name)
        } else {
          modal.toast({
            message: '用户信息验证失败',
            duration: 0.3
          })
        }

      })

    },
    focus() {
      event.target.focus()
    }
  }

}
</script>
<style scoped>
.input {
  height: 80px;
  margin: 30px;
  display: block;
  border-width: 2px;
  border-color: red;
  justify-content: center;
  text-indent: 6px;
}

.input-item {
  color: red;
  padding: 30px;
}

.button {
  height: 60px;
  margin: 30px;
  background-color: green;
  align-items: center;
  justify-content: center;
  font-size: 40px;
}
</style>
