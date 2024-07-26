const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: path.join(__dirname, "../src/index.jsx"),
  },
  resolve: {
    extensions: ["*", ".js", "jsx", ".ts", ".tsx"],
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../docs"),
      publicPath: "/",
    },
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "laboratorie",
      template: path.join(__dirname, "../src/index.html"),
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../docs"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
