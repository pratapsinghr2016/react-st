import { useLayoutEffect, useState } from "react";

const useBodyScrollLock = ()=>{
  const [scrolHidden, setScrolHidden] = useState(document.body.style.overflowY === "hidden");

  useLayoutEffect(()=>{
    if(scrolHidden){
      const scrollerWidth = window.innerWidth - document.documentElement.clientWidth

      document.body.style.paddingRight = scrollerWidth+"px"
      document.body.style.overflowY = "hidden"
    }else{
      document.body.style.overflowY = "auto"
      document.body.style.paddingRight = ""
    }


    return ()=>{
      document.body.style.overflowY = "auto"
      document.body.style.paddingRight = ""
    }

  },[document.body.style.overflowY, scrolHidden])

  const toggleHiddenState = ()=>setScrolHidden(!scrolHidden)
  return [scrolHidden, toggleHiddenState]
}

function App() {
  const [scrolHidden, toggle] = useBodyScrollLock()
 
  return (
    <div style={{ margin: "auto", width: "300px" }}>
      <h2>Hello World</h2>
      <p>state: {scrolHidden}</p>
      <button onClick={toggle} 
      style={{position:"fixed", top:10, right:80, width:130, height:20,}}>
        Click</button>
      {Array.from({length:99}).map((_,idx)=><div 
      key={idx} style={{padding:10,  fontSize:"1rem", border:"1px solid"}}>
        {idx}</div>)}
    </div>
  );
}

export default App;
