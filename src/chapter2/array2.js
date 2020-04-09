// 二维数组
const print = str => console.log(str)
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
let arr = [
  [1, 2, 3, 100, 3000],
  [4, 5, 6, 68],
  [7, 8, 9]
]
let total = 0
let average = 0.0
arr.forEach(item => {
  if (Array.isArray(item)) {
    item.forEach(ele => {
      total += ele
    })
    average = total / item.length
    print(`total is ${total}`)
    print(`average is ${average}`)
    total = 0
    average = 0.0
  }
})
