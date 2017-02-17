<template>
  <div class="list">
  <app-header></app-header> 
    <div class="group center">
      <div class="panel">
        <text class="text">{{state}}</text>
      </div>
    </div>
    <input ref="input" autofocus="true" class="input" type="text" v-model.lazy="msg">
    <div class="group">
      <div class="panel">
        <text class="text" @click="setItem">set</text>
      </div>
      <div class="panel">
        <text class="text" @click="getItem">get</text>
      </div>
      <div class="panel">
        <text class="text" @click="removeItem">remove</text>
      </div>
      <div class="panel">
        <text class="text" @click="getAll">all</text>
      </div>
    </div>
  </div>
</template>
<script>
const storage = weex.requireModule('storage')
const modal = weex.requireModule('modal')
import AppHeader from '../components/app-header.vue'
export default {
    components: {
    AppHeader
  },
  data() {
      return {
        msg: '',
        keys: '[]',
        length: 0,
        state: '----'
      }
    },
    methods: {
      setItem() {
        storage.setItem('name', this.$refs.input.value, event => {
          this.state = 'set success'
          console.log('set success')
        })
      },
      getItem() {
        storage.getItem('name', event => {
          console.log('get value:', event.data)
          this.state = 'value: ' + event.data
        })
      },
      removeItem() {
        storage.removeItem('name', event => {
          console.log('delete value:', event.data)
          this.state = 'deleted'
        })
      },
      getAll() {
        storage.getAllKeys(event => {
          // modal.toast({ message: event.result })
          if (event.result === 'success') {
            modal.toast({
              message: 'props: ' + event.data.join(', ')
            })
          }
        })
      }

    }
}
</script>
<style scoped>
.input {
  font-size: 50px;
  width: 650px;
  margin-top: 50px;
  margin-left: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  color: #666666;
  border-width: 2px;
  border-style: solid;
  border-color: #41B883;
}

.panel {
  height: 100px;
  flex-direction: column;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
}

.group {
  flex-direction: row;
  justify-content: space-between;
  width: 650px;
  margin-left: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  background: red;
}

.center {
  justify-content: center;
}

.text {
  font-size: 50px;
  text-align: center;
  padding-left: 25px;
  padding-right: 25px;
  color: #41B883;
}

.small {
  font-size: 32px;
  padding-left: 35px;
  padding-right: 35px;
  color: #41B883;
}
</style>
