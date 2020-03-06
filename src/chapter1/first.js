/**
 * javascript 中函数的参数传递方式都是按值传递，没有按照引用传递的参数
 */
const concat = (a, b) => {
  return { ...a, ...b }
}
let a = {
  a: 1,
  b: 2,
  c: 3
}
let b = {
  c: 4,
  d: 5,
  e: 6
}
console.log(concat(a, b)) // { a: 1, b: 2, c: 4, d: 5, e: 6 }
b.e = 9
a.b = 10
console.log(concat(a, b)) // { a: 1, b: 10, c: 4, d: 5, e: 9 }

/**
 * 递归调用
 * ps: 任何可以被递归定义的函数，都可以被改写为迭代式的程序
 */

function factorial(n) {
  if (n == 1) {
    return n
  } else {
    return n * factorial(n - 1)
  }
}
console.log(factorial(5))

/**
 * 面向对象
 */
function Person(first, middle, last) {
  this.first = first
  this.middle = middle
  this.last = last
  this.initials = initials
}

function initials() {
  return this.first[0] + this.middle[0] + this.last[0]
}

var aPerson = new Person('John', 'Quincy', 'Public')
console.log('First name: ' + aPerson.first)
console.log('Middle name: ' + aPerson.middle)
console.log('Last name: ' + aPerson.last)
console.log('Initials: ' + aPerson.initials())
