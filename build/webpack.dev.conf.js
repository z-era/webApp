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

module.exports = config;