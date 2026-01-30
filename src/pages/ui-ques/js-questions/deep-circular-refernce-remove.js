function removeCircularReferences(obj, seen = new WeakSet()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (seen.has(obj)) return undefined;

  seen.add(obj);

  // handle arrays
  if (Array.isArray(obj)) {
    const result = [];
    for (const item of obj) {
      const value = removeCircularReferences(item, seen);
      if (value !== undefined) result.push(value);
    }
    return result;
  }

  // handle plain objects
  const result = {};
  for (const key in obj) {
    const value = removeCircularReferences(obj[key], seen);
    if (value !== undefined) result[key] = value;
  }
  return result;
}

const obj = {
  name: "Alice",
  friend: {
    name: "Bob",
  },
};
obj.friend.bestFriend = obj;

const cleaned = removeCircularReferences(obj);
console.log(cleaned);