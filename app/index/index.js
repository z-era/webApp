import Vue from 'vue'
import Router from 'vue-router';

import './common.css';
import App from '../components/Common/App'
import Login from '../components/Login/Login'
import SalesOpportunities from '../components/SaleOpp/SalesOpportunities'
import Single from '../components/SaleOpp/Single'

//使用router plugin
Vue.use(Router);

var router = new Router();

router.map({
	'/login': {
		component: Login
	},
	'/salesOpportunities': {
		component: SalesOpportunities
	},
	'/single': {
		component: Single
	}
})

// 在每次页面切换的时候调用
router.beforeEach(function() {
	window.scrollTo(0, 0);
})

// 没有匹配到任何路由的时候重定向到 login
router.redirect({
	'*': '/salesOpportunities'
})


router.start(App, '#app');

