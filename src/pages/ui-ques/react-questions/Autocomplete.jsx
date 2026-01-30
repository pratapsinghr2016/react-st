import { useEffect, useState } from "react";
import "./styles/auto-suggestion.css";

// ! https://claude.ai/chat/da460b2c-c4c5-4abf-b665-15d74c1ea0b0

/* 
Functional requirement
=======================
- static or dynamic data
- debouncing
- keyboard navigation
- loader
- on-list click
- highlighted match


Non Functional requirement
=======================
- error handling
- performance (caching)
- responsiveness
- accessbility (keyboard navigation, aria-label)
- scalability -
  [make it reusable] 
  [flexible to handle dynamic and static data]
*/

const useDebounce = (fun, delay=1000)=>{
  let timerId = null
  return function(...args){
    clearTimeout(timerId)
    timerId = setTimeout(()=>{
      fun.apply(this, args)
    },delay)
  }
}

const AutoSuggestion = ()=>{

  const [result, setResult] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [cache, setCache] = useState({})
  const [searchedWord, setSearchedWord] = useState("")

  const getResults = async (query="")=>{

    setSearchedWord(query)

    if(cache[query]){
      setResult(cache[query])
      return
    }

    try{
      const result = await fetch('https://dummyjson.com/recipes'+`/search?q=${query}`);
      const data = await result.json()
      const response = data?.recipes
      setResult(response)
      setCache((prev)=>({
        ...prev,
        [query]: response
      }))
    }catch(error){
      console.log(error)
    }
    
  }
 

  useEffect(()=>{
   getResults()
  },[])

  
 const onInputChange = useDebounce((e)=>{
    const value = e.target.value;
    getResults(value)
  })

  // ! important function
const getHighlightedText = (originalTest)=>{
  const parts = originalTest.split(new RegExp(`(${searchedWord})`, "gi"))

  return <>
    {parts.map((item)=>item.toLowerCase()===searchedWord.toLowerCase() ? 
    <b>{item}</b>:item  
  )}
  </>
}

// ! onBlur and onFocus to hide the result list
return <div className="container">
    <input className="search-input" onBlur={()=>setShowResult(false)} onFocus={()=>setShowResult(true)}  onChange={onInputChange} placeholder="search here..." />
    {showResult && <div className="result">
      {result.map((item)=><p key={item.id}> {getHighlightedText(item?.name)}</p>)}
    </div>}
  </div>
}

export default AutoSuggestion