<template>
  <div class="wrapper" @click="update">
    <!-- <image :src="logoUrl" class="logo"></image> -->
    <text class="title">Hello {{target}}</text>
  </div>
</template>

<style scoped>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { font-size: 60px;color:red; }
  .logo { width: 360px; height: 82px; }
</style>

<script>
  export default {
    data: {
      logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
      target: '3333'
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>
