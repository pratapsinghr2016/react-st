function set(obj, path, value) {
  const keys = path
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.');

  let current = obj; // ! object refernce ka current lagega ⚡⚡⚡

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    if (current[key] == null) {
      const nextKey = keys[i + 1];
      current[key] = !isNaN(nextKey) ? [] : {};
    }

    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
  return current;
}

const obj1 = {};
set(obj1, 'user.name', 'John');
console.log(obj1);
// Output: { user: { name: 'John' } }


const obj2 = {};
set(obj2, 'users[0].email', 'john@example.com');
console.log(obj2);
// Output: { users: [ { email: 'john@example.com' } ] }


const obj4 = { user: { name: 'John' } };
set(obj4, 'user.email', 'john@mail.com');
console.log(obj4);
// Output: { user: { name: 'John', email: 'john@mail.com' } }