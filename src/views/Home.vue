<template>
  <div class="home">
		<h2>首页</h2>
		<!-- 路由导航 -->
		<ul>
			<li><router-link to="/home/news">新闻</router-link></li>
			<li><router-link to="/home/shop">商品</router-link></li>
		</ul>
		
		<!-- 子路由出口 -->
		<router-view></router-view>
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
