var hotClient = require('webpack-hot-middleware/client');

hotClient.subscribe(function(event) {      //发布事件
	if (event.action === 'reload') {      
		window.location.reload();
	}
})