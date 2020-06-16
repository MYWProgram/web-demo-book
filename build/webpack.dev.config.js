const path = require("path");
const merge = require("webpack-merge");
const webpackConfigBase = require("./webpack.base.config");
const port = 9527;
const webpackConfigDev = {
  devtool: "cheap-module-eval-source-map",
  mode: process.env.NODE_ENV,
  devServer: {
    port: port,
    host: "0.0.0.0",
    // * 终端仅显示 error。
    stats: "errors-only",
    // * 屏蔽内联模式下操作后终端的日志消息。
    clientLogLevel: "silent",
    // * 开启 gzip 压缩。
    compress: true,
  },
};
module.exports = merge(webpackConfigBase, webpackConfigDev);
