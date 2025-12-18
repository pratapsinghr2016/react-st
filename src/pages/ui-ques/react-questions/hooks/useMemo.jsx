import { useRef } from "react";


const getIsDepChanged = (oldDeps, newDeps)=>{
  let changed = false;
  // ! if there will be empty array then empty array deps will never change

  if(!newDeps.length)
    return changed

  if (oldDeps.length !== newDeps.length) return true;


  for(let i=0; i<=oldDeps.length-1; i++){
    const currItem = oldDeps[i];
    const newItem = newDeps[i];
    const isSame = Object.is(currItem, newItem);
    if(!isSame){
      changed = true;
      break;
    }
  }
  return changed;
}

const useMyMemo = (callbackFn, deps) => {
  const cachedResRef = useRef();
  const depRef = useRef();
  const hasComputed = useRef(false);

  const isDepChanged = deps ? getIsDepChanged(depRef.current, deps) : true;

  if (!hasComputed.current || isDepChanged) {
    cachedResRef.current = callbackFn();
    depRef.current = deps;
    hasComputed.current = true;
  }

  return cachedResRef.current;
};

function App() {

  return (
    <div style={{ margin: "auto", width: "300px" }}>
      <h2>Hello World</h2>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Click</button>
      <hr/>
      <p>Memo Value: {computedVal}</p>
    </div>
  );
}

export default App;
