const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const prodConfig = {
	mode: 'production',
	devtool: 'cheap-module-source-map',
    module:{
        rules:[
             {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ],
    },
    optimization: {
	    //合并压缩css代码
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        })
    ],
    output: {
	    //打包后contenthash hash值会变，浏览器就会更新引入的文件，而不是使用缓存,要看效果，此文件的devtool要先注释
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js'
    }
}

module.exports = prodConfig;
