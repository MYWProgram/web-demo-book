import './index.css';

const passField = document.querySelector('input');
const showBtn = document.querySelector('span');
showBtn.onclick = () => {
  if (passField.type === 'password') {
    passField.type = 'text';
  } else {
    passField.type = 'password';
  }
};
