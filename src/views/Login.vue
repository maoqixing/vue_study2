<template>
	<div>
		<h2>登录界面</h2>
		<button @click="login">登录</button>
	</div>
</template>

<script>
	export default{
		name:"Login",
		methods:{
			login(){
				console.log("this.$route",this.$route)
				window.isLogin = true;
				//2.获取回调地址
				const redirect = this.$route.query.redirect;
				if(redirect){ //如果有回调地址
					this.$router.push(redirect);
				}else{////如果没有回调地址
					//去首页
					this.$router.replace('/');
				}
			}
		}
	}
</script>

<style>
</style>
