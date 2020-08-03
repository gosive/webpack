
const path = require('path') //absolute path
const TerserPluggin = require('terser-webpack-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding

module.exports = {
	entry: './sass/main.js',
	output: { 
		filename: 'bundle.js',
		path: path.resolve(__dirname, './public/src' )
	},
	mode: 'none',

    devServer: {
        contentBase: path.resolve(__dirname),
        index: 'index.html',
        port: 9000
    },	

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/, 
				use:{
					loader:'babel-loader',
					options: {
						presets: ['@babel/env'], 
						plugins: ['transform-class-properties']
					}
				}			
			}, 

			{
				test: '/\.scss', 
				use:['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}, 




	plugins: [

		new TerserPluggin(),
		new NodemonPlugin(),


	]

}

