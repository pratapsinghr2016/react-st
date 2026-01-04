import { useEffect, useRef, useState } from "react"
import "./styles/otp-input.css"

const OTP_LENGTH = 5
const OtpInput = ()=>{
  
  const [inputRes, setInputRes] = 
  useState(Array.from({length:OTP_LENGTH}).fill("")) // ! remeber fill("")
  const inputRefs = useRef([])

  useEffect(()=>{
    inputRefs.current[0]?.focus();
  },[])

  
  const onKeyDownHandler = (e, idx)=>{
    if(e.key === "Backspace"){
    
      setInputRes((prev)=>{
        const newArr = [...prev];
        newArr[idx] = "";
        return newArr
      })
      inputRefs.current[idx-1]?.focus();

    }
  }

  const onPasteHandler = (e, idx)=>{
    e.preventDefault() // !important
    const textData = e.clipboardData.getData("text/plain")
    const textArr = textData.split("").slice(0, OTP_LENGTH-idx);

    setInputRes(textArr)
  }

  const onChangeHandler = (value, idx)=>{

    if(value.trim() && !isNaN(value)){ // ! isNaN vs Number.isNaN()

    inputRefs.current[idx+1]?.focus();

    setInputRes((prev)=>{
      const newRes = [...prev];
      newRes[idx] = value.slice(-1); // ! remeber splice(-1)
      return newRes
    })
  }
}

  const setInputRef = (el, idx)=>{
    return inputRefs?.current ? inputRefs.current[idx] = el : undefined // ! 
  }

  return <div className="input-container">
    {inputRes.map((_, idx)=><input
     className="otp-input"
     key={idx} 
     value={inputRes[idx]} // ! remember
     ref={(el)=>setInputRef(el, idx)}
     onPaste={(e)=>onPasteHandler(e, idx)}
     onKeyDown={(e)=>onKeyDownHandler(e, idx)}
     onChange={(e)=>onChangeHandler(e.target.value, idx)}
     />)}
  </div>
}

export default OtpInput