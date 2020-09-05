import './index.css';

let startX, startWidth;
const getScalableDivWidth = () => {
  return parseInt(window.getComputedStyle(document.querySelector('.scalable')).width, 10);
};
startWidth = localStorage.getItem('scalable_width') || getScalableDivWidth();
const onDrag = e => {
  let newWidth = startWidth + e.clientX - startX;
  document.querySelector('.scalable').style.width = newWidth + 'px';
};
const stopDrag = e => {
  localStorage.setItem('scalable_width', getScalableDivWidth());
  document.documentElement.removeEventListener('mousemove', onDrag);
  document.documentElement.removeEventListener('mouseup', stopDrag);
};
const startDrag = e => {
  startX = e.clientX;
  startWidth = getScalableDivWidth();
  document.documentElement.addEventListener('mousemove', onDrag);
  document.documentElement.addEventListener('mouseup', stopDrag);
};
document.querySelector('.scalable').style.width = startWidth + 'px';
document.querySelector('.separator').addEventListener('mousedown', startDrag);
