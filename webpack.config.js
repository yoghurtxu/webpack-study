const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	mode: 'development',
    // development devtool: 'cheap-module-eval-source-map',
    // production devtool: 'cheap-module-source-map',
    devtool: 'cheap-module-eval-source-map',
	entry: {
		main: './src/index.js',
		main2: './src/font/font.js'
	},
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8000,
        hot:true,
        hotOnly:true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            //babel和webpack连接的桥梁，参考https://www.babeljs.cn/setup#installation
            loader: 'babel-loader',
            //options的内容写到.babelrc里面
            // options:{
            //     //将es6转化为es5，参考https://www.babeljs.cn/setup#installation
            //     // "presets": [["@babel/preset-env", {
            //     //     //chrome版本大于67不做转义
            //     //     "targets": {
            //     //         chrome: "67"
            //     //     },
            //     //     //配置了"useBuiltIns": "usage"后，Babel 会在你使用到 ES2015+ 新特性时，自动添加 babel-polyfill 的引用，
            //     //     // 并且polyfill填充低版本不具备的特性的时候，是根据代码中使用到的es6代码来的，而不是所有的代码都填充
            //     //     "useBuiltIns": "usage"
            //     // }]]
            // }
        },{
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
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        // modules: true
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
        }]
	},
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }), new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()],
    output: {
        // publicPath:'http://cdn.com.cn',
        filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
}
