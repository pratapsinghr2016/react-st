import { useRef, useState } from "react";

const getIsDepChanged = (oldDeps, newDeps)=>{
  // ! if there will be empty array then empty array deps will never change
  if(!newDeps.length)
    return false

  // ! when new entities are added in deps array
  if (oldDeps.length !== newDeps.length) return true;


  for(let i=0; i<= oldDeps.length-1; i++){
    const currItem = oldDeps[i];
    const newItem = newDeps[i];
    const isSame = Object.is(currItem, newItem);
    if(!isSame){
      return true
    }
  }
}

const useMyEffect = (cbFunc, deps)=>{
 const isFirstRender = useRef(true);
 const depRef = useRef([]);

 if(isFirstRender?.current){
  isFirstRender.current = false;
  const cleanUpFn = cbFunc();
  if(cleanUpFn && typeof cleanUpFn === "function"){
    cleanUpFn()
  }
  return;
 }


 const isDepChanged = deps ? getIsDepChanged(depRef.current, deps) : true;

 if(isDepChanged){
  const cleanUpFn = cbFunc();
  // ! && deps is import case to remember ---> think 

  if(cleanUpFn && typeof cleanUpFn === "function" && deps){ 
    cleanUpFn()
  }
 }

 // ! must be in last LOC
 depRef.current = deps;
}


function App() {
 const [count, setCount] = useState(0)
 useMyEffect(()=>{
  console.log("no deps")
  return ()=>{
    console.log("cleanup executed !!")
  }
 },[count])

//  useMyEffect(()=>{
//   console.log("empty array deps")
//  },[])

//  useMyEffect(()=>{
//   console.log("with dep array")
//  },[count])

//  useEffect(()=>{
//   console.log("ORIGINAL")
//  })

//  useEffect(()=>{
//   console.log("ORIGINAL")
//   return ()=>{console.log("empty dep shouldn't allow cleanup function be executed")}
//  })

  return (
    <div style={{ margin: "auto", width: "300px" }}>
      <h2>Hello World</h2>
      <button onClick={()=>setCount((prev)=>prev+1)}>Click</button>
    </div>
  );
}

export default App;
