const path = require('path');

module.exports = {

	entry: __dirname + "/src/js/index.js", 
	output: {
		path: __dirname + "/dist/js/",
		filename: "app.bundle.js",
		publicPath: "/dist/js/"
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: [
					path.resolve(__dirname, "src/js")
				],
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["react"]
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
				
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 25000,
						name: "[name]-[hash:6].[ext]",
						outputPath: "../img/",
						publicPath: "dist/img/"
					}
				}
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader'
			}
		]
	},

	resolve: {
		extensions: [".js", ".json", ".jsx", ".scss", ".png", ".jpg", ".jpeg", ".svg"],
		modules: ["node_modules", path.resolve(__dirname, "src/img/")]
	},
}

