/**
 * 手写apply、call
 * * https://github.com/mqyqingfeng/Blog/issues/11
 */

 Function.prototype.call1 = function(context) {
  context.fn = this || window
  const arg = Array.prototype.slice(arguments).slice(1)
  const result = context.fn(...arg)
  delete context.fn
  return result
 }

 const val = {
   name: '小明'
 }

 function getNmae(a, b) {
   console.log(a)
   console.log(b)
   console.log(this.name)
 }

 getNmae.call(val, 1, 2)