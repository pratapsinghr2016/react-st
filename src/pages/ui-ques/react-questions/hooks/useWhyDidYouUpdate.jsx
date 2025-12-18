import { useEffect, useRef, useState } from "react";

const useWhyDidYouUpdate = (props)=>{
  const propsRef = useRef(null)

  useEffect(()=>{

    if(propsRef.current){
      const allKeys = Object.keys({...propsRef.current, ...props})
      
      let reason = {}
      
      for(let key of allKeys){
        const propRefItem = propsRef.current[key];
        const propItem = props[key];
        if(typeof propRefItem === "object" && typeof propItem === "object"){
          if(JSON.stringify(propRefItem) !== JSON.stringify(propItem)){
            reason[key] = {
              prev: propRefItem,
              curr: propItem
            }
          }
        }else{
           if(propRefItem !== propItem){
            reason[key] = {
              prev: propRefItem,
              curr: propItem
            }
          }
        }
      }
      if(Object.keys(reason).length){
        console.log({reason})
      }
    }

    propsRef.current = props;
  },[props])


}

function App() {
  const [count, setCount] =useState(0)
  useWhyDidYouUpdate({count})
  
  return (
    <div style={{ margin: "auto", width: "300px" }}>
      <h2>Hello World</h2>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  );
}

export default App;
