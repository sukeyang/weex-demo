<template>
  <div>
    <app-header></app-header>
    <list class="list">
      <cell class="cell" v-for="item in items">
        <button @click="goMethod">{{ item.content }}</button>
      </cell>
    </list>
  </div>
</template>
<script>
import AppHeader from '../components/app-header.vue'
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      items: [{
        content: "扫码",
        methodName: "qrcode"
      }, {
        content: "GPS",
        methodName: "gps"
      }, {
        content: "获取session",
        methodName: "getSession"
      }, {
        content: "显示session",
        methodName: "showSession"
      }, {
        content: "相册",
        methodName: "album"
      }, {
        content: "地图",
        methodName: "map"
      }]
    }
  },
  methods: {
    goMethod(event) {
      debugger
    }
  }
}
</script>
<style scoped>
.cell {
  height: 60px;
  font-size: 50px;
  padding: 10px 20px;
  border-style: solid;
  border-width: 2px;
  border-color: red;
  justify-content: center;
  border-left: 0;
  border-top: 0;
  height: 100px;
  box-sizing: content-box;
  border-right: 0;
}
</style>
