const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
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
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname, '../')
		})
	],
    optimization: {
		//文档：
        usedExports:true,
        splitChunks: {
        	//所有文件（包含异步和同步）都做代码分割，配合cacheGroups使用
            chunks: 'all',
			//大于30KB才做代码分割（30000）
            // minSize: 0,
            // minChunks: 1,
            // maxAsyncRequests: 5,
            // maxInitialRequests: 3,
            // automaticNameDelimiter: '~',
            // name: true,
            // cacheGroups: {
            //     vendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -10,
            //         filename: 'vendors.js',
            //     },
            //     default: {
            //         priority: -20,
            //         reuseExistingChunk: true,
            //         filename: 'common.js'
            //     }
            // }
        }
    },
	output: {
		filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
	}
}
