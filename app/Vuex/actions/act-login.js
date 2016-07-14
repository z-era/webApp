import request from 'superagent'

function loginIn(cp) {
	request.post('http://beta.uniscrm.cn:8770/login')
	       .set("Content-Type", "application/json" )
	       .send(JSON.stringify(cp))
	       .end(function(res) {
	       	    if (res.ok) {
	       	    	console.log(res);
	       	    } else {
	       	    	console.log(res);
	       	    }
	       });
	     
}

export default loginIn;