function show(path) {
  config.model.jsonPath = path;
  L2Dwidget.init(config)
}
// 配置文件官方API: https://l2dwidget.js.org/docs/class/src/index.js~L2Dwidget.html#instance-method-init
var config = {
  model: {
      jsonPath: '', // xxx.model.json 的路径
  },
  display: {
      superSample: 1, // 超采样等级
      width: 250, // canvas的宽度
      height: 300, // canvas的高度
      position: 'right', // 显示位置：左或右
      hOffset: 0, // canvas水平偏移
      vOffset: 0, // canvas垂直偏移
  },
  mobile: {
      show: true, // 是否在移动设备上显示
      scale: 1, // 移动设备上的缩放
      motion: true, // 移动设备是否开启重力感应
  },
  react: {
      opacityDefault: 1, // 默认透明度
      opacityOnHover: 1, // 鼠标移上透明度
  },
}

show(Math.floor(Math.random() * 10) % 2 === 0 ? tororo: hijiki);