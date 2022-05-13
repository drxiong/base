const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name]-[contenthash:8].js"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin(),
    new CleanWebpackPlugin()
  ],
  devServer: {
    // 当使用 [HTML5 History API] 时，任意的 `404` 响应被替代为 `index.html`
    historyApiFallback: true,
    // 自动打开浏览器
    open: true,
    // 热更新，默认为true
    hot: true,
    // 是否开启代码压缩
    compress: true,
    // 启动的端口
    port: 7777
  }
}