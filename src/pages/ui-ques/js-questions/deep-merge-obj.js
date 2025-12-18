/* 
DEEP MERGE
==========

- argument 1 is target
- there can be multiple source objects

*/


function deepMerge(target, ...sources) {

  for (let source of sources) {
    for (let key in source) {
      if (source[key] && typeof source === "object" && !Array.isArray(source)) {
        target[key] = deepMerge(target[key] || {}, source[key])
      } else {

        target[key] = source[key]
      }
    }
  }
  return target
}

// Basic merge
console.log(deepMerge({ a: 1 }, { b: 2 }));
// → { a: 1, b: 2 }

// Nested objects merge (not overwritten)
console.log(deepMerge(
  { user: { name: 'Rajat', age: 25 } },
  { user: { city: 'Delhi' } }
));
// → { user: { name: 'Rajat', age: 25, city: 'Delhi' } }

// Overwrite primitive values
console.log(deepMerge(
  { user: { name: 'Rajat', age: 25 } },
  { user: { age: 30 } }
));
// → { user: { name: 'Rajat', age: 30 } }

// Multiple sources (left to right)
console.log(deepMerge(
  { a: 1 },
  { b: 2 },
  { c: 3 },
  { a: 100 }
));
// → { a: 100, b: 2, c: 3 }

// Arrays are replaced (not merged)
console.log(deepMerge(
  { tags: ['js', 'react'] },
  { tags: ['node'] }
));
// → { tags: ['node'] }

// Deeply nested
console.log(deepMerge(
  { level1: { level2: { level3: { value: 1 } } } },
  { level1: { level2: { level3: { newValue: 2 } } } }
));
// → { level1: { level2: { level3: { value: 1, newValue: 2 } } } }

// Mixed: objects merge, primitives overwrite
console.log(deepMerge(
  { config: { debug: true, api: { url: 'localhost' } } },
  { config: { debug: false, api: { timeout: 5000 } } }
));
// → { config: { debug: false, api: { url: 'localhost', timeout: 5000 } } }

// null/undefined handling
console.log(deepMerge(
  { a: { b: 1 } },
  { a: null }
));
// → { a: null }  (null overwrites the object)