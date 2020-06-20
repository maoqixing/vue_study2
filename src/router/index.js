//一级界面
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'

//二级界面(home的子路由)
import News from '../views/News.vue'
import Shop from '../views/Shop.vue'

Vue.use(VueRouter)
  const routes = [
	{path:'/',redirect:'/home'},
  {
    path: '/home',
    name: 'Home',
    component: Home,
		children:[
			{path:'/home',redirect:'/home/news'},
			{	path:'news',name:'news',component:News,},
			{	path:'shop',name:'shop',component:Shop,}
		]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
	{ 
	  path: '/Mine', 
	  name: 'Mine',
	  component: Mine
	},


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
