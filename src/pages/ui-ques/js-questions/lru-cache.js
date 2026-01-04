class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; //
    this.cache = new Set() // ! we will use Set()
  }

  get(value) {
    if (!this.cache.has(value))
      return -1

    this.cache.delete(value)
    this.cache.add(value)
    return value
  }

  set(value) {
    if (this.cache.has(value))
      this.cache.delete(value)

    this.cache.add(value)

    if (this.cache.size > this.capacity) {
      const lastItem = this.cache.values.next.value // ! VNV
      this.cache.delete(lastItem)
    }
  }

  display() {
    return this.cache
  }
}

const cacheObj = new LRUCache(3)
cacheObj.set(1)
cacheObj.set(2)
cacheObj.set(3)
console.log(cacheObj.display())
cacheObj.set(1)
console.log(cacheObj.display())
cacheObj.get(2)
console.log(cacheObj.display())