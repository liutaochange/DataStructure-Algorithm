// 如果在使用，new Array() 创建数组时，只传入一个参数，表示创建数组的长度
const print = str => console.log(str)
let a = new Array(10)
print(a) // [ <10 empty items> ]
print(a[0]) // undefined
print(a.length) // 10
// 数组操作
let fruits = ['Apple', 'Banana', 'Orange']
// 遍历 forEach， for

// push 添加元素到数组的末尾, 并返回新数组的长度
let len = fruits.push('Peach')
print(len)
print(fruits)
// pop 删除数组末尾的元素, 并返回删除的元素
let last = fruits.pop()
print(last)
print(fruits)
// shift 删除数组最前面（头部）的元素, 并返回删除的元素
let first = fruits.shift()
print(first)
print(fruits)
// unshift 添加元素到数组的头部, 并返回新数组的长度
let newL = fruits.unshift('Apple')
print(newL)
print(fruits)
// indexOf 找出某个元素在数组中的索引, 如果不存在，返回值为 -1
fruits.push('Mango')
let pos = fruits.indexOf('Banana') // 1
print(pos)
let pos1 = fruits.indexOf('Ba') // -1
print(pos1)
// splice 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
let removedItem = fruits.splice(pos, 1)
print(removedItem)
print(fruits)
// Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
print(Array.from('foo')) // ["f", "o", "o"]
print(Array.from([1, 2, 3], x => x + x)) // [2, 4, 6]
const combine = (...reset) => {
  let arr = [].concat.apply([], reset) //没有去重复的新数组
  return Array.from(new Set(arr))
}
let m = [1, 2, 4],
  n = [2, 3, 5]
print(combine(m, n))
// Array.isArray() 用于确定传递的值是否是一个 Array。
print(Array.isArray([1, 2, 3])) // true
print(Array.isArray({ foo: 123 })) // false
print(Array.isArray('foobar')) // false
print(Array.isArray(undefined)) // false
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
print(Array.isArray(Array.prototype))
// Polyfill
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
}
// Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
// Array.of() 和 Array 构造函数之间的区别在于处理整数参数：
// Array.of(7) 创建一个具有单个元素 7 的数组，
// 而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组）。
print(Array.of(3)) // [1]
print(Array.of(1, 2, 3)) // [1, 2, 3]
print(Array.of(undefined)) // [undefined]
print(Array.of({ s: '1' })) // [{ s: '1' }]
// Polyfill
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments)
  }
}
// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
let co1 = [1, 2, 3],
  co2 = [4, 45, 6]
print([].concat(co1, co2))
print(co1.concat(co2))
// copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
const copy1 = ['a', 'b', 'c', 'd', 'e']
print(copy1.copyWithin(0, 3, 4)) // [('d', 'b', 'c', 'd', 'e')]
// entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
// 一个新的 Array 迭代器对象。Array Iterator是对象，它的原型（__proto__:Array Iterator）上有一个next方法，可用用于遍历迭代器取得原数组的[key,value]。
const ent1 = ['a', 'b', 'c']
const iterator1 = ent1.entries()
print(iterator1) // Object [Array Iterator] {}
print(iterator1.next().value) // [ 0, 'a' ]
print(iterator1.next().value) // [ 1, 'b' ]
// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
// every() 方法 若收到一个空数组，此方法在一切情况下都会返回 true。
// every 不会改变原数组。cls
const isBelowThreshold = currentValue => currentValue < 40
const every1 = [1, 30, 39, 29, 10, 13]
print(every1.every(isBelowThreshold))
// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
