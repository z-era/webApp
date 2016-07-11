var express = require('express');
var webpack = require('webpack');
var config  = require('./webpack.dev.conf');

//express 实例
var app = express();

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


// 注册中间件
app.use(devMiddleware);
app.use(hotMiddleware);

//监听8888 端口
app.listen(8888, function(err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Listen to: http:localhost:8888');
});

