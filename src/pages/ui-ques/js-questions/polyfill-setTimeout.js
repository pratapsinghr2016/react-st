
window.mySetTimeout2 = function (cb, delay, ...args) {
  const id = Math.random();
  let start = Date.now();

  const poll = function () {
    if (Date.now() - start >= delay) {
      cb(...args)

    } else {
      requestAnimationFrame(poll)

    }
  }
  requestAnimationFrame(poll)
  return id
}

window.mySetTimeout2(() => {
  console.log("hit")
}, 1000)


// =======================================
// Store active timeouts
const activeTimeouts = new Map();

window.mySetTimeout = function (callback, delay = 0, ...args) {
  const startTime = Date.now();
  const id = Math.random();

  // Store reference to track this timeout
  let rafId = null;

  function poll() {
    // Check if this timeout was cleared
    if (!activeTimeouts.has(id)) {
      return; // Exit if cleared
    }

    if (Date.now() - startTime >= delay) {
      callback(...args);
      activeTimeouts.delete(id); // Cleanup after execution
    } else {
      rafId = requestAnimationFrame(poll);
      // Update the stored rafId
      activeTimeouts.set(id, rafId);
    }
  }

  rafId = requestAnimationFrame(poll);
  activeTimeouts.set(id, rafId); // Store the RAF ID

  return id;
};

window.myClearTimeout = function (id) {
  if (activeTimeouts.has(id)) {
    const rafId = activeTimeouts.get(id);
    cancelAnimationFrame(rafId); // Cancel the animation frame
    activeTimeouts.delete(id); // Remove from tracking
  }
};