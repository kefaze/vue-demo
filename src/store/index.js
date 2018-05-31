import Vue from 'vue'
import Vuex from 'Vuex'
import orderList from './modules/orderList'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		orderList
	}
})