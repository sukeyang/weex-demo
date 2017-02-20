<template>
  <div class="cnt">
  <app-header></app-header>
    <text class="text">长列表</text>
    <scroller class="scroller">
      <div class="row" v-for="(name, index) in rows" :ref="'item'+index">
        <text class="text" :ref="'text'+index">{{name}}</text>
      </div>
    </scroller>
    <div class="group">
      <text @click="goto10" class="button">Go to 10</text>
      <text @click="goto20" class="button">Go to 20</text>
    </div>
  </div>
</template>
<script>
const dom = weex.requireModule('dom')
import AppHeader from '../components/app-header.vue'
export default {
    components: {
    AppHeader
  },
  data() {
      return {
        rows: []
      }
    },
    created() {
      for (let i = 0; i < 30; i++) {
        this.rows.push('row ' + i)
      }
    },
    methods: {
      goto10(count) {
        const el = this.$refs.item10[0]
        dom.scrollToElement(el, {})
      },
      goto20(count) {
        const el = this.$refs.item20[0]
        dom.scrollToElement(el, {
          offset: 0
        })
      }
    }
}
</script>
<style scoped>
.scroller {
  border-width: 3px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  border-right: 0;
  border-left: 0;
}

.row {
  height: 100px;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #DDDDDD;
}

.text {
  font-size: 45px;
  color: #666666;
}

.group {
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
}

.button {
  width: 200px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 40px;
  margin-left: 30px;
  margin-right: 30px;
  text-align: center;
  color: #41B883;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
}
</style>
