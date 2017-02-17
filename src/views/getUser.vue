<template>
  <div class="cnt">
    <button @click="getUserInfo">获取当前用户信息</button>
    <div class="ml" v-if="isShow">
      <text>用户名：{{userName}}</text>
    </div>
  </div>
</template>
<script>
const storage = weex.requireModule('storage')
export default {
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
  width: 100%;
  text-align: center;
}

button {
  width: 80%;
  height: 60px;
  margin: 30px auto;
  font-size: 40px;
}

.ml {
  display: block;
  margin-left: 10%;
}
</style>
