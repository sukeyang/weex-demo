<template>
  <div append="tree">
    <app-header></app-header> 
    <list class="list">
      <cell class="cell" v-for="num in listData">
        <div class="panel" @click="jump(`${num.url}`)">
          <text class="text">{{num.text}}</text>
        </div>
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

      listData: [{
          text: '登录',
          name: 'login',
          url: '/LoginPage'
        },
        // {
        //   text: '二维码',
        //   name: 'qrcode',
        //   url: '/qrcode'
        // },
        {
          text: '本地存储',
          name: 'storage',
          url: '/storage'
        }, {
          text: '获取当前用户信息',
          name: 'getUser',
          url: '/getUser'
        },
        // {
        //   text: '网络类型切换提醒',
        //   name: 'changeNet',
        //   url: '/changeNet'
        // }, 
        {
          text: '路由',
          name: 'router',
          url: '/router'
        }, {
          text: '长列表滑动',
          name: 'longlist',
          url: '/longlist'
        }, {
          text: '模态框',
          name: 'modal',
          url: '/modal'
        },
        // {
        //   text: '日期选择器',
        //   name: 'picker',
        //   url: '/picker'
        // }
      ]
    }
  }
}
</script>
<style scoped>

.list li {
  font-size: 40px;
  display: inline-block;
  height: 60px;
  text-align: center;
  margin-top: 20px;
}

.list {
  display: inline-block;
}

.panel {
  height: 100px;
  margin: 30px;
  flex-direction: column;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
  box-sizing: content-box;
}
</style>
