import "./index.css";

let boxElement = document.querySelector(".box");
boxElement.onmousemove = e => {
  let circleX = e.pageX - boxElement.offsetLeft;
  let circleY = e.pageY - boxElement.offsetTop;
  boxElement.style.setProperty("--x", `${circleX}px`);
  boxElement.style.setProperty("--y", `${circleY}px`);
};
