import { useState } from "react";
import "./styles/drag-select.css";

const arr = Array.from({length: 10})

const DragSelect = ()=>{
const [startCell, setStartCell] = useState({});
const [endCell, setEndCell] = useState();

const [isCellSelected, setIsCellSelected] = useState(false);

const onMouseLeave = ()=>{
  setIsCellSelected(false)
}

const onMouseDown = (row, col)=>{
  setStartCell({row, col});
  setEndCell({row, col})
  setIsCellSelected(true)
}

const onMouseEnter = (row, col)=>{
  if(!isCellSelected) return;
  setEndCell({row, col})
}

const onMouseUp = ()=>{
  setIsCellSelected(false);
}



const isRowInSelectedRange = (currRow, currCol)=>{
  if (!startCell || !endCell) return false;

  const minRow = Math.min(startCell.row, endCell.row)
  const maxRow = Math.max(startCell.row, endCell.row)

   const minCol = Math.min(startCell.col, endCell.col)
  const maxCol = Math.max(startCell.col, endCell.col)

  return currRow >= minRow && currCol >= minCol && currRow <= maxRow &&
  currCol <= maxCol
}

  return <div onMouseLeave={onMouseLeave} className="matrix-container">
    
      {arr.map((_, idxI)=>{
           
        
        return <div  key={idxI} className="matrix-row">
            {arr.map((_, idxJ)=>
          <div 
          onMouseDown={()=>onMouseDown(idxI, idxJ)}
          onMouseEnter={()=>onMouseEnter(idxI, idxJ)}
          onMouseUp={onMouseUp}

          key={[idxI, idxJ].join("")} 
          className={`matrix-col ${isRowInSelectedRange(idxI, idxJ)? "selected":""}`}>
            {idxI+" "+ idxJ}
          </div>)}
        </div>
        
      })}
   
  </div>
}

export default DragSelect