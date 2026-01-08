import { useReducer } from "react";

let reservoir = [];
let id = 0;

const useMyState = (initialState)=>{
  let keyIdx = id++;
  const [_, dispatch] = useReducer(()=>({}), initialState) 
  
  const forceUpdate = ()=>{
    dispatch();
    id=0
  }

  const setState = (newState)=>{
    if(newState === reservoir[keyIdx])
      return

    if(typeof newState === "function"){
      reservoir[keyIdx] = newState(reservoir[keyIdx]||initialState)
    }else{
      reservoir[keyIdx] = newState;
    }

    forceUpdate()
  }

  const response  = [reservoir[keyIdx]||initialState, setState]
 
  return response
}
 
function App() {
  const [count, setCount] = useMyState(0)
   const [count2, setCount2] = useMyState(0)

  const onIncrease = ()=>{
    setCount(count+1)
  }

  const onIncrease2 = ()=>{
    setCount2(1)
  }
  console.log(count, count2)

  return (
    <div style={{ margin: "auto", width: "300px" }}>
      <p>count1: {count}</p>
      <button onClick={onIncrease}>counter 1</button>
    <hr/>
    <p>count2: {count2}</p>
      <button onClick={onIncrease2}>counter 2</button>

    </div>
  );
}

export default App;
