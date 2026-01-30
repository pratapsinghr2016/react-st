function deepClone(obj, visited = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (visited.has(obj)) return obj;

  const clone = Array.isArray(obj) ? [] : {};
  visited.set(obj, clone) //

  for (let key of Object.keys(obj)) {
    const currVal = obj[key]
    if (currVal && typeof currVal === "object") {

      clone[key] = deepClone(currVal, visited)
    } else {
      clone[key] = currVal
    }

  }

  return clone
}

const original = {
  name: "Rajat",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

const cloned = deepClone(original);

// Verify it's a deep copy
console.log(cloned);
// { name: "Rajat", address: { city: "Delhi", pin: 110001 } }

// Modify the clone
cloned.address.city = "Mumbai";

// Original is unchanged
console.log(original.address.city);  // "Delhi"
console.log(cloned.address.city); // Mumbai