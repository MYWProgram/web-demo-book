import './index.css';

const heartButton = document.querySelector('.heart-animation');
heartButton.addEventListener('click', function () {
  let classList = heartButton.classList;
  classList.contains('like-active')
    ? classList.remove('like-active')
    : classList.add('like-active');
});
