import './index.css';

// ? 针对案例三的简易节流。
const throttle = function (fn, interval = 500) {
  let run = true;
  return function () {
    if (!run) return;
    run = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      run = true;
    }, interval);
  };
};
// ? 针对案例三的简易防抖。
const debounce = function (fn, interval = 500) {
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, interval);
  };
};
// ? 案例一对应 JS 代码。
document.querySelector('.scrollTo-button').addEventListener('click', function () {
  // * 常用的浏览器滚动 API 包括 window.scrollTo、window.scrollBy 或者直接设置元素( HTML )的 scrollTop 值。
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth'
  });
});
document.querySelector('.scrollBy-button').addEventListener('click', function () {
  window.scrollBy({
    left: 0,
    top: 1080,
    behavior: 'smooth'
  });
});
document.querySelector('.scrollTop-button').addEventListener('click', function () {
  document.scrollingElement.scrollTop = 0;
});
// ? 案例二对应 JS 代码。
document.querySelector('.scrollIntoView-button').addEventListener('click', function () {
  // * scrollIntoView 指定元素出现在视窗之内。
  document.querySelector('.box').scrollIntoView({
    behavior: 'smooth',
    // * block 的取值还可以是 start、center ，对应视窗的顶部和中部。
    block: 'end'
  });
});
// ? 案例三对应 JS 代码。
document.querySelector('.scrollHeight-button').addEventListener('click', function () {
  window.scrollTo({
    left: 0,
    // * scrollingElement，该对象可以优雅地获取到 scrollTop、scrollHeight.
    top: document.scrollingElement.scrollHeight,
    behavior: 'smooth'
  });
});
window.addEventListener('scroll', () => {
  /**
   * * 注意这个打印值，滚动的时候是不是一直在打印？
   * * 一直触发肯定会影响网页的性能，虽然这里不会！但是还是需要加入简单的防抖节流处理一下。
   * * 拓展：防抖是为了判断动作结束，优化性能；节流是为了减少代码频繁执行，应对压力测试。
   * * 为了方便查看，单独在后面监听 scroll 。
   */
  // console.info("在滚在滚！");
  // * 解构赋值，可以打印一下看看。
  let { scrollTop, scrollHeight, clientHeight } = document.scrollingElement;
  // * 当前滚动高度 + 视口高度 >= 文档总高度。
  if (scrollTop + clientHeight >= scrollHeight) {
    confirm('已到达底部');
  }
});
// ? 加入防抖或者节流之后。
window.addEventListener(
  'scroll',
  debounce(() => console.log('滚动结束！'))
);
window.addEventListener(
  'scroll',
  throttle(() => console.log('我在滚我在滚！'))
);
