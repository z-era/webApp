var express = require('express');
var webpack = require('webpack');
var config  = require('./webpack.dev.conf');
var proxy   = require('express-http-proxy');
var bodyParser = require('body-parser');

//express 实例
var app = express();

// app.use(bodyParser.json({limit: '1mb'}))
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));

//调用webpack， 把配置文件传进去
var compiler = webpack(config);

//使用webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath,
	stats: {
		colors: true,
		chunks: false
	}
});

//使用 webpack-hot-middleware 中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler);

//webpack 插件,监听 html文件改变事件
compiler.plugin('compilation', function(compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
		//发布事件
		hotMiddleware.publish({
			action: 'reload'
		})
		cb()
	})
})
// 注册中间件
app.use(devMiddleware);
app.use(hotMiddleware);


app.use('/proxy', proxy('beta.uniweibo.com'));


//监听8888 端口
app.listen(8080, function(err) {

	if (err) {
		console.log(err);
		return;
	}
	console.log('Listen to: http:localhost:8080');
});

