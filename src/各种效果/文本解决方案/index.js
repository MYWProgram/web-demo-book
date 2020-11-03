import './index.css';

// ? 多行文本溢出 JS 省略号。（中英文结合显示有问题）
const text =
  '这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本';
const totalTextLen = text.length;
const formatStr = () => {
  const ele = document.querySelector('.multi-line--text_wrapper__JS'),
    lineNum = 2,
    baseWidth = window.getComputedStyle(ele).width,
    baseFontSize = window.getComputedStyle(ele).fontSize,
    lineWidth = +baseWidth.slice(0, -2);
  // 所计算的 strNum 为元素内部一行可容纳的字数（只考虑了中文）。
  const strNum = Math.floor(lineWidth / +baseFontSize.slice(0, -2));
  let content = '';
  // 多行可容纳总字数
  const totalStrNum = Math.floor(strNum * lineNum);
  const lastIndex = totalStrNum - totalTextLen;
  if (totalTextLen > totalStrNum) {
    content = text.slice(0, lastIndex - 3).concat('...');
  } else {
    content = text;
  }
  ele.innerHTML = content;
};
formatStr();
window.onresize = () => {
  formatStr();
};
