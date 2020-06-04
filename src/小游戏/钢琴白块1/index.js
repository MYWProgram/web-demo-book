window.onload = function () {
  var Model = function (canvas) {
    var me = this;
    me.canvas = canvas;
    me.context = canvas.getContext("2d");
    me.blockArr = [];
    me.toBeErase = 10; //待消除行数的最大值
    me.erase = 0; //已经消除的行数
    //初始化列索引
    for (var i = 0; i < 6; i++) {
      me.blockArr[i] = (Math.random() * 4) | 0;
    }

    me.drawGrid();
    me.drawBlock();
    me.startGame();

    //alert()
    canvas.addEventListener("click", function (e) {
      //添加事件监听器
      var r = me.checkBlock(e.offsetX, e.offsetY);
      switch (r) {
        case 0:
          alert("game over");

          break;
        case 1:
          break;
        case 2:
          me.eraseLastRow();

          break;
      }
    });
  };
  /**
   * 绘制网格
   */
  Model.prototype.drawGrid = function () {
    var me = this;
    var ctx = me.context;
    var width = me.canvas.width / 4;
    //绘制横线
    ctx.fillStyle = "#000000";
    for (var i = 0; i < 5; i++) {
      var y = (i + 1) * width;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(me.canvas.width, y);
      ctx.stroke();
      ctx.closePath();
    }
    for (var i = 0; i < 3; i++) {
      var x = (i + 1) * width;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, me.canvas.height);
      ctx.stroke();
      ctx.closePath();
    }
  };
  /**
   * 绘制黑块
   */
  Model.prototype.drawBlock = function () {
    var me = this;
    var ctx = me.context;
    ctx.fillStyle = "#000000";
    var width = me.canvas.width / 4;
    for (var i = 0; i < 6; i++) {
      if (me.blockArr[i] === -1) {
        continue;
      }
      var y = width * i;
      //列索引
      var x = me.blockArr[i] * width; //取整
      //把列索引存储到数组中
      //var index=(Math.random()*4)|0;
      //me.blockArr[i]=index;

      ctx.fillRect(x, y, width, width);
    }
  };
  /**
   * 判断黑块
   * @param x:    点击的x坐标
   * @param y:    点击y的坐标
   * @return 0表示白块，1表示非最后一行的黑块  2表示最后一行的黑块
   */
  Model.prototype.checkBlock = function (x, y) {
    var me = this;
    var width = me.canvas.width / 4;
    var col = (x / width) | 0;
    var row = (y / width) | 0;

    if (me.blockArr[row] !== col) {
      return 0;
    } else {
      if (row === me.blockArr.length - 1) {
        return 2;
      }
      return 1;
    }
  };
  /**
   * 擦除最后一行
   */
  Model.prototype.eraseLastRow = function () {
    var me = this;
    me.blockArr.pop(); //最后元素出来
    //在最前面插入一个新的值
    if (me.erase < me.toBeErase - 6) {
      me.blockArr.unshift((Math.random() * 4) | 0); //0-1之间不包括1
    } else {
      me.blockArr.unshift(-1); //最后6行不在画黑块
    }
    me.context.clearRect(0, 0, me.canvas.width, me.canvas.height); //清除画布
    //重新绘制
    me.drawGrid();
    me.drawBlock();
    if (++me.erase == me.toBeErase) {
      alert("Ending");
      clearInterval(me.interval); //清除函数关闭定时器
    }
  };
  Model.prototype.startGame = function () {
    var me = this;
    //游戏开始时间
    /*for(var i=0;i<6;i++)
      {
          me.blockArr[i]=Math.random()*4|0;
      }*/
    me.startTime = new Date();
    me.interval = setInterval(function () {
      var d = new Date();
      var d1 = d - me.startTime;
      document.querySelector("#divTimer").innerHTML = d1 / 1000;
    }, 100); //每过100毫秒执行一次
  };
  Model.prototype.clickButton = function () {
    var me = this;
    var again = document.querySelector("button").onclick.startGame();
  };
  //暴露model
  window.WhiteBlock = Model;

  new WhiteBlock(document.querySelector("canvas"));
};
