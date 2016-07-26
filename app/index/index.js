import Vue from 'vue'
import Router from 'vue-router';

import './common.css';
import App from '../components/Common/App'
import Login from '../components/Login/Login'

import Sale from '../components/SaleOpp/Sale'
import SaleOpp from '../components/SaleOpp/SaleOpp'
import SaleDetail from '../components/SaleOpp/SaleDetail'
import SaleStatus from '../components/SaleOpp/SaleStatus'

import Customer from '../components/Customer/Customer'
import CusDetail from '../components/Customer/CusDetail'


/*--------------------------------------------
|过滤器
-----------------------------------------------
*/
import {limitNum} from '../filter/filter';
Vue.filter('limitNum', limitNum);

/*--------------------------------------------
|自定义指令
-----------------------------------------------
*/
import {progressStatus, saleStatusColor} from '../directive/directive';
Vue.directive('p-status', progressStatus);
Vue.directive('s-status', saleStatusColor);



//使用router plugin
Vue.use(Router);

var router = new Router();

router.map({
	'/login': {
		component: Login
	},
	'/sale': {
		component: Sale,
		subRoutes: {
			'/': {
			    component: SaleOpp	
			},
			'/saleDetail': {
				component: SaleDetail
			},
			'/saleStatus': {
				component: SaleStatus
			}
		}
	},
	'/customer': {
		component: Customer,
		subRoutes: {
			'/': {
			    component: CusDetail	
			}
		}
	}
	
})

// 在每次页面切换的时候调用
router.beforeEach(function() {
	window.scrollTo(0, 0);
})

// 没有匹配到任何路由的时候重定向到 login
router.redirect({
	'*': '/customer'
})


router.start(App, '#app');

