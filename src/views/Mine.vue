<template>
	<div id="mine">
		<h2>个人中心</h2>

	</div>
</template>

<script>
	export default{
		name:"Mine",
		//路由钩子，必须有next  
		//进来之前调用此钩子
		beforeRouteEnter(to,from,next){
			console.log('进入之前调用');
			next();
		},
		//参数改变调用，不改变不调用 (注意，router注册时，如果使用history模式不会触发，使用hash模式则都会触发)
		beforeRouteUpdate(to,from,next){
			console.log("路由参数变了")
			next();
		},
		//路由离开前调用
		beforeRouteLeave(to,from,next){
			console.log("路由离开前调用")
			next();
		}
	}
</script>

<style>
</style>
