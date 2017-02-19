<template>
  <div class="cnt">
    <!-- <text class="button" @click="jumpTo(`/#/index`)">跳到app内部首页</text>
<text class="button" @click="jumpTo(`/#/router/taobao`)">跳到app外部页面</text>
 -->
    <a href="https://www.taobao.com/">跳到淘宝</a>
  </div>
</template>
<script>
var navigator = weex.requireModule('navigator')
var modal = weex.requireModule('modal')

export default {

  methods: {
    jumpTo(url) {
      navigator.push({
        url: url,
        animated: "false"
      })
    }
  }
};
</script>
<style scoped>
.cnt {
  min-height: 100%;
}

.button {
  font-size: 60px;
  margin: 30px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-width: 2px;
  border-style: solid;
  color: #666666;
  border-color: #DDDDDD;
  background-color: #F5F5F5
}
</style>
