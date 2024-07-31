const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const GenerateJsonPlugin = require("generate-json-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: path.join(__dirname, "../src/index.tsx"),
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
      directory: path.join(__dirname, "../src"),
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
  plugins: [
    new HtmlWebpackPlugin({
      title: "laboratorie",
      template: path.join(__dirname, "../src/index.html"),
    }),
    new GenerateJsonPlugin("root.json", {
      page: [],
    }),
  ],
};
