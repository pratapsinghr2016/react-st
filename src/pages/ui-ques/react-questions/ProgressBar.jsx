import { useEffect, useState } from "react"
import "./styles/progress-bar.css"

const ProgressBar = ()=>{

  const [progress, setProgress] = useState(0)

  useEffect(()=>{

    const interval = setInterval(()=>{
      setProgress((prev)=>{
        if(prev>=100){
          clearInterval(interval)
          return prev;
        }else{
          return prev+5
        }
      })
    },150)

    return ()=>{
      clearInterval(interval)
    }

  },[])



  return <div className="progress-container">
    <div style={{transform:`translateX(${progress-100}%)`}} 
    className="progress-body">%</div>
  </div>
}

export default ProgressBar

