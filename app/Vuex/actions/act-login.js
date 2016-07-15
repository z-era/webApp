import request from 'superagent'

const UrlRoot = "http://beta.uniweibo.com"

export const loginIn = function ({dispatch}, cp, router) {
	// request.post(UrlRoot + '/login')
	request.post('/proxy/user/login')
	       .type('form')
	       .send(cp)
	       .end(function(err, res) {
	       	    if (err) {
	       	    	console.log(err);
	       	    	dispatch("CONTROL_LOGIN_ERROR", true);
	       	    } else {
	       	    	if(res.body.error_info === "OK") {
	       	            window.sessionStorage.setItem('result', res.body.error_info);
	       	            router.go('/salesOpportunities');
	                } else {
	                	dispatch("CONTROL_LOGIN_ERROR", true);
	                	console.log(res.body.error_info);
	                }
	       	    }
	       });
}

export const againInput = function ({dispatch}) {
	dispatch("CONTROL_LOGIN_AGAIN")
}

