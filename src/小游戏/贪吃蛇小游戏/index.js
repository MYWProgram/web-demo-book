import './main.css'

var data = {
  // 初始头位置
  x: 5,
  y: 5,
  size: 10, //大小
  timeout: 200, // 每隔多久刷新
}
var score = 0;
let canvas, ctx, snake, food
window.onload = function() {
  init()
}

/**
* 初始化画布
*/
function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d")
  snake = new Snake(data.x, data.y)
  food = new Food()
  getKey()
  draw();
  document.getElementById('start').onclick = function() {
      snake.stop()
      snake.move()
  }
  document.getElementById('stop').onclick = function() {
      snake.stop()
  }
  document.getElementById('restart').onclick = function() {
      snake.stop()
      snake = new Snake(data.x, data.y)
      food = new Food()
      score = 0
      snake.move()
  }
  // time = setInterval(function() {
  // draw();
  // snake.move()
  // }, data.timeout)
}

/**
* 按键时间
*/
function getKey() {
  document.onkeydown=function(event){
      var e = event || window.event || arguments.callee.caller.arguments[0];
      
      if(e && e.keyCode==38){//下
          if (snake.direction !== 'top')
          snake.direction = 'bottom'
      }
      if(e && e.keyCode==37){//左
          if (snake.direction !== 'right')
          snake.direction = 'left'
      }

      if(e && e.keyCode==39){//右
          if (snake.direction !== 'left')
          snake.direction = 'right'
      }
      
      if(e && e.keyCode==40){//上
          if (snake.direction !== 'bottom')
          snake.direction = 'top'
      }
  };
}

/**
* 绘图
*/
function draw() {
  ctx.fillStyle = "#c0b4b4";
  ctx.fillRect(0, 0, 500, 300);
  for (var i = 0; i< snake.body.length; i++) {
      ctx.save()
      ctx.translate(snake.body[i][0] * data.size, snake.body[i][1] * data.size);
      if (i === 0) {
          ctx.fillStyle = "DarkGreen";
      } else {
          ctx.fillStyle = "green";
      }
      ctx.fillRect(0, 0, data.size, data.size);
      ctx.restore()
  }
  ctx.save()
  ctx.translate(food.x * data.size, food.y * data.size);
  ctx.fillStyle = "OrangeRed";
  ctx.fillRect(0, 0, data.size, data.size);
  ctx.restore()
  document.getElementsByClassName('score')[0].innerHTML = score;
  requestAnimationFrame(draw);
}

/**
* 创建蛇对象
*/
function Snake(x, y) {
  this.moving = true;
  this.body = [[x, y]] // 蛇的身体
  this.direction = 'right' // 初始方向
  this.time = null
  this.move = function() {
      var _this = this
      this.time = setInterval(function () {
          var last = [].concat(_this.body[_this.body.length - 1]);
          for (var i = _this.body.length-1;i>=1;i--) {
              _this.body[i][0] = _this.body[i-1][0]
              _this.body[i][1] = _this.body[i-1][1]
          }
          switch (_this.direction) {
              case 'right':
                  _this.body[0][0] += 1
                  break
              case 'bottom':
                  _this.body[0][1] -= 1
                  break
              case 'left':
                  _this.body[0][0] -= 1
                  break
              case 'top':
                  _this.body[0][1] += 1
                  break
          }
          // 检查是否遇到食物
          if (_this.body[0][0] === food.x && _this.body[0][1] === food.y) {
              _this.eat(last)
          }
          // 检查是否遇到自己身体
          var index = _this.body.findIndex(function(e, i) {
              return i !== 0 && (_this.body[0][0] === e[0] && _this.body[0][1] === e[1])
          })
          if (index !== -1 || (_this.body[0][0] === last[0] && _this.body[0][1] === last[1] )) {
              alert('你撞到自己了')
              _this.stop()
          }
          // 检查是否撞墙
          if (_this.body[0][0] < 0 || _this.body[0][0] > 49 ||_this.body[0][1] < 0 ||_this.body[0][1] > 29) {
              alert('你撞墙了')
              _this.stop()
          }
      }, data.timeout)
  }
  this.eat = function(last) {
      this.body.push(last)
      score += 1;
      food = new Food()
  }
  this.stop = function() {
      clearInterval(this.time)
  }
}

/**
* 食物
*/
function Food() {
  this.x = Math.floor(Math.random() * 50)
  this.y = Math.floor(Math.random() * 30)
}
