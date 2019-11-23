let path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

let conf = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist/'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	plugins: [new webpack.DefinePlugin(envKeys)],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							'@babel/plugin-transform-react-jsx',
							"@babel/transform-runtime"
						]
					}
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		]
	}
};

module.exports = conf;