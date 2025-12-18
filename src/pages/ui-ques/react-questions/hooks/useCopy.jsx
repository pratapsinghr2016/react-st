import { useState } from "react"

const useCopy = ()=>{
  const [text, setStext] = useState("")

  const onCopy = async (text)=>{
    if(!window.navigator)
      return

    try{
      await window.navigator.clipboard.writeText(text)
      setStext(text)
    }catch(err){
      setStext(err)
    }
  }
 
  return {text, onCopy}
}

function App() {
  const {text, onCopy} = useCopy()
  
console.log("text:",text)
  return (
    <div style={{ margin: "auto", width: "300px" }}>
      <h2>Hello World</h2>
      <button onClick={()=>onCopy("text copied here manually")}>Copy</button>
    </div>
  );
}

export default App;
