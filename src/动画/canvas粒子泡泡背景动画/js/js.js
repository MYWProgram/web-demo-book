let c, ctx
$(document).ready(function() {
  initCanvas();
  c=$("#cv")[0];
  ctx=c.getContext("2d");
  setInterval(clickCanvas,30);
})

//click后
function clickCanvas(){
//	var e=window.event;
//	$("#cv").mousemove(function(e){
//		initData(e.screenX,e.screenY,5);
	var randX=Math.random()*window.innerWidth;
	var randY=Math.random()*window.innerHeight;
	initData(randX,randY,5);
		clearCanvas(ctx,c);
		draws();
//	});
	update();
}

function update(){
	for(var i=0;i<data.length;i++){
			data[i][0]+=data[i][3];
			data[i][1]+=data[i][4];
			data[i][5]-=0.01;
			if(data[i][5]<0){
				data.splice(i,1);
			}
	}	
}


//初始化canvas大小
function initCanvas(){
	$("#cv").attr({
		"width":window.innerWidth,
		"height":window.innerHeight
	});
}

//当长宽重新设定canvas更新
function clearCanvas(context,c){
	context.clearRect(0, 0, c.width,c.height);
}

var data=[];//data用来存储每一个点的数据，x,y,r,xv,yv,op,clr颜色
var index=0;//当前起始位置
//画图前先初始化data
function initData(x,y,num)
{
//	data=[];
	var di=[];
	for(var i=0;i<num;i++){
		di=[];
		di.push(x);
		di.push(y);
		di.push(Math.floor((Math.random()+0.1)*23));//半径
		var v=Math.abs(Math.random()-0.5*10);
		var a=Math.random()*2*Math.PI;
		di.push(Math.floor(Math.cos(a)*v));
		di.push(Math.floor(Math.sin(a)*v));
		di.push(1);
		di.push(color16());
		data.push(di);
		// console.log(di);
	}
	
}
//根据data画圆
function draws(){
	const num=data.length;
	for(var i=0;i<num;i++){
		drawC(ctx,data[i][0],data[i][1],data[i][2],data[i][5],data[i][6]);
	}
}

//画随机大小随机颜色的圆
function drawC(context,x,y,r,op,c){
//	var c=color16();
	context.beginPath();
	context.arc(x,y,r,0,2*Math.PI);
	context.globalAlpha=op;
	context.strokeStyle=c;
	context.fillStyle=c;
	context.shadowColor=c;
	context.shadowBlur=Math.random()*20;
	context.fill();
	context.stroke();
	return r;
}


function color16(){//十六进制颜色随机
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
	return color;
}