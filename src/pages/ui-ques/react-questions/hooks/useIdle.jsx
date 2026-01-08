import { useEffect, useRef, useState } from "react";


const useIdle=(delay=500)=>{

  const [active, setIsActive] = useState(true);
  const timerId = useRef()

  useEffect(()=>{
    setUpEvents();

    // ! if we keep it inside useEffect then only 1 timeout will be created
     timerId.current = setTimeout(()=>{
      setIsActive(false)
    },delay)
    
    return ()=>{
      clearTimeout(timerId.current)
      cleanUpEvents()}
  },[delay])

  const onActive = ()=>{
    setIsActive(true)
  }

  const setUpEvents = ()=>{
    document.addEventListener("mousemove", onActive);
    document.addEventListener("mousedown", onActive);
    document.addEventListener("resize", onActive);
    document.addEventListener("touchstart", onActive);
    document.addEventListener("wheel", onActive);
     window.addEventListener("resize", onActive);
  }

  const cleanUpEvents = ()=>{
    document.removeEventListener("mousemove", onActive);
    document.removeEventListener("mousedown", onActive);
    document.removeEventListener("resize", onActive);
    document.removeEventListener("touchstart", onActive);
    document.removeEventListener("wheel", onActive);
     window.removeEventListener("resize", onActive);
  }



  return active

}

function App() {
  const active = useIdle(10000)
 

  return (
    <div style={{ margin: "auto", width: "300px" }}>
        <p>Status: {!active ? "idle":"active"}</p>
    </div>
  );
}

export default App;
