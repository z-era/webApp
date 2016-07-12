var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

//引入配置文件
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),                   //发生错误也不退出

    new HtmlWebpackPlugin({
    	filename: 'app/index/index.html',
    	template: path.resolve(__dirname, '../app/index/index.html'),
    	inject: true
    })
];

//动态向入口文件中注入  webpack-hot-middleware/client
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function(name, i) {
	var extras = [devClient];
	config.entry[name] = extras.concat(config.entry[name]);
	
})

module.exports = config;