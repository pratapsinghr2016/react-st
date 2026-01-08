class Observable {

  constructor() {
    this.subscribers = []
  }

  subscribe(cb) {
    this.subscribers.push(cb)
    return {

      unsubscribe: () => {
        this.subscribers = this.subscribers.filter((item) => item !== cb)

      }
    }
  }

  notify(message) {
    this.subscribers.forEach((item) => item(message))
  }

}

const observable = new Observable();

const subscrition = observable.subscribe((data) => {
  console.log("Sub-1", data)
})

const subscrition2 = observable.subscribe((data) => {
  console.log("Sub-2", data)
})


observable.notify("Hello!")

subscrition.unsubscribe()

observable.notify("Hello again!")

subscrition2.unsubscribe()
