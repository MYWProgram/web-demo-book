import './main.css'

var clock = null;
var state = 0;
var scoress = 0;

function init() {
  for (var i = 0; i < 4; i++) {
    crow();
  }

  $("main").onclick = function (ev) {
    judge(ev);
  };
}

$("anniu").onclick = function () {
  start();
};

function judge(ev) {
  if (state == 3) {
    alert("fuckyou!!不要再戳我了！");
  } else {
    if (ev.target.className.indexOf("black") == -1) {
      clearInterval(clock);
      state = 3;
      alert("结束");
    } else {
      ev.target.className = "cell";
      ev.target.parentNode.pass = 1;
      score();
    }
  }
}

//加速
function speed() {}

function move() {
  speed();
  var con = $("container");
  var top = parseInt(window.getComputedStyle(con, null)["top"]);
  top += 5;
  con.style.top = top + "px";

  if (top == 0) {
    crow();
    con.style.top = -150 + "px";
    drow();
  } else if (top == -95) {
    var rows = con.children;
    if (rows.length == 5 && rows[rows.length - 1].pass != 1) {
      clearInterval(clock);
      state = 3;
      alert("你挂了！");
    }
  }
}

function score() {
  $("score").innerHTML = parseInt($("score").innerHTML) + 1;
  scoress = parseInt($("score").innerHTML) + 1;
}

function start() {
  clock = setInterval(move, 20);
}

function crow() {
  var row = cdiv("row");
  var classes = creatSn();
  var con = $("container");
  for (var i = 0; i < 4; i++) {
    row.appendChild(cdiv(classes[i]));
  }
  if (con.firstChild == null) {
    con.appendChild(row);
  } else {
    con.insertBefore(row, con.firstChild);
  }
}

function drow() {
  var con = $("container");
  if (con.children.length == 6) {
    con.removeChild(con.lastChild);
  }
}

//创建div，其class为className
function cdiv(className) {
  var div = document.createElement("div");
  div.className = className;
  return div;
}

///获取id
function $(id) {
  var idd = document.getElementById(id);
  return idd;
}

function creatSn() {
  var Arr = ["cell", "cell", "cell", "cell"];
  var i = (Math.random() * 4) | 0;
  Arr[i] = "cell black";
  return Arr;
}

window.onload = function() {
  init();
}
