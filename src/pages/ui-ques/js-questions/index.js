function set(obj, path, value) {
  const keys = path
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.');

  let current = obj;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (!current[key]) {
      const nextKey = keys[i + 1]
      current[key] = !isNaN(nextKey) ? [] : {}
    }

    current = current[key]
  }


  current[keys[keys.length - 1]] = value
  return current

}


const obj1 = {};
set(obj1, 'user.name', 'John');
console.log(obj1);