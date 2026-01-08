import { useState } from "react";
import "./styles/modal-component.css";

const ModalComponent = ({isOpen, onClose})=>{
  
  if(!isOpen) return null;

  return <div onClick={onClose} className="modal-container">
    {/* ! important stop-propogation */}
    <div onClick={(e) => e.stopPropagation()}  className="modal-body">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis 
      laboriosam laborum nisi ex accusantium pariatur quis illo harum enim 
      provident, esse cumque voluptates! Ea sit aliquam minus sint necessitatibus ab!
      
      <button onClick={onClose} className="modal-btn">Close</button>
    </div>
  </div>
}

const AppUsage = ()=>{
  const [isOpen, setIsOpen] = useState(false)
  return <div>
    <button onClick={()=>setIsOpen(true)}>Open Modal</button>
    <ModalComponent isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
  </div>
}

export default AppUsage