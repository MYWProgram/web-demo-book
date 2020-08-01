import './index.css';

const draggable_list = document.getElementById('draggableList');
const check = document.getElementById('check');
const richestPeople = [
  '马云',
  '马化腾',
  '李兆基',
  '许家印',
  '李嘉诚',
  '何享健',
  '杨惠妍及家族',
  '秦英林',
  '丁磊',
  '黄峥'
];
const listItems = [];
// * 提前定义被拖拽 item 的 index.
let dragStartIndex;
// * 初始化列表。
createList();
// ? 生成列表项插入 DOM.
function createList() {
  [...richestPeople]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');
      listItem.setAttribute('data-index', index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;
      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });
  addEventListeners();
}

function dragStart() {
  // * closet() 匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身）。
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute('data-index');
  // * 交换被拖拽和放置区域两项的位置。
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove('over');
}
// ? 交换被拖拽和放置区域两个 item 位置的方法。
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}
// ? 检验列表与最初顺序是否一致。
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector('.draggable').innerText.trim();
    if (personName !== richestPeople[index]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  });
}
// ? 为拖拽操作所需的函数统一添加监听器的方法。
function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');
  // ! 拖动开始的操作必须添加在 li 标签内部的 div 上。
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });
  // ! 其余的都添加在 li 标签上。
  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
  check.addEventListener('click', checkOrder);
}

