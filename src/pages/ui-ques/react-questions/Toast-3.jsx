import { useEffect, useRef, useState } from "react";
import "./styles/custom-toast.css";

// ! Singleton pattern
class ToastServerice {
  constructor(){
    this.registeAddToast = null;
  }

  register(fn){
    if(fn){
      this.registeAddToast = fn
    }
  }

  executer(data){
    if(this.registeAddToast){
      this.registeAddToast(data)
    }else{
      console.log("error")
    }
  }

}

const toastServiceObj = new ToastServerice()


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

  // ! connect class service here
   useEffect(()=>{
    toastServiceObj.register(addToatsInList)
  },[])
  
  return       <div className="toast-container">
        {toastList.map((item)=><div key={item.id} className={"toast "+item.type}>
          <div key={item.id} className="toast-content">Here will be my toast heading and description</div>
          <span onClick={()=>onCloseClick(item.id)} className="toast-close">X</span>
        </div>)}
        
      </div>
}



const Test = ()=>{
  
  useEffect(()=>{
    toastServiceObj.executer({type:"warning"})
  },[])

return  <><p>Toast now needs to be called only at root component, No provider is needed</p>
<ToastProvider/>
</>


}

export default Test