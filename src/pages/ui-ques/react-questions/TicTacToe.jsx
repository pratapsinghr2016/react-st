import { useState } from "react";
import "./styles/tic-tac-toe.css";

const MATRIX_SIZE = 5;
const data = Array.from({length: MATRIX_SIZE}).fill(null);
const matrix = data.map((_)=>[...data])

const getWinner = (matrixArr)=>{
  // check in rows
  for(let i=0; i<matrixArr.length; i++){
    const currPlayer = matrixArr[i][0];
    let winner = true;
    
    if(currPlayer){
      for(let j=0; j<matrixArr.length; j++){
        if(currPlayer !== matrixArr[i][j]){
          winner = false;
          break;
        }
      }
      if(winner){
        return currPlayer
      }
    }

  }

  // check in columns
  for(let j=0; j<matrixArr.length; j++){
    const currPlayer = matrixArr[0][j]; // ! column item
    let winner = true;
    
    if(currPlayer){
      for(let i=0; i<matrixArr.length; i++){
        if(currPlayer !== matrixArr[i][j]){
          winner = false;
          break;
        }
      }
      if(winner){
        return currPlayer
      }
    }
  }

  // check in diagonal
    const currPlayer = matrixArr[0][0];
    let winner = true;

    if(currPlayer){
      for(let i=1; i<matrixArr.length; i++){
        if(currPlayer !== matrixArr[i][i]){
          winner = false;
          break
        }
      }
      if(winner){
        return currPlayer
      }
    }
    
  // check in anti-diagonal
  const size = matrixArr.length
  const currPlayer1 = matrixArr[0][size-1];

  if(currPlayer1){
    for(let i=0; i<size; i++){
      if(currPlayer1 !== matrixArr[i][size-i-1]){
        winner = false;
        break;
      }
    }
    if(winner){
      return currPlayer1
    }
  }
  

  return null
}

const TicTacToe = ()=>{
  const [arr, setArr] = useState(matrix);
  const [xTurn, setXTurn] = useState(false);
  const [winner, setWinner] = useState(null)

  const onBlockClick = (rowIdx, colIdx)=>{
    console.log({rowIdx, colIdx})
    const value = xTurn ? "X" : "O";
    const newArr = [...arr];
    newArr[rowIdx][colIdx] = value;
    

    const winnerVal = getWinner(newArr, value)
    setWinner(winnerVal)
    setArr(newArr);
    setXTurn(!xTurn)
  }


return <div className="container">
    {arr.map((_i, rIdx)=><div key={rIdx} className="matrix-row">
          {arr[rIdx].map((_j, cIdx)=>
            <div 
              key={[rIdx,cIdx].join("")} 
              className="matrix-col"
            >
             <button 
              onClick={()=>onBlockClick(rIdx, cIdx)} 
              className="matrix-btn"
              disabled={arr[rIdx][cIdx] !== null || winner}
              >
                {arr[rIdx][cIdx]??""}
             </button>
          </div>)}
    </div>)}
    <div className="matrix-cta">
      <p className="matrix-status">
        {winner ? `${winner} is winner`: xTurn ? "Turn of X": "Turn of O"}
      </p>
      <button>Reset</button>
    </div>
  </div>
}

export default TicTacToe