/* 
Problem: Identify if a function is constructed or not using new operator

Note: isntanceOf fails in some cases, example:


const z = new A()
z.x = A;
z.x()

*/

function _A() {
  if (this instanceof arguments.callee)
    console.log("called by new")
  else
    console.log("NOT called by new")
}

function A() {
  if (this instanceof A && !this._constructed)
    console.log("called by new")
  else
    console.log("NOT called by new")
}

A()
const z = new A()
z.x = A;
z.x()