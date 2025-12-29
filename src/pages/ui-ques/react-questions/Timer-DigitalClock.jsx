import { useEffect, useState } from "react"

const DigitalClock = ()=>{

  const [time, setTime] = useState({})

  useEffect(()=>{
   const timerId = setInterval(()=>{
      const dateObj = new Date();

      const hours = dateObj.getHours();
      const minutes = dateObj.getMinutes();
      const seconds = dateObj.getSeconds();

      setTime({hours, minutes, seconds})

    },1000)

    return ()=>clearInterval(timerId)

  },[])

  return <div>
    <span>HH: <b>{time?.hours?.toString().padStart(2, "0")}</b></span>
    <span>MM: <b>{time?.minutes?.toString().padStart(2, "0")}</b></span>
    <span>SS: <b>{time?.seconds?.toString().padStart(2, "0")}</b></span>
    
  </div>
}

export default DigitalClock