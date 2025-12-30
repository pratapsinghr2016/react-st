function set(obj, path, value) {
  const keys = path
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.');

  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    if (current[key] == null) {
      const nextKey = keys[i + 1];
      // ✅ Simple and handles all numbers
      current[key] = !isNaN(nextKey) ? [] : {};
    }

    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
  return obj;
}