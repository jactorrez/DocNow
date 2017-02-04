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
			}
		]
	},

	resolve: {
		extensions: [".js", ".json", ".jsx", ".css"]
	}
}

