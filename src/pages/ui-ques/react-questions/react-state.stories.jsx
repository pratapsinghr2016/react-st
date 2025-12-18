import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)  

  const onClickHandler = ()=>{
     console.log("before",count)
    setCount((prev)=>prev+1)
    console.log("after",count)
    console.log("-------------")
     console.log("before",count)
    setCount((prev)=>prev+1)
    console.log("after",count)
    console.log("-------------")
     console.log("before",count)
  }

  return (
    <div style={{ margin: "auto", width: "300px" }}>
      <p>count: {count}</p>
      <button onClick={onClickHandler}>Click</button>
    </div>
  );
}

export default App;


// ******************************************************************

class FakeReact {
  constructor(initialState) {
    this.state = initialState;
    this.queue = [];
  }

  setState(value) {
    this.queue.push(value)
  }

  processQueue() {
    let newState = this.state;

    this.queue.forEach((item) => {
      if (typeof item === "function") {
        newState = item(newState)
      } else {
        newState = item;
      }
    })

    this.state = newState;
    this.queue = []
  }

}

const countObj = new FakeReact(0)
countObj.setState(countObj.state + 1)
countObj.setState(countObj.state + 1)
countObj.setState(countObj.state + 1)
console.log(countObj.queue)
countObj.processQueue()
console.log(countObj.state)


const countObj2 = new FakeReact(0)
countObj2.setState((prev) => prev + 1)
countObj2.setState((prev) => prev + 1)
countObj2.setState((prev) => prev + 1)
console.log(countObj2.queue)
countObj2.processQueue()
console.log(countObj2.state)