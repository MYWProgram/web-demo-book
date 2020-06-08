const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const webpackConfigBase = require("./webpack.base.config");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");
const webpackConfigProd = {
  mode: process.env.NODE_ENV,
  plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()],
};
module.exports = merge(webpackConfigBase, webpackConfigProd);
