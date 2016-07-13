var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');

module.exports = {
	entry: { 
		index: path.resolve(__dirname, '../app/index/index.js'),
		vendors: [
		   'Vue'
		]
	},
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
		    {test: /\.js$/, loader: 'babel?presets=es2015', exclude: /node_modules/ },
		    {test: /\.css$/, loader: 'style!css'},
		    {test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader'},
		    {test: /\.(png|jpg|gif|svg)$/, loader: 'url', query: {limit: 10000, name: '[name].[ext]?[hash:7]'}}
		]
	},
	plugins: [
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
	    
	    new webpack.optimize.UglifyJsPlugin({
	    	compress: {
	    		warnings: false
	    	}
	    })
	]
};
