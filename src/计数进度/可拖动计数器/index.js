import './index.css';

const slideValue = document.querySelector('span');
const inputSlider = document.querySelector('input');
inputSlider.oninput = () => {
  let value = inputSlider.value;
  // * 动态设置展示值。
  slideValue.textContent = value;
};
