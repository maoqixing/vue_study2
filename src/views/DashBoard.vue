<template>
	<div>
		<div>主面板</div>
		<!-- 设置路由导航 -->
		<div id="nav">
			<router-link to="/dashboard/home">Home</router-link>
			|
			<router-link to="/dashboard/about">About</router-link>
			|
			<router-link to="/dashboard/mine">mine</router-link>
		</div>
		<!-- 设置路由出口 -->
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'DashBoard'
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
