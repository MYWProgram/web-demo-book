let canvas = "";
let balls = [];
let ctx = "";

class Balls {
  constructor() {
    this.jq = "";
    this.balls = "";
    this.timer = "";
    this.html = `<!-- 背景气泡绘制 -->
    <canvas id="bgCanvas"></canvas>`;
  }
  init() {
    this.reset();
  }
  reset() {
    this.jq = $("body").children("#bgCanvas");
    if (this.jq.length) {
      this.jq.remove();
      $("body").append(this.html);
    } else {
      $("body").append(this.html);
      this.jq = $("#bgCanvas");
    }
    canvas = document.getElementById("bgCanvas");
    canvas.height = document.body.clientHeight;
    canvas.width = document.body.clientWidth;
    balls = [];
    ctx = canvas.getContext("2d");
    for (let i = 0; i < 28; i++) {
      let ball = new Ball(ctx, canvas.width, canvas.height);
      ball.draw();
      balls.push(ball);
    }
    this.timer = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i in balls) {
        balls[i].draw();
      }
    }, 30);
  }
  remove() {
    if (this.jq) this.jq.remove();
    clearInterval(this.timer);
  }
}

class Ball {
  constructor(ctx, screenWidth = 1366, screenHeight = 1024) {
    this.x = 100; //球形状x坐标
    this.y = 100; //球形状y坐标
    this.r = 10; //球形状半径
    this.opacity = 0.2; //透明度
    this.ctx = ctx; //绘制环境
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.angle = 0; // 摇动开始角度
    this.speed = 0;
    this.init();
  }
  init() {
    this.opacity = Math.random() / 5;
    this.x = Math.floor(Math.random() * this.screenWidth);
    this.y = Math.floor(Math.random() * this.screenHeight);
    this.r = Math.floor(Math.random() * 8 + 5);
    this.angle = Math.random() * 360;
    this.speed = 0.02 + Math.random() * 0.05;
  }
  draw() {
    this.x = Math.sin(this.angle) + this.x;
    this.ctx.beginPath();
    this.ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fill();
    this.angle += this.speed;
  }
}

export default Balls;
