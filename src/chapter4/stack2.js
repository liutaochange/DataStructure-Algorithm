class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  push(ele) {
    this.items[this.count] = ele
    this.count++
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.count === 0
  }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const ele = this.items[this.count]
    delete this.items[this.count]
    return ele
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    } else {
      return this.items[this.count - 1]
    }
  }
  clear() {
    this.count = 0
    this.items = {}
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}` // {1}
    for (let i = 1; i < this.count; i++) {
      // {2}
      objString = `${objString}, ${this.items[i]}` // {3}
    }
    return objString
  }
}
