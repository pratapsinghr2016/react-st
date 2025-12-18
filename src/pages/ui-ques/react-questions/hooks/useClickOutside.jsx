import { useEffect, useRef } from "react";

const useClickOutside = (ref, cb)=>{
  useEffect(()=>{

    const check = (e)=>{
      // ! if ref doesnt exist
      // ! OR if current Ref's children are not clicked 

        if(!ref.current || ref.current.contains(e.target))
          return 
        cb()
    }

    document.addEventListener("touchstart", check);
    document.addEventListener("mousedown", check)

    return ()=>{
         document.removeEventListener("touchstart", check);
        document.removeEventListener("mousedown", check)
    }

  },[])
}


function App() {
  const elRef = useRef()
  useClickOutside(elRef, ()=>console.log("hit"))
  
  return (
    <div  style={{ margin: "auto", width: "300px" }}>
      <h2 ref={elRef}>Hello World</h2>
      
    </div>
  );
}

export default App;
