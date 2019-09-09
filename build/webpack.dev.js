const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const devConfig = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8006,
		hot: true,
        //文档：https://www.webpackjs.com/configuration/dev-server/#devserver-proxy
        proxy: {
            '/react/api': {
                target: 'https://www.dell-lee.com',
                pathRewrite: {
                    'header.json': 'demo.json'
                }
            }
        }
	},
	module:{
		rules:[
             {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
    }
}

// module.exports = devConfig;
module.exports = merge(commonConfig, devConfig);