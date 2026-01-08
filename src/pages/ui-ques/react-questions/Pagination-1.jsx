import { useCallback, useEffect, useState } from "react";
import "./styles/pagination-1.css";

const URL = "https://dummyjson.com/recipes?limit=200"
const PAGE_SIZE = 10;

const Pagination = ()=>{
  const [data, setData] = useState([])

  const [currPage, setCurrPage] = useState(0)


  const getProducts = useCallback(async()=>{
   try{
    const response = await fetch(URL)
    const jsonRes = await response.json()
    setData(jsonRes.recipes)
    
    }catch(err){
      console.log(err)
    }
  },[])

  useEffect(()=>{
    getProducts()
  },[])

   const onNextClick = ()=>{
    setCurrPage((prev)=>{
      if(prev < totalPages-1){
        prev+=1
      }
      return prev
    })
  }

  const onPrevClick = ()=>{
    setCurrPage((prev)=>{
      if(prev>0){
        prev-=1
      }
      return prev
    })
  }

  // ! frontend oriented pagination
  // ! start = skip and hasmore = end
  const totalPages = Math.ceil(data.length/PAGE_SIZE)
  const start = currPage*PAGE_SIZE;
  const end = start+PAGE_SIZE

  return <div className="container">
    <div className="pagination-container">
       <span onClick={onPrevClick} className="page-arrow">⬅️</span>
      {Array.from(({length:totalPages})).map((_, idx)=>
      <span style={{fontWeight: idx=== currPage ? 800: 400}} onClick={()=>setCurrPage(idx)} key={idx} className="page-item">
        {idx+1}
      </span>)
      }
      <span onClick={onNextClick} className="page-arrow">➡️</span>
    </div>
    <div className="content">
      {data.slice(start, end).map((item)=><div key={item.id} className="card-item">
        <img className="card-image" alt={item.name} src={item.image}/>
        <span className="card-title">{item.name}</span>
      </div>)}
    </div>
    
  </div>
}

export default Pagination