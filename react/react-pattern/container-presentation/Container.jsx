import { useState } from "react"
import Presentation from "./Presentation"

const Container = ()=>{
  const [count, setCount] = useState(0)
  return <div>
    <Presentation count={count}/>
    <button onClick={()=>setCount((prev)=>prev+1)}>Click</button>
  </div>
}

export default Container