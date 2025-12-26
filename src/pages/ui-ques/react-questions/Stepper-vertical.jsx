import { useState } from "react"
import jsonData from "./json/stepper-component.json"
import "./styles/stepper-component-1.css"

const VerticalStepper = ()=>{

  const [data, setData] = useState(jsonData)
  const [stepCompleted, setStepCompleted] = useState(-1)

  const onContinueClick = ()=>{
    setStepCompleted((prev)=>{
      if(prev <= data.length-1){
        return prev + 1
      }
      return prev
    })
  }

  const onBackClick = ()=>{
    setStepCompleted((prev)=>{
      if(prev >=0){
        return prev - 1
      }
      return prev
    })
  }

  return <div className="conatiner">
    <div className="step-controller">
      {data.map((item, idx)=>
      <div key={item.step} className="stepper">
        <div className="step-head">
          <div className={`step ${idx<= stepCompleted ? "active-step":""}`}>{item.step}</div>
          <div className="step-title">{item.title}</div>
        </div>
        {idx !== data.length-1 && 
        <div className={`step-indicator ${idx<= stepCompleted ? "active-step-indicator":""}`}></div>}
      </div>
    )}
  </div>
    
    <div className="step-content">{data[stepCompleted+1]?.content}</div>
    <div className="stepper-cta">
      <button className="ctas" onClick={onBackClick}>Back</button>
      <button className="ctas" onClick={onContinueClick}>Continue</button>
    </div>
  </div>
}

export default VerticalStepper