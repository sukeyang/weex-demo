<template>
  <div class="cnt">
    <app-header></app-header>
    <button @click="getUserInfo" class="button">获取当前用户信息</button>
    <div class="ml" v-if="isShow">
      <text>用户名：{{userName}}</text>
    </div>
  </div>
</template>
<script>
const storage = weex.requireModule('storage')
import AppHeader from '../components/app-header.vue'
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      userName: "",
      isShow: false
    }
  },
  methods: {
    getUserInfo() {
      storage.getItem('username', event => {
        this.$data.userName = event.data
        this.$data.isShow = true
      })
    }
  }
}
</script>
<style scoped>
.cnt {
  text-align: center;
}

.button {
  height: 60px;
  margin: 30px auto;
  font-size: 60px;
  background-color: red;
  justify-content: center;
  align-items: center;
}

.ml {
  display: block;
  margin-left: 30px;
}
</style>
