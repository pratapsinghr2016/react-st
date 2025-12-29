import { useEffect, useState } from "react";
import "./styles/memory-game.css";

// ! config
const MATRIX_SIZE = 18;
const ROWS = Array.from({length: MATRIX_SIZE}, (_, idx)=>idx+1);
const ROWS_COLS = [...ROWS, ...ROWS].sort(()=>Math.random()-0.5)
const MATRIX_DATA = ROWS_COLS.map((item, idx)=>({
  id: idx,
  number: item,
  isFlipped: false
}))

const MemoryGame = ()=>{
  const [data, setData] = useState(MATRIX_DATA);
  const [currentMonitered, setCurrentMonitered] = useState([])

  const onBtnClick = (idx)=>{

    setCurrentMonitered((prev)=>[...prev, idx])
 
    setData((prev)=>{
      const newArr = [...prev]
      newArr[idx].isFlipped = true;
      return newArr
    })
  }

  useEffect(()=>{
    if(currentMonitered.length === 2){

      // ! logic and condition inside setTimeout()
       setTimeout(()=>{
          // ! PART-1
          if(data[currentMonitered[0]].number !== data[currentMonitered[1]].number){
            setData((prev)=>{
              const newArr = [...prev]
              newArr[currentMonitered[0]].isFlipped = false;
              newArr[currentMonitered[1]].isFlipped = false;
              return newArr
            })
          }
          // ! PART-2
            setCurrentMonitered([])
        },3000)      
    }    

  },[currentMonitered.length])

  console.log(data)
  // ! css has margin auto to game-container
  // ! margin auto on centers horizontally for block elements
  // ! so parent need to have a height and its display should be flex, grid
  return <div style={{height: "100vh", display:"flex"}}><div className="game-container">
    {data.map((item, idx)=><div 
      key={item.id} 
      className="game-matrix"
      >
       <button
          disabled={item.isFlipped || currentMonitered.length === 2} 
          onClick={()=>onBtnClick(idx)} 
          className="game-btn"
        >
        {item.isFlipped ? item.number : "?"}
       </button>
    </div>)}
    
  </div></div>
}

export default MemoryGame