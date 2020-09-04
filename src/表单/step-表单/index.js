import './index.css';

const slidePage = document.querySelector('.slide-page');
const nextBtnFirst = document.querySelector('.firstNext');
const prevBtnSec = document.querySelector('.prev-1');
const nextBtnSec = document.querySelector('.next-1');
const prevBtnThird = document.querySelector('.prev-2');
const nextBtnThird = document.querySelector('.next-2');
const prevBtnFourth = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.submit');
const progressText = [...document.querySelectorAll('.step p')];
const progressCheck = [...document.querySelectorAll('.step .check')];
const bullet = [...document.querySelectorAll('.step .bullet')];
let current = 1;
// ? 下一步按钮。
nextBtnFirst.addEventListener('click', () => {
  // * form 向左移动 1 / 4.
  slidePage.style.marginLeft = '-25%';
  // * 给相应的 step 加上 active 类。
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});
nextBtnSec.addEventListener('click', () => {
  slidePage.style.marginLeft = '-50%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});
nextBtnThird.addEventListener('click', () => {
  slidePage.style.marginLeft = '-75%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});
submitBtn.addEventListener('click', () => {
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
  setTimeout(() => {
    alert('Your Form Successfully Signed up');
    location.reload();
  }, 800);
});
// ? 上一步按钮。
prevBtnSec.addEventListener('click', () => {
  slidePage.style.marginLeft = '0%';
  bullet[current - 2].classList.remove('active');
  progressCheck[current - 2].classList.remove('active');
  progressText[current - 2].classList.remove('active');
  current -= 1;
});
prevBtnThird.addEventListener('click', () => {
  slidePage.style.marginLeft = '-25%';
  bullet[current - 2].classList.remove('active');
  progressCheck[current - 2].classList.remove('active');
  progressText[current - 2].classList.remove('active');
  current -= 1;
});
prevBtnFourth.addEventListener('click', () => {
  slidePage.style.marginLeft = '-50%';
  bullet[current - 2].classList.remove('active');
  progressCheck[current - 2].classList.remove('active');
  progressText[current - 2].classList.remove('active');
  current -= 1;
});
