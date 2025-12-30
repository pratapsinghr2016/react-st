function MyPromise(executor) {
  // 1️⃣ STATE: Track what happened
  let state = 'pending'
  let result = undefined
  let callbacks = []

  // 2️⃣ REJECT: Change state to rejected and run callbacks
  function reject(error) {
    if (state !== 'pending') return

    state = 'rejected'
    result = error

    // 5a: Run all stored error callbacks (async for Case 3)
    queueMicrotask(() => {
      callbacks.forEach(cb => cb?.onError(error))
    })
  }

  // 3️⃣ RESOLVE: Change state to fulfilled and run callbacks
  function resolve(value) {
    if (state !== 'pending') return

    // 4a: Handle promise/thenable passed to resolve() (Case 1)
    // ! thenable mein try-catch hota hai
    // ! try-catch mein returns bhi hai in end
    if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
      try {
        const then = value.then
        if (typeof then === 'function') {

          // ! then.call() hone k baad ... must return
          then.call(value, resolve, reject)
          return
        }
      } catch (err) {
        reject(err)
        return // ! thenable mein last mein catch k andar return hota hai
      }
    }

    state = 'fulfilled'
    result = value

    // 4b: Run all stored success callbacks (async for Case 3)
    queueMicrotask(() => {
      callbacks.forEach(cb => cb?.onSuccess(value))
    })
  }


  // ! read complete function
  // 4️⃣ HELPER: Handle thenable/promise resolution
  const resolvePromise = (promise, value, res, rej) => {
    // 3a: Self-resolution check (Case 4)
    if (promise === value) {
      return rej(new TypeError('Chaining cycle detected'))
    }

    // 3b: Handle promise/thenable (Case 1 & 2)
    if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
      let called = false
      try {
        const then = value.then
        if (typeof then === 'function') {
          const RESOLVE = (v) => {
            if (called) return
            called = true
            resolvePromise(promise, v, res, rej)  // Recursive for nested promises
          }
          const REJECT = (e) => {
            if (called) return
            called = true
            rej(e)
          }
          // ! then.call() hone k baad ... must return
          then.call(value, RESOLVE, REJECT)
          return
        }
      } catch (err) {
        if (called) return
        rej(err)
        return // ! thenable mein last mein catch k andar return hota hai
      }
    }

    // 3c: Plain value - resolve normally
    res(value)
  }

  // 5️⃣ THEN: Returns NEW promise for chaining
  this.then = function (onSuccess, onError) {

    const promise2 = new MyPromise((res, rej) => {
      // ! handlecallback mein try-catch hai
      // ! status k basis p checks hai
      // ! isi bhasad mein thenable krke resolve bhi krna hai
      const handleCallback = () => {
        try {
          if (state === 'fulfilled') {

            // 6a: Handle missing onSuccess (pass through value)
            const val = typeof onSuccess === 'function' ? onSuccess(result) : result
            resolvePromise(promise2, val, res, rej)  // Use helper for Case 2

          } else if (state === 'rejected') {

            if (typeof onError === 'function') {
              const val = onError(result)
              resolvePromise(promise2, val, res, rej)  // Use helper for Case 2
            } else {
              rej(result)
            }

          }
        } catch (err) {
          rej(err)
        }
      }

      // 6b: Decide when to run handleCallback
      if (state === 'pending') {
        // 6c: Not settled yet - queue for later
        callbacks.push({
          onSuccess: () => handleCallback(),
          onError: () => handleCallback()
        })
      } else {
        // 6d: Already settled - run async (spec compliance)
        queueMicrotask(handleCallback)
      }
    })

    return promise2
  }

  // 6️⃣ CATCH: Shorthand for .then(null, onError)
  this.catch = function (onError) {
    return this.then(null, onError)
  }

  // 7️⃣ FINALLY: Runs callback regardless of outcome (Case 5)
  this.finally = function (onFinally) {
    // ! onsuccess and onerror ka structure yaad rakho
    const ONSUCCESS = (value) => {
      onFinally()
      return value  // Pass through the value
    }
    // ! onerror mein throw hai return nahi
    const ONERROR = (error) => {
      onFinally()
      throw error   // Re-throw the error
    }
    return this.then(ONSUCCESS, ONERROR)
  }

  // 8️⃣ START: Run executor with try-catch for sync errors
  try {
    executor(resolve, reject)
  } catch (err) {
    reject(err)
  }
}


// Case 1: Promise passed to resolve()
console.log('--- Case 1 ---')
const p1 = new MyPromise(resolve => {
  resolve(new MyPromise(r => setTimeout(() => r('inner'), 500)))
})
p1.then(val => console.log('Case 1:', val))  // "inner" after 500ms


// Case 4: Self-resolution
console.log('--- Case 4 ---')
let p4
p4 = new MyPromise(resolve => setTimeout(() => resolve(p4), 100))
p4.catch(err => console.log('Case 4:', err.message))  // "Chaining cycle detected"
