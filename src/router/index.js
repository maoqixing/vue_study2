//一级界面
import Vue from 'vue'
import VueRouter from 'vue-router'

//一级界面
import Login from '../views/Login.vue'
import DashBoard from '../views/DashBoard.vue'

//二级界面
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'


// const About = ()=>import('../views/About')此行代码相当于33行代码，，路由的懒加载 当点击此路由的时候再来加载到内存当中，增加性能   如果在配合keep-active 时候，点击切换路由时候做到不加载，从缓存中拿，当上拉或者下拉时候才加载，提高性能

Vue.use(VueRouter)
  const routes = [
	{path:'/',redirect:'/dashboard'},
	 {
	  path: '/dashboard',
	  name: 'dashboard',
	  component: DashBoard,
		children:[
				{path:'/dashboard',redirect:'/dashboard/home'},
			 {
			  path: 'home',
			  name: 'Home',
			  component: Home
			},
			{
			  path: 'about',
			  name: 'About',
			  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
			},
			{ 
			  path: 'Mine', 
			  name: 'Mine',
			  component: Mine
			},
		]
	},
	{
			path:'/login',
			name:'login',
			component:Login
	}


]

const router = new VueRouter({
   mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局路由前置守卫  全局路由有next
router.beforeEach((to,from,next)=>{
	//console.log(to,from);//拦截
	if(to.path !== '/login'){//验证是否登录
		if(window.isLogin){//已经登录了
			next();
		}else{//没有登录 则进入登录界面
		//	next('/login?redirect='+to.path);  //登录后去的地方 重定向过去
		//	next('/login?redirect=/dashboard/mine');  //登录后去的地方(我的界面) 重定向过去
			next('/login');  //登录后去的地方(登录界面，此登录页面没回调地址，在登录页的逻辑中跳到home去了) 重定向过去
		}
		
	}else{//不需要验证 则放行
	next();
		
	}
	//放行
	next();
})

//全局路由后置守卫  （所有的路由完成后执行的方法） 后置守卫没有next   而每进入一个路由里面都有钩子，每个钩子都必须有next ,没有则卡在那里不走
router.afterEach((to,from)=>{
	//console.log("来了")
})

export default router
