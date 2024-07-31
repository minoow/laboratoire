const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const GenerateJsonPlugin = require("generate-json-webpack-plugin");

module.exports = {
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
