const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: path.join(__dirname, "../src/index.jsx"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../docs"),
    clean: true,
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
  optimization: {
    runtimeChunk: "single",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
