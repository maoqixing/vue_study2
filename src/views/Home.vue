<template>
  <div class="home">
		<h2>首页</h2>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped="scoped">
	h2{
		color: #FF0000;
	}
</style>
