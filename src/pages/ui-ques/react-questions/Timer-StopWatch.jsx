import { useEffect, useRef, useState } from "react";

const StopWatchTimer = ()=>{
  const [totalSecs, setTotalSecs] = useState(0);
  const [start, setStart] = useState(false)
  const timerId = useRef()


  useEffect(()=>{
    if(!start) return

    timerId.current = setTimeout(()=>{
      setTotalSecs((prev)=>prev+1)
    },1000)

    return ()=>clearTimeout(timerId.current)

  },[totalSecs, start])


  const hours = Math.floor(totalSecs/3600)%24;
  const minutes = Math.floor(totalSecs/60)%60;
  const seconds = totalSecs%60;

  const onStart = ()=>{
    setStart(true);
  }

  const onPause = ()=>{
    setStart(false);
    clearTimeout(timerId.current)
    timerId.current = null;
  }

  const onResume = ()=>{
    setStart(true)
  }

  const onReset = ()=>{
    setStart(false);
    clearTimeout(timerId.current)
    timerId.current = null;
    setTotalSecs(0)
  }

  return <div>
    <div>
      <span>HH: <b>{hours.toString().padStart(2, "0")}</b></span>
      <span>MM: <b>{minutes.toString().padStart(2, "0")}</b></span>
      <span>SS: <b>{seconds.toString().padStart(2, "0")}</b></span>
    </div>
    <div>
      <button onClick={onStart}>Start</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onResume}>Resume</button>
      <button onClick={onReset}>Reset</button>
    </div>
  </div>
} 

export default StopWatchTimer