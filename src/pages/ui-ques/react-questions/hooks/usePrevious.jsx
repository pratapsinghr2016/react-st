import { useEffect, useRef, useState } from "react";

const usePrevious = (initialVal)=>{
  const ref = useRef(initialVal);
  useEffect(()=>{
    ref.current = initialVal;
  },[initialVal])
  return ref.current
}


function App() {
  const [value, setValue] = useState(0)
  const prevVal = usePrevious(value)
 

  return (
    <div style={{ margin: "auto", width: "300px" }}>
        <p>curr: {value}</p>
        <p>prev: {prevVal}</p>
        <button onClick={()=>setValue((prev)=>{return prev+1})}>Click</button>
    </div>
  );
}

export default App;
