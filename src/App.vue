<template>
  <div @androidback="back" >   
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>
export default {
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>

<style>
	.cnt {
		width: 750px;
	}
</style>

