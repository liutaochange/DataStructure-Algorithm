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
// every() 不会改变原数组。
const isBelowThreshold = currentValue => currentValue < 40
const every1 = [1, 30, 39, 29, 10, 13]
print(every1.every(isBelowThreshold))
// some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
// some() 如果用一个空数组进行测试，在任何情况下它返回的都是false。
// some() 被调用时不会改变数组。
const some = [1, 2, 3, 4, 5]
const even = element => element % 2 === 0
print(some.some(even)) // true
// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// reducer 函数接收4个参数:
// Accumulator (acc) (累计器)
// Current Value (cur) (当前值)
// Current Index (idx) (当前索引)
// Source Array (src) (源数组)
const reduce = [1, 2, 3, 4]
const reducer = (accumulator, currentValue) => accumulator + currentValue
print(reduce.reduce(reducer))
// reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
const reduceRight = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue))
print(reduceRight)
// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
const find = [5, 12, 8, 130, 44]
const found = find.find(element => element > 10)
print(found)
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
const findIndex = [5, 12, 8, 130, 44]
const isLargeNumber = element => element > 13
print(findIndex.findIndex(isLargeNumber))
// includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
const in1 = [1, 2, 3]
print(in1.includes(2)) // true
const pets = ['cat', 'dog', 'bat']
print(pets.includes('cat')) // true
print(pets.includes('at')) // false
// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。如果没有任何数组元素通过测试，则返回空数组。
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
const result = words.filter(word => word.length > 6)
print(result) // ["exuberant", "destruction", "present"]
// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
// fill 方法接受三个参数 value, start 以及 end. start 和 end 参数是可选的, 其默认值分别为 0 和 this 对象的 length 属性值。
// 如果 start 是个负数, 则开始索引会被自动计算成为 length+start, 其中 length 是 this 对象的 length 属性值。如果 end 是个负数, 则结束索引会被自动计算成为 length+end。
const fill1 = [1, 2, 3, 4]
print(fill1.fill(0, 2, 4)) // [ 1, 2, 0, 0 ]
// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
const map = [1, 4, 9, 16]
const map1 = map.map(x => x * 2)
print(map1)
// flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
// Polyfill
function flatten(array) {
  var flattend = []
  ;(function flat(array) {
    array.forEach(function(el) {
      if (Array.isArray(el)) flat(el)
      else flattend.push(el)
    })
  })(array)
  return flattend
}
const flat = [1, 2, [3, 4]]
// flat.flat()
print(flatten(flat))

// 数组转为字符串 join 和 toString
let arrStr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let resu = arrStr.join('')
let resu2 = arrStr.toString()
let resu3 = arrStr.values()
print(resu)
print(resu2)
print(resu3)
let resu4 = arrStr.splice(3, 1)
print(resu4)
print(arrStr)
let a3 = arrStr.unshift(10, 100)
print(a3)
print(arrStr)
let a4 = arrStr.push(10, 100)
print(a4)
print(arrStr)
let a6 = arrStr.pop()
print(a6)
print(arrStr)
let a7 = arrStr.shift()
print(a7)
print(arrStr)
print(arrStr.reverse())
print(arrStr.sort((a, b) => a > b))

const sumNum = (...num) => num.reduce((total, item) => total + item)

print(sumNum(1, 2, 3, 4))
