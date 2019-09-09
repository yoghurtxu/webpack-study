const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// const merge = require('webpack-merge');
// const devConfig = require('./webpack.dev.js');
// const prodConfig = require('./webpack.prod.js');
// const commonConfig  = {
module.exports={
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			// loader: 'babel-loader',
			//shimming
            use: [{
                loader: 'babel-loader'
            }
            // , {
				//只是为了举例，运行的时候import 中this会指向window，导致导入模块有问题
                // loader: 'imports-loader?this=window'
            // }
            ]
		}, {
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			}
		}, {
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			}
		},{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname, '../')
		}),
		//例子：用到$的文件自动import jq
        new webpack.ProvidePlugin({
            $: 'jquery',
            _join: ['lodash', 'join']
        }),
	],
    optimization: {
		//文档：
        runtimeChunk: {
            name: 'runtime'
        },
        usedExports:true,
        splitChunks: {
        	//所有文件（包含异步和同步）都做代码分割，配合cacheGroups使用
            chunks: 'all',
			//大于30KB才做代码分割（30000）
            minSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    filename: 'vendors.js',
                },
                default: {
                    priority: -20,
                    reuseExistingChunk: true,
                    filename: 'common.js'
                }
            }
        }
    },
	output: {
		filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
	}
}

// module.exports = (env) => {
//     if(env && env.production) {
//         return merge(commonConfig, prodConfig);
//     }else {
//         return merge(commonConfig, devConfig);
//     }
// }
