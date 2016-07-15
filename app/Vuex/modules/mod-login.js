import { CONTROL_LOGIN_ERROR}  from '../mutation-types'

const state = {
	error: false
}

const mutations = {
	[CONTROL_LOGIN_ERROR] (state, status) {
		state.error = status;
	}
}

export default {
	state,
	mutations
}