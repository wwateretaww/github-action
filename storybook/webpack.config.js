const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'bundle.[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.[hash].html',
      template: "./src/index.html",
    })
  ]
}
