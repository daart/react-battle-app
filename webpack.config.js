const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./app/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index_bundle.js",
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: [
					path.resolve(__dirname, "node_modules/")
				],
				use: "babel-loader"
			},
			{
				test: /\.css$/, 
				use: [ 'style-loader', 'css-loader']
			}		
		]
	},

	plugins: [new HtmlWebpackPlugin({
		template: 'app/index.html'
	})],
	
	watch: true,

	devServer: {
		historyApiFallback: true
	}
};