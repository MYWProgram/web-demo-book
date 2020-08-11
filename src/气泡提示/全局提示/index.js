import './index.css';

const buttonEl = document.querySelector('button');
const alertBox = document.querySelector('.alert');
const closeBtn = document.querySelector('.close-btn');
buttonEl.onclick = () => {
  alertBox.classList.add('show');
  alertBox.classList.remove('hide');
  alertBox.classList.add('showAlert');
  // setTimeout(function () {
  //   alertBox.classList.remove('show');
  //   alertBox.classList.add('hide');
  // }, 3000);
};
closeBtn.onclick = () => {
  alertBox.classList.remove('show');
  alertBox.classList.add('hide');
};
