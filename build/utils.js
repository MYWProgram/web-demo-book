const pinyin = require("pinyin");
const glob = require("glob");
const path = require("path");
const pinyinConfig = { style: pinyin.STYLE_NORMAL }


// 获取指定路径下的入口文件
function getEntries(globPath) {
  const files = glob.sync(globPath);
  const entries = {};
  files.forEach(function (filepath) {
    const split = filepath.split("/");
    const name = split[split.length - 2];
    entries[name] = "../" + filepath;
  });
  return entries;
}

// 根据路径生成文件名
function getName(path) {
  const pathArr = path.split("src")[1].split("\\");
  let pathName = (
    pinyin(pathArr[1], pinyinConfig).join("") +
    "_" +
    pinyin(pathArr[2], pinyinConfig).join("")
  );
  pathName = pathName.replace(/ /g, '_')
  return pathName
}

// 获取每一页的配置信息
function getPageConfigs(entrieConfigs) {
  const pagesConfig = {};
  const entries = {}
  for (let key in entrieConfigs) {
    // 每一个目录的配置信息，包含入口信息
    const config = require(entrieConfigs[key]);
    pagesConfig[key] = {};
    pagesConfig[key].pages = [];
    pagesConfig[key].name = pinyin(key, pinyinConfig).join("");

    const paths = config.path;
    for (let pathNode of paths) {
      const src = path.join(__dirname, "../src", key, pathNode.src, "index.js");
      const name = getName(src);
      entries[name] = src;
      pagesConfig[key].pages.push(
        Object.assign(pathNode, {
          path: "/" + name,
          type: key,
          name,
        })
      );
    }
  }
  return { pagesConfig, entries };
}

module.exports = {
  getEntries,
  getName,
  getPageConfigs
};
