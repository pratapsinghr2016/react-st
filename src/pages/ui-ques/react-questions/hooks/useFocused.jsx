import { useEffect, useState } from "react";

const useFocused = ()=>{
// ! document hasFocus initialization is also important
const [isFocused, setIsFocused] = useState(document.hasFocus());

useEffect(()=>{
  const onFocus = ()=>setIsFocused(true)
  const onRemoveFocus = ()=>setIsFocused(false);

  window.addEventListener("focus", onFocus);
  window.addEventListener("blur", onRemoveFocus);

  return ()=>{
    window.removeEventListener("focus", onFocus);
    window.removeEventListener("blur", onRemoveFocus);
  }
},[])

 return isFocused
}


function App() {

  
  const isFocused = useFocused()

  console.log({isFocused})
  
  return (
    <div  style={{ margin: "auto", width: "300px" }}>
      <h2>Hello World</h2>
      <input placeholder="hello world"/>
    </div>
  );
}

export default App;
