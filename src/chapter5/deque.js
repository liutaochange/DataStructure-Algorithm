// 双端队列
// 允许我们同时从前端和后端添加和移除元素的特殊队列
// 遵循先进先出，后进先出
const Queue = require('./queue').queue
class Deque extends Queue {
  constructor(props) {
    super(props)
  }
  addFront(ele) {
    if (this.isEmpty()) {
      this.addBack(ele)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = ele
    } else {
      for (let index = this.count; index > 0; index--) {
        this.items[index] = this.items[index - 1]
      }
      this.count++
      this.items[0] = ele
    }
  }
  addBack(ele) {
    this.items[this.count] = ele
    this.count++
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  peekFront() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  peekBack() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
}
const deque = new Deque()
console.log(deque.isEmpty())
deque.addBack('web')
deque.addBack('java')
console.log(deque.toString())
deque.addBack('go')
console.log(deque.size())
console.log(deque.isEmpty())
deque.removeFront()
console.log(deque.toString())
deque.removeBack()
console.log(deque.toString())
deque.addFront('php')
console.log(deque.toString())
deque.addBack('python')
console.log(deque.toString())
