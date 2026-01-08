import { useRef, useState } from "react"
import "./styles/custom-toast.css"

/* 
Functional requirement
======================

*/

const CustomToast = ()=>{

  const [toastList, setToastList] = useState([])
  const timerRef = useRef({})

 const onCloseClick = (id)=>{
    setToastList((prev)=>{
      const newToastList = prev.filter((item)=>item.id !== id)
      return newToastList
    })
    clearTimeout(timerRef.current[id])
  }

  const addToatsInList = ({type="success", description="Dummy descrition"})=>{
    const id = Date.now();
    setToastList((prev)=>{
      const newToastList = [...prev, {id, type, description}]
      return newToastList
    })

   timerRef.current[id] = setTimeout(()=>onCloseClick(id),5000)
  }

  return<div>  
    <div className="toast-container">
      {toastList.map((item)=><div key={item.id} className={"toast "+item.type}>
        <div key={item.id} className="toast-content">Here will be my toast heading and description</div>
        <spna onClick={()=>onCloseClick(item.id)} className="toast-close">X</spna>
      </div>)}
      
    </div>
    <button onClick={()=>addToatsInList({type: "success"})}>Success</button>
    <button onClick={()=>addToatsInList({type: "error"})}>Error</button>
    <button onClick={()=>addToatsInList({type: "warning"})}>Warning</button>
    <button onClick={()=>addToatsInList({type: "info"})}>Info</button>
  </div>

}

export default CustomToast