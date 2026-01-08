Here's how `this` behaves differently in different contexts:

**1. Global Context:**

```javascript
console.log(this); // window (browser) or global (Node.js)
```

**2. Regular Function:**

```javascript
function show() {
  console.log(this); // window in non-strict, undefined in strict mode
}
```

**3. Object Method:**

```javascript
const obj = {
  name: "Rajat",
  show() {
    console.log(this.name); // "Rajat" - this refers to obj
  },
};
obj.show();
```

**4. Arrow Function:**

```javascript
const obj = {
  name: "Rajat",
  show: () => {
    console.log(this.name); // undefined - inherits this from surrounding scope
  },
};
// Arrow functions DON'T have their own this, they use lexical this
```

**5. Event Handler:**

```javascript
button.addEventListener("click", function () {
  console.log(this); // the button element
});

button.addEventListener("click", () => {
  console.log(this); // lexical this (not the button)
});
```

**6. Constructor Function:**

```javascript
function Person(name) {
  this.name = name; // this refers to new instance
}
const p = new Person("Rajat");
```

**7. Class:**

```javascript
class Person {
  constructor(name) {
    this.name = name; // refers to instance
  }
  show() {
    console.log(this.name); // refers to instance
  }
}
```

**8. Explicit Binding (call/apply/bind):**

```javascript
function greet() {
  console.log(this.name);
}
const user = { name: "Rajat" };
greet.call(user); // "Rajat" - this is explicitly set to user
greet.apply(user); // "Rajat"
const boundGreet = greet.bind(user);
boundGreet(); // "Rajat"
```

**9. Implicit Binding Loss:**

```javascript
const obj = {
  name: "Rajat",
  show() {
    console.log(this.name);
  },
};
const fn = obj.show;
fn(); // undefined - lost context, this becomes window/undefined
```

**Key Rules:**

- **Regular functions**: `this` depends on how function is called
- **Arrow functions**: `this` is lexically inherited from enclosing scope
- **Methods**: `this` refers to the object calling the method
- **new keyword**: `this` refers to newly created instance
- **call/apply/bind**: `this` is explicitly set
