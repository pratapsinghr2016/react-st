/* 
- This refers to an object
- The value of this depends on how the function is declared

1) this in a function with function xyz(){}
  - refers directly to window object only

2) this in an object
  - refers to the object only
  
3) Arrow functions dont have their context therefor they 
  look into the lexical (direct parent) scope

*/

// add more this related questions

function User() {
  this.name = "hello";
  this.say = function () {
    console.log("1= " + this.name)
    const inner = () => {
      console.log("2= ", this.name)
    }
    inner()
  }
}

const obj = new User()
obj.say()