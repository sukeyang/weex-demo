<template>
  <div class="cnt">
  <app-header></app-header>
    <input placeholder="name" autofocus="true" ref="name">
    <input placeholder="password" autofocus="true" ref="password">
    <button @click="login">确认</button>
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
            debugger
          } else {
            modal.toast({
              message: '用户信息验证失败',
              duration: 0.3
            })
          }

        })

      }
    }

}
</script>
<style scoped>

.cnt input {
  height: 80px;
  margin: 10px 30px;
}

button {
  height: 60px;
  margin: 10px 30px;
  background-color: green;
  text-align: center;
  font-size: 40px;
}
</style>
