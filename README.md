# demobar

使用 webpack 构建方便编写 demo 的多页面脚手架，适合开发者编写 demo 页面，提供分类预览的功能。

## 使用方法

- 每一个 demo 必须有一个分类，只需要在 src 中创建分类目录；
- 在分类目录中添加单个 demo 的目录，里面必须包含`index.js`、`index.html`；
- 在分类目录中创建 `config.json`，里面包含当前分类中 demo 的配置信息，比如标题和路径。

```bash
// config.json 格式如下
{
  "path": [
    {
      "title": "动画按钮",
      "src": "./动画按钮"
    },
    {
      "title": "文字撕裂效果",
      "src": "./文字撕裂效果"
    },
    {
      "title": "canvas粒子泡泡",
      "src": "./canvas粒子泡泡"
    }
  ]
}
```

- 打包的时候需要配置根目录下`.env.production`文件的`PUBLICPATH`为静态文件根路径。比如当前`demobar`项目放在`https://MYWProgram.github.io/demo-book/`域名路径下，那么`PUBLICPATH`可以设置为`/demo-book/`或者`https://MYWProgram.github.io/demo-book/`。

### dependences version

- yarn 1.22.4
- node v10.16.0
- webpack 4.43.0

#### webpack 插件

- babel-loader 将JS转义为低版本
- html-webpack-plugin 在浏览器中查看页面，打包html
- webpack-dev-server 开发实时查看效果
- devtool 可以帮助我们将编译后的代码映射回原始源代码
- css相关loader style-loader css-loader postcss-loader autoprefixer less-loader
- clean-webpack-plugin 每次打包前清空dist目录
- copy-webpack-plugin copy静态文件目录
- underscore-template-loader 处理ejs文件中的引入
- webpack-bundle-analyzer 可以看到项目各模块的大小，可以按需优化
- open-browser-webpack-plugin 自动打开浏览器
- mini-css-extract-plugin 分离css