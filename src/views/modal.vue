<template>
  <div class="cnt">
    <div>
      <text class="button" @click="showToast">Toast</text>
      <text class="button" @click="showAlert">Alert</text>
      <text class="button" @click="showConfirm">Confirm</text>
      <text class="button" @click="showPrompt">Prompt</text>
    </div>
  </div>
</template>
<script>
var modal = weex.requireModule('modal')
export default {

  methods: {
    showToast(event) {
      console.log('will show toast')
      modal.toast({
        message: 'This is a toast',
        duration: 0.3
      })
    },
    showAlert(event) {
      console.log('will show alert')
      modal.alert({
        message: 'This is a alert',
        duration: 3,
        okTitle: '确定'
      })
    },
    showConfirm(event) {
      console.log('will show confirm')
      modal.confirm({
        message: 'Do you confirm ?',
        duration: 0.3
      })
    },
    showPrompt(event) {
      console.log('will show prompt')
      modal.prompt({
        message: 'This is a prompt',
        duration: 0.3
      })
    }
  }
};
</script>
<style scoped>
.wrapper {
  flex-direction: column;
  justify-content: center;
}

.button {
  font-size: 60px;
  width: 450px;
  text-align: center;
  margin-top: 30px;
  margin-left: 150px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-width: 2px;
  border-style: solid;
  color: #666666;
  border-color: #DDDDDD;
  background-color: #F5F5F5
}
</style>
