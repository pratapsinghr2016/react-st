function deepEqual(obj1, obj2) {
  // Same reference or primitive values
  if (obj1 === obj2) return true;
  // Handle NaN
  if (Number.isNaN(obj1) && Number.isNaN(obj2)) return true;

  // Handle null
  if (obj1 === null || obj2 === null) return false; // !OR

  // Handle arrays
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false; // !NOT

  // If not both objects, they're not equal
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false; // !OR

  // Get keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Different number of keys
  if (keys1.length !== keys2.length) return false;

  // Recursively compare each key
  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}


// Basic objects
deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 });  // true
deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 });  // true (order doesn't matter)
deepEqual({ a: 1 }, { a: 1, b: 2 });        // false

// Nested objects
deepEqual(
  { a: { b: { c: 1 } } },
  { a: { b: { c: 1 } } }
);  // true

// Arrays
deepEqual([1, 2, 3], [1, 2, 3]);      // true
deepEqual([1, 2, 3], [1, 3, 2]);      // false (order matters)

// Mixed
deepEqual(
  { a: [1, 2, { b: 3 }] },
  { a: [1, 2, { b: 3 }] }
);  // true

// Edge cases JSON.stringify fails on
deepEqual({ a: undefined }, { a: undefined });  // true
deepEqual({ a: NaN }, { a: NaN });              // true
deepEqual({ a: 1 }, { a: '1' });                // false