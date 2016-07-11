var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: ['webpack-hot-middleware/client', path.resolve(__dirname, '../app/index/index.js')],
	output: {
		path: path.resolve(__dirname, '../output/static'),
		publicPath: 'static/',
		filename: '[name].[hash].js',
		chunkFilename: '[id].[chunkname].js'
	},
	resolve: {
        extensions: ['', '.js', '.vue']
	},
	module: {
		loaders: [
		    {test: /\.vue$/, loader: 'vue'},
		    {test: /\.js$/, loader: 'babel?presets=es2015', exclude: /node_modules/ }
		]
	},
	plugins: [
	    new HtmlWebpackPlugin({
	    	filename: '../index.html',
	    	template: path.resolve(__dirname, '../app/index/index.html'),
	    	inject: true                                                       //将js 文件加载到 body
	    })
	]
};
