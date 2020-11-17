class Queue {
  constructor() {
    this.count = 0 // {1}
    this.lowestCount = 0 // {2}
    this.items = {} // {3}
  }
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  dequeue() {
    // 队列遵循先进先出原则，最先添加的项也是最先被移除的。
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount] // {1}
    delete this.items[this.lowestCount] // {2}
    this.lowestCount++ // {3}
    return result // {4}
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  size() {
    return this.count - this.lowestCount
  }
  clear() {
    this.count = 0
    this.items = {}
    this.lowestCount = 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}
const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue('web')
queue.enqueue('java')
queue.enqueue('go')
console.log(queue.toString())

module.exports = {
  queue: Queue,
}
