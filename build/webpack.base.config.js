const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let dotenv = require('dotenv');
const path = require('path');
const { getEntries, getName, getPageConfigs } = require('./utils');

// * 获取所有的入口 configs。
const entrieConfigs = getEntries('src/*/config.json');
const { pagesConfig, entries } = getPageConfigs(entrieConfigs);
const themeEntries = { index: path.resolve(__dirname, '../template/main.js') };
// for (let key in pagesConfig) {
//   for (let page of pagesConfig[key].pages) {
//     console.log(page)
//     console.log(page.type, page.title, page.path)
//   }
// }
const mode = process.env.NODE_ENV || 'development';
if (mode === 'development') {
  dotenv.config({ path: path.resolve(__dirname, '../.env.development') });
} else {
  dotenv.config({ path: path.resolve(__dirname, '../.env.production') });
}

module.exports = {
  mode: mode,
  entry: Object.assign({}, entries, themeEntries),
  output: {
    filename: '[name]/[name].js',
    path: path.join(__dirname, '../docs'),
    publicPath: process.env.PUBLICPATH
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')({
                    overrideBrowserslist: ['>0.25%', 'not dead']
                  })
                ];
              }
            }
          },
          'less-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              esModule: false,
              name: '[name]-[hash:6].[ext]',
              outputPath: (url, resourcePath) => {
                const pathName = getName(resourcePath);
                return `${pathName}/${url}`;
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          attributes: true
        }
      },
      {
        test: /\.ejs$/,
        loader: 'underscore-template-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
      chunkFilename: '[name]/[id].css'
    }),
    ...Object.keys(entries).map(name => {
      return new HtmlWebpackPlugin({
        template: entries[name].slice(0, -8) + 'index.html',
        filename: name + '/index.html',
        // minify: {
        //   removeAttributeQuotes: false,
        //   collapseWhitespace: false
        // },
        // ! 关闭 HtmlWebpackPlugin 针对单个文件 Demo 文件打包时的 minify 设置，导致图片部分加载失败的 Bug.
        minify: false,
        chunks: [name]
      });
    }),
    // 生成模板页
    new HtmlWebpackPlugin({
      template: 'template/index.ejs',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: false,
        collapseWhitespace: false
      },
      title: 'DEMO-BOOK',
      templateParameters: {
        pagesConfig: pagesConfig,
        publicPath: process.env.PUBLICPATH
      },
      chunks: ['index']
    }),
    new CopyWebpackPlugin([
      {
        from: 'template/public/',
        to: '../docs',
        flatten: false
      }
    ])
  ]
};
