import { useEffect, useState } from "react";

const useDebounce = (func, delay=1500)=>{
 let timerId = null
    return function(...args){
      clearTimeout(timerId)
      timerId = setTimeout(()=>{
        func.apply(this, args)
      }, delay)
    }
  
}

const useResponsive = ()=>{

  const [states, setState] = useState({
    isMobile:false,
    isTablet:false,
    isLaptop:false
  })

  useEffect(()=>{
    initialize();
    setup()
    return ()=>cleanUp()
  },[])

  const initialize = ()=>{
    
    const windowSize = window.innerWidth;
    const isMobile = windowSize<=768;
    const isTablet = windowSize > 768 && windowSize <= 990;
    const isLaptop = windowSize > 990;
    setState({isMobile, isTablet, isLaptop})
  }

  const deBouncedFn = useDebounce(initialize)

  const setup = ()=>{
    window.addEventListener("resize", deBouncedFn)
  }

  const cleanUp = ()=>{
     window.removeEventListener("resize", deBouncedFn)
  }
  return states;
}

function App() {
  const response = useResponsive()
  
  console.log(response)

  return (
    <div style={{ margin: "auto", width: "300px" }}>
      <h2>Hello World</h2>
      
    </div>
  );
}

export default App;
