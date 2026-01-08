import { useState } from "react";
import "./styles/virtualized-list.css";

const listArr = Array.from({length: 1000000}, (_, idx)=>idx+1)

const windowWidth = 350;
const windowHeight = 600;
const itemHeight = 35;

const VirtualizsedList = ()=>{
  const [indices, setIndices] = useState([0, Math.floor(windowHeight/itemHeight)])
  
  const handleScroll = (e)=>{
    // ! remember significance of scrollTop
    const {scrollTop} = e.target;
    const newStartIndex = Math.floor(scrollTop/itemHeight);
    const newEndIndex = newStartIndex + Math.floor(windowHeight/itemHeight);
    setIndices([newStartIndex, newEndIndex])
  }
  
  console.log("hit", indices)
  const slicedList = listArr.slice(indices[0], indices[1]+1);

  // ! remember there will be 3 divs
  return <div 
     onScroll={handleScroll}
     style={{height: windowHeight, width: windowWidth, overflow:"auto"}}  // ! overflow: auto
     className="list-container"
     >
    <div 
      style={{
        height: itemHeight * listArr.length, 
        position:"relative"
      }}
      >
      {slicedList.map((item, index)=>
        <div 
        style={{
          height: itemHeight, 
          position: "absolute", 
          top: (indices[0]+index)*itemHeight // ! remember formula
        }}
        key={item} className="list-item">
        {item}
        </div>
      )} 
    </div>
  </div>
}

export default VirtualizsedList