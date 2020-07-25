import './index.css';

let imgs = document.querySelectorAll('img');
Array.from(imgs).forEach((img, index) => {
  let src = img.getAttribute('src');
  let image = new Image();
  image.src = src;
  let width = 360;
  image.onload = () => {
    let w = image.width,
      h = image.height;
    let height = Math.round((h * width) / w);
    img.src = src;
    img.parentNode.parentNode.style = `width: ${width}px;`;
    img.parentNode.style = `grid-row-end: span ${height / 10};`;
  };
});
