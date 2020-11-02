import './index.css';

const heartButton = document.querySelector('.heart-animation');
heartButton.addEventListener('click', function () {
  let classList = heartButton.classList;
  // * 获取对应 DOM 的 class 使用 classList，并且使用 contains()、add()、remove() 来进行判断、添加、删除对应 class。
  classList.contains('like-active')
    ? classList.remove('like-active')
    : classList.add('like-active');
});
