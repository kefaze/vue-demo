// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetialPage from './pages/detial'
import OrderListPage from './pages/orderList'

import AanlysisPage from './pages/detial/analysis'
import CountPage from './pages/detial/count'
import ForcastPage from './pages/detial/forcast'
import PublishPage from './pages/detial/publish'

import store from './store/index'

import jQuery from 'jquery'
import 'bootstrap/js/bootstrap.min.js'
import 'bootstrap/css/bootstrap.min.css'


Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: IndexPage
		},
		{
			path: '/orderList',
			component: OrderListPage
		},
		{
			path: '/detial',
			component: DetialPage,
			redirect: 'detial/analysis',
			children: [
				{
					path: 'analysis',
					component: AanlysisPage
				},
				{
					path: 'count',
					component: CountPage
				},
				{
					path: 'forcast',
					component: ForcastPage
				},
				{
					path: 'publish',
					component: PublishPage
				},
			]
		}
	]
})
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  components: { Layout },
  template: '<Layout/>'
})
