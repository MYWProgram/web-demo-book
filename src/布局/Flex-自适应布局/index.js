import "./index.css";

// 案例一对应 JS 代码。
document.querySelector(".addItem").addEventListener("click", function () {
  const newNode = document.createElement("div"),
    referenceNode = document.querySelector(".addWrapper");
  newNode.className = "list";
  document.querySelector(".container").insertBefore(newNode, referenceNode);
});
const listWrapper = document.querySelector(".list"),
  deleteButton = window.getComputedStyle(listWrapper, "::after");
listWrapper.addEventListener("click", function () {
  console.log(1);
  // e.deleteButton.style = 'display: block';
});
