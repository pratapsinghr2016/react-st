import { useEffect, useRef, useState } from "react"

const config = {
  red:{
    next: "yellow",
    duration: 3000
  },
  yellow:{
    next: "green",
    duration: 1000
  },
  green: {
    next: "red",
    duration: 2000
  }
}

const TrafficLight = ()=>{
  const [currentLight, setCurrentLight] = useState("red") // ! initialize
  const [isActionPaused, setIsActionPaused] = useState(true)
  const timerRef = useRef(null)

  useEffect(()=>{
    if(isActionPaused){
      // ! next light dont need a loop
    const {next, duration} = config[currentLight]; 
    
    timerRef.current = setTimeout(()=>{
        setCurrentLight(next)
    }, duration)
}
  return ()=>clearTimeout(timerRef?.current)
  },[currentLight, isActionPaused])

  const onPauseClick = ()=>{
    clearTimeout(timerRef.current)
    setIsActionPaused(false)
  }

  return <div>
    <h1>{currentLight}</h1>
    <button onClick={onPauseClick}>Pause</button>
    <button onClick={()=>setIsActionPaused(true)}>Resume</button>
  </div>

}

export default TrafficLight