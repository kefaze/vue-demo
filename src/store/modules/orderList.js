import Vue from 'vue'

const state = {
	orderList: [],
	params: {}
}
const getters = {
	getOrderList: state => state.orderList
}
const actions = {
	fetchOrderList ({commit, satate}) {
		Vue.http.get('/api/getOrderList', state.params).then(
			(res) => {
				commit('updateOrderList', res.data.list)
			},
			(err) => {

			}
		)
	}
}
const mutations = {
	updateOrderList (state, payList) {
		state.orderList = payList
	},
	// updateParams (state, payList) {
	// 	state.params[payList.key] = payList[value]
	// }
	updateParams (state, {key, val}) {
		state.params[key] = val
		console.log(state.params)
	}
}



export default {
	state,
	getters,
	actions,
	mutations
}
