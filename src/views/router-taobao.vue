<template>
  <web ref="webview" :src="url" class="webview" ></web>
</template>

<script>
  export default {
    data () {
      return {
        url : 'https://www.taobao.com'
      }
    }
  }
</script>