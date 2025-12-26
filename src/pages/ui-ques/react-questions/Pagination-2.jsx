import { useEffect, useState } from "react";
import "./styles/pagination-2.css";

const URL = "https://picsum.photos/v2/list"
const PAGE_SIZE = 5

const Pagination2 = ()=>{
  const [currPage, setCurrPage] = useState(1);
  const [resData, setResData] = useState([])

  const fetchProducts = async ()=>{
    try{
      const response = await fetch(`${URL}?page=${currPage}&limit=${PAGE_SIZE}`)
      const data = await response.json();
      setResData(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchProducts()
  },[currPage])

  const onPrevClick = ()=>{
    setCurrPage((prev)=>{
      if(prev>1)
      return prev-=1
    return prev
    })
  }

  const onNextClick = ()=>{
    setCurrPage((prev)=>{
      return prev+=1
    })
  }


const getPrev3Buttons = ()=>{
  let pageArr = []
  for(let i=currPage-1; i>(currPage-4); i--){
    if(i>0)
    pageArr.push(i)
  }
  
  return pageArr.reverse()
}

const getNext4Buttons = ()=>{
  let pageArr = []
  for(let i=currPage+1; i<currPage+4; i++){
    pageArr.push(i)
  }
 
  return pageArr
}
 
  return <div style={{marginTop: 20}} className="container">
     <div className="pagination-body">
      <span className="previous-btn" onClick={onPrevClick}>⬅️</span>
      {[...getPrev3Buttons(), currPage, ...getNext4Buttons()].map((item)=>
      <span 
        onClick={()=>setCurrPage(item)}
        key={item} 
        className={item === currPage ? "current-page":"action-btn"}
        >
        {item}
      </span>)}
      <span className="next-btn" onClick={onNextClick}>➡️</span>
    </div>
    <div className="page-body">
      {resData.map((item, idx)=><div key={item.id} className="content">
        <img alt={item?.author+idx} src={item.download_url} className="image-body" />
        <span className="image-title">{item?.author}</span>
      </div>)
      }
    </div>
   
  </div>
}

export default Pagination2