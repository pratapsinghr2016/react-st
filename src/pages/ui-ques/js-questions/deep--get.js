function get(obj, path, defaultValue = undefined) {
  // Convert string path to array: 'a.b.c' → ['a', 'b', 'c']
  // Also handles: 'a[0].b' → ['a', '0', 'b']
  const keys = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  let result = obj;

  for (let key of keys) {
    if (result == null) {
      return defaultValue;
    }
    result = result[key];
  }

  return result === undefined ? defaultValue : result;
}

const obj = {
  a: {
    b: {
      c: 42
    }
  },
  arr: [1, 2, { name: 'test' }]
};

get(obj, 'a.b.c');              // 42
get(obj, 'a.b.d');              // undefined
get(obj, 'a.b.d', 'default');   // 'default'
get(obj, 'arr[0]');             // 1
get(obj, 'arr[2].name');        // 'test'
get(obj, 'x.y.z');              // undefined (no error!)