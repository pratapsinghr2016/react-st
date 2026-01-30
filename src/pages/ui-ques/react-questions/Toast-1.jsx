import { useRef, useState } from "react"
import "./styles/custom-toast.css"

/* 
Functional requirement
======================

! https://claude.ai/chat/4d47a9f6-34de-40bc-b5c8-f514d998f472
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

    // ! animated exit
    /* 
     setToastList((prev) => {
      const newToast = [...prev];
      return newToast.map((toast) =>
        toast.id === toastId ? { ...toast, exit: true } : { ...toast }
      );
    });

    setTimeout(() => {
      setToastList((prev) => {
        const newToast = [...prev];
        return newToast.filter((toast) => toast.id !== toastId);
      });
    }, 150);
    
    */
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