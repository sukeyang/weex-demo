<template>
  <div class="header">
    <div class="logo" @click="jump('/')">
      <image class="image" src="http://olgl52s84.bkt.clouddn.com/back.png"></image>
    </div>
    <text class="text">{{target}}</text>
  </div>
</template>
<style scoped>
.header {
  /*width: 100%;*/
  position: relative;
  top: 0;
  left: 0;
  height: 120px;
  margin-bottom: 3px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #0066FF;
  background-color: #0099FF;
}

.logo {
  position: relative;
  width: 50px;
  height: 50px;
  top: 35px;
  left: 35px;
  color: #fff;
  z-index: 10;
}

.image {
  width: 44px;
  height: 44px;
}

.text {
  position: relative;
  top: -20px;
  font-size: 50px;
  color: #fff;
  text-align: center;
}
</style>
<script>
export default {
  data() {
    return {
      target: 'weex-demo',
    }
  }
}
</script>
