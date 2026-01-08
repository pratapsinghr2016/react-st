import { useEffect, useState } from "react";


const useScript = (src)=>{
  const [status, setStatus] = useState("idle");

  useEffect(()=>{
    // ! let script
    // ! querySelector
    let script = document.querySelector(`script[src="${src}"]`)
   

    if(script){
      const scriptStaus = script.getAttribute("data-status")
      setStatus(scriptStaus)
    }else{
      script = document.createElement("script")
      script.src = src;
      script.async = true;
      script.setAttribute("data-status", "loading")
      document.body.appendChild(script)
    }
    const onLoad = ()=>{script.setAttribute("data-status", "ready")}
    const onError = ()=>{script.setAttribute("data-status", "error")}

    script.addEventListener("load", onLoad);
     script.addEventListener("error", onError)

     return ()=>{
      script.removeEventListener("load", onLoad);
     script.removeEventListener("error", onError)
     }

  },[src])

  return status
}


function App() {
  const status = useScript("http://cd.dummy-src.com")
  console.log(status)
  
  return (
    <div  style={{ margin: "auto", width: "300px" }}>
      <h2>Hello World</h2>
      
    </div>
  );
}

export default App;
