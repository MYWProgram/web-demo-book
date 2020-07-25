import './index.css';
const bgMult = require('./bg-mult.png');

var data = {
  len_x: 20,
  width: 203,
  height: 360
};
document.querySelector('.pic').addEventListener('mousemove', function (event) {
  var t = event.offsetX;
  this.width = 203;
  this.height = 360;
  var a = 83,
    e = (data.height / data.width) * this.width;
  this.progress = Math.floor((t / this.width) * 100);
  this.size = this.width * data.len_x;
  var i = Math.floor((t / this.width) * a);
  this.x = (-i % data.len_x) * this.width;
  this.y = -Math.floor(i / data.len_x) * e;
  var self = this;
  document.querySelector('.cover').style = `
    background-image: url(${bgMult});
    background-position: ${self.x}px ${self.y}px;
    background-size: ${self.size} px;
  `;
  document.querySelector('.progress-bar span').style = `
    width: ${self.progress}%;
  `;
});
