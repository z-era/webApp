var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

//提取配置文件
var config = require('./webpack.config');

config.vue = {
	loaders: {
		css: ExtractTextPlugin.extract("css")
	}
};

config.plugins = {
	//提取为单文件
	new ExtractTextPlugin("../[name].[contenthash].css"),
	
	new HtmlWebpackPlugin({
		filename: '../index.html',
		template: path.resolve(__dirname, '../app/index/index.html'),
		inject: true                                                       //将js 文件加载到 body
	}),
	
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	}),
	new webpack.optimize.OccurenceOrderPlugin(),
	
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	}),
	
	//公共模块的提取
    new webpack.optimize.CommonsChunkPlugin({
    	name: 'vendors',
    	filename: 'vendors.js'
    })
	
}

module.exports = config;
