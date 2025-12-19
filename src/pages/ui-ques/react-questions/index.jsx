import { createContext, useContext, useRef, useState } from "react";
import "./styles/custom-toast.css";
/* 
To make it reusable write toast component logic in Provider
and create a context
  - createContext
  - create provider FC
  - create useContext FC's hook (useXYZ)

*/
const ToastContext = createContext({});
const useToast = ()=> useContext(ToastContext) // ! hook getting called in FC

const ToastProvider = ({children})=>{
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

  
  return <ToastContext.Provider value={{addToatsInList}}>
      <div className="toast-container">
        {toastList.map((item)=><div key={item.id} className={"toast "+item.type}>
          <div key={item.id} className="toast-content">Here will be my toast heading and description</div>
          <span onClick={()=>onCloseClick(item.id)} className="toast-close">X</span>
        </div>)}
        
      </div>
    {children}
  </ToastContext.Provider>
}

const CustomToast = ()=>{

  const {addToatsInList} = useToast();

  return<div>  
    <button onClick={()=>addToatsInList({type: "success"})}>Success</button>
    <button onClick={()=>addToatsInList({type: "error"})}>Error</button>
    <button onClick={()=>addToatsInList({type: "warning"})}>Warning</button>
    <button onClick={()=>addToatsInList({type: "info"})}>Info</button>
  </div>

}

const Text = ()=><ToastProvider>
  <CustomToast/>
</ToastProvider>

export default Text