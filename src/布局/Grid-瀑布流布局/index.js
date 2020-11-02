import './index.css';

let imgs = document.querySelectorAll('img');
Array.from(imgs).forEach(img => {
  let src = img.getAttribute('src');
  let image = new Image();
  image.src = src;
  let width = 360;
  image.onload = () => {
    let w = image.width,
      h = image.height;
    let height = Math.round((h * width) / w);
    img.src = src;
    // * 获取到图片高度之后，使用 span 来设置 grid-row-end 属性，撑开单张图片对应的容器。
    img.parentNode.style = `grid-row-end: span ${height / 10};`;
  };
});
