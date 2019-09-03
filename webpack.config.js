const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js',
		main2: './src/font/font.js'
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
    output: {
        filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
}
