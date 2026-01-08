import { useEffect, useState } from "react";

const CountdownTimer = ()=>{
  const [seconds, setSeconds] = useState(0)


  const handleSubmit = (e)=>{
    e.preventDefault();
    const entries = new FormData(e.target)
    const values = Object.fromEntries(entries)
    const {hours, minutes, seconds} = values;
    
    const totalSeconds = Number(hours)*3600 + Number(minutes)*60 + Number(seconds)
    setSeconds(totalSeconds)
     e.target.reset(); 
  }

  useEffect(()=>{
    if (seconds <= 0) return; // ! prevent

    const timerId = setInterval(()=>{
      setSeconds((prevSec)=>prevSec-1)
    },1000)
    return ()=>clearInterval(timerId)
  },[seconds])

  // const hours = Math.floor(seconds/3600);
  // const minutes = Math.floor((seconds%3600)/60);
  // const sec = seconds%60

  const days = Math.floor(seconds / 86400)%1;
  const hours = Math.floor(seconds / 3600)%24;
  const minutes = Math.floor(seconds / 60)%60;
  const sec = seconds%60

  /* 
  const DAY = 24 * 60 * 60;       // 86400
  const HOUR = 60 * 60;           // 3600
  const MINUTE = 60;

  const days    = Math.floor(seconds / DAY);
  const hours   = Math.floor(seconds / HOUR) % 24;
  const minutes = Math.floor(seconds / MINUTE) % 60;
  const sec     = seconds % 60;

  unit = Math.floor(totalSeconds / TOTAL_SECONDS_IN_XXX) % MAX_VALUE_OF_UNIT

  */


  return <div>
    <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="number" max={24} name="hours" placeholder="hours"/>
          <input type="number" max={59} name="minutes" placeholder="minutes"/>
          <input type="number" max={59} name="seconds" placeholder="seconds"/>
          <button>Start</button>
        </form>

    </div>
    <div className="timer">
    <span>HH: <b>{hours.toString().padStart(2, "0")}</b></span>
    <span>MM: <b>{minutes.toString().padStart(2, "0")}</b></span>
    <span>SS: <b>{sec.toString().padStart(2, "0")}</b></span>
    </div>
  </div>
}
export default CountdownTimer