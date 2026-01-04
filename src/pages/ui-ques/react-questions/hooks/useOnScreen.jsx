import { useEffect, useRef, useState } from "react";

const _useOnScreen = (ref)=>{
  const [isVisible, setIsVisible] = useState(false);

  const observer = ()=>{
    // ! const offset = 50;
    const {x, y, bottom, right} = ref?.current.getBoundingClientRect();

    const isVisibleX = x >= 0 && right <= window.innerWidth;
    const isVisibleY = y >= 0 && bottom <= window.innerHeight;

    /* 
    ! with offset

    const isVisibleX = x >= 0 - offset && right <= window.innerWidth - offset;
    const isVisibleY = y >= 0 - offset && bottom <= window.innerHeight - offset;
    
    */

    if(isVisibleX && isVisibleY){
      setIsVisible(true)
    }else{
      setIsVisible(false)
    }
  }

  useEffect(()=>{

    observer();
    window.addEventListener("scroll", observer)

    return ()=>window.removeEventListener("scroll", observer)
  },[])

  return isVisible
}

const useOnScreen = (ref)=>{
  const [isVisible, setIsVisible] = useState(false);
  const observer = new IntersectionObserver(([item])=>setIsVisible(item.isIntersecting))

  useEffect(()=>{

    // ! you missed twice to pass ref IDOT !!!
    observer.observe(ref.current)

    return ()=>observer.disconnect()

  },[])

  return isVisible
}


function App() {
  const elRef = useRef()
  const isVisible = useOnScreen(elRef)
  console.log({isVisible})  
  return (
    <div ref={elRef} style={{ margin: "auto", width: "300px" }}>
      <h2>Hello World</h2>
      
    </div>
  );
}

export default App;
