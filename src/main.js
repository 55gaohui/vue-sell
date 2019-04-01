// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'
import Goods from './components/goods/Goods'
import Ratings from './components/ratings/Ratings'
import Seller from './components/seller/Seller'

import "./common/stylus/index.styl"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResouce)

const router = new VueRouter({
	mode:"history",
	linkActiveClass:"active",
	base:__dirname,
	routes:[
	
		{path:"/",redirect:'goods',component:Goods},
		{path:"/goods",component:Goods},
		{path:"/ratings",component:Ratings},
		{path:"/seller",component:Seller},
	],
})
new Vue({
	router,
	render:h=>h(App)
}).$mount("#app")
