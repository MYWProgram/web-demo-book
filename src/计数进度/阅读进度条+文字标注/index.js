import './index.css';
// * IntersectionObserver 用于判定元素是否出现在视窗之内，并执行回调函数。
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // * 当 isIntersecting 返回 true 时表示元素出现在视窗之内。
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      // * 当添加 CSS 并执行动画之后，马上移除 observer 的监听；一方面优化性能，一方面是因为动画只需要执行一次。
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('mark').forEach(mark => {
  observer.observe(mark);
});
