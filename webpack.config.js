const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
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
        port: 8080
    },
    module: {
        rules: [{
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
        }]
	},
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }), new CleanWebpackPlugin(['dist'])],
    output: {
        // publicPath:'http://cdn.com.cn',
        filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
}
