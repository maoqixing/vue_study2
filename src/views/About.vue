<template>
<div>
		<div class="box"  v-if="show">撩课学院</div>
		<button @click="show = !show ">切换</button>
	
  </div>
</template>
<script>
	export default{
		name:"transition",
		data(){
			return{
				show:false
			}
		}
	}
</script>
<style scoped>

	
	 .box{
		 width: 200px;
		 height: 200px;
		 background-color: red;
		 color: #fff;
		 font-size: 20px;
		 display: flex;
		 align-items: center;
		 justify-content: center;
	 }
</style>
