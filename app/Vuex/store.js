import Vue from 'vue'
import Vuex from 'vuex'


//导入各个模块的初始状态和 mutations
import modLogin from './actions/act-login'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		modLogin
	}
})
