import { useState } from "react";
import "./styles/chip-1.css";

const Chip1 = ()=>{
  const [inputValue, setInputValue] = useState("")
  const [chips, setChips] = useState([])


  const onEnterKeyHandler = (e)=>{
    if(!inputValue.trim().length) return;

    if(e.key === "Enter"){
      setChips((prev)=>[...prev, {id: Date.now(), value: inputValue.trim()}])
      setInputValue("")
    }
  }

  const onDeleteChip = (item)=>{
    setChips((prev)=>prev.filter((prevItem)=>prevItem.id !== item.id))
  }

  return <div className="container">
    <input className="input-box" value={inputValue} 
      placeholder="enter input" 
      onKeyDown={onEnterKeyHandler} 
      onChange={(e)=>setInputValue(e.target.value)}
    />
    <div className="chip-container">
      {chips.map((item)=><span className="chip-body" key={item.id}>
       <p className="chip-title">{item.value}</p>
       <span className="chip-cross" onClick={()=>onDeleteChip(item)}>X</span>
      </span>)}
    </div>
  </div>
}

export default Chip1