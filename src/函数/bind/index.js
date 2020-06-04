// /**
//  * 手写bind
//  * * https://github.com/mqyqingfeng/Blog/issues/12
//  */

//  // 简单实现
// Function.prototype.bind1 = function(context) {
//   const _this = this
//   return function() {
//     return _this.apply(context)
//   }
// }

// // 解决传参问题
// Function.prototype.bind2 = function(context) {
//   const _this = this
//   const arg = [...arguments].slice(1)
//   return function() {
//     const arg2 = [...arguments]
//     return _this.apply(context, arg.concat(arg2))
//   }
// }

// // 创建的函数可以使用new
// Function.prototype.bind2 = function(context) {
//   const _this = this
//   const arg = [...arguments].slice(1)

//   const fun = function() {
//     const arg2 = [...arguments]
//     return _this.apply(this instanceof fun ? this: context, arg.concat(arg2))
//   }
//   fun.prototype = this.prototype
//   return fun
// }

// // 修改fun的原型会影响到绑定函数的原型，所以做中转
// Function.prototype.bind2 = function(context) {
//   const _this = this
//   const arg = [...arguments].slice(1)

//   function Mid () {}

//   const fun = function() {
//     const arg2 = [...arguments]
//     return _this.apply(this instanceof fun ? this: context, arg.concat(arg2))
//   }

//   Mid.prototype = this.prototype
//   fun.prototype = new Mid()
//   return fun
// }

// var foo = {
//   value: 1
// };

// function bar(name, age) {
//   console.log(this.value);
//   console.log(name)
//   console.log(age)
// }

// // 返回了一个函数
// var bindFoo = bar.bind2(foo, 'name'); 

// // bindFoo('age'); // 1

// new bindFoo()

// foo()
// function foo() {
//   console.log(a)
//   var a = 2
// }
// function bar() {
//   var a = 3
//   foo()
// }
// var a = 2
// bar()

let arrP = [timerPromisefy(1), timerPromisefy(2)];
function timerPromisefy(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      arrP.length < 10 && arrP.push(timerPromisefy(3));
      console.info('delay', delay);
      resolve(delay);
    }, delay);
  });
}
let startDate = Date.now();
Promise.all(arrP).then(val => {
  console.info(Date.now() - startDate + 'ms');
  console.info('arrp',val);
});