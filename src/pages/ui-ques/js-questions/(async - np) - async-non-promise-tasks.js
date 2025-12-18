class Task {
  constructor(dependencies, callback) {
    this.dependencies = dependencies || [];
    this.callback = callback;
    this.completed = false;
    this.listeners = []; // Tasks waiting for this task to complete

    // Start execution
    this.execute();
  }

  execute() {
    // Filter out already completed dependencies
    const pendingDeps = this.dependencies.filter(dep => !dep.completed);

    // If no pending dependencies, run callback immediately
    if (pendingDeps.length === 0) {
      this.runCallback();
    } else {
      // Wait for all pending dependencies to complete
      let completedCount = 0;
      const totalPending = pendingDeps.length;

      // Register a listener on each pending dependency
      pendingDeps.forEach(dep => {
        dep.onComplete(() => {
          completedCount++;
          // When all dependencies are done, run this task
          if (completedCount === totalPending) {
            this.runCallback();
          }
        });
      });
    }
  }

  runCallback() {
    // Execute the actual task callback
    this.callback(() => {
      // Mark as completed when done() is called
      this.completed = true;
      // Notify all tasks waiting for this one
      this.notifyListeners();
    });
  }

  // Register a listener to be notified when this task completes
  onComplete(listener) {
    if (this.completed) {
      // If already completed, call listener immediately
      listener();
    } else {
      // Otherwise, add to queue
      this.listeners.push(listener);
    }
  }

  // Notify all registered listeners
  notifyListeners() {
    this.listeners.forEach(listener => listener());
    this.listeners = []; // Clear listeners after notifying
  }
}

// INPUTS

const processA = new Task(null, (done) => {
  setTimeout(() => {
    console.log("Process A")
    done()
  }, 100)
})

const processB = new Task([processA], (done) => {
  setTimeout(() => {
    console.log("Process B")
    done()
  }, 1500)
})

const processC = new Task(null, (done) => {
  setTimeout(() => {
    console.log("Process C")
    done()
  }, 1000)
})

const processD = new Task([processA, processB], (done) => {
  setTimeout(() => {
    console.log("Process D")
    done()
  }, 1000)
})

const processE = new Task([processC, processD], (done) => {
  setTimeout(() => {
    console.log("Process E")
    done()
  }, 100)
})


const createAllDoneInstance = (allDoneCallback) => new Task(
  [processA, processB, processC, processD, processE],
  allDoneCallback
)

createAllDoneInstance((done) => {
  console.log("All is done!");
  done()
})