import { useEffect, useState } from "react";
import "./styles/infinite-scroll-1.css";

const PAGE_SIZE = 10

const InfiniteScroll = ()=>{
  const [currPage, setCurrPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true)
  const [data, setData] = useState([])

  const fetchData = async ()=>{
     if (isLoading || !hasMore) return;

      setIsLoading(true)
      try{
        const skip = currPage * PAGE_SIZE // ! calculation of offset or skip
        const res = await fetch(
          `https://dummyjson.com/recipes?limit=${PAGE_SIZE}&skip=${skip}`
        );
        const data = await res.json();

        setData((prev)=>[...prev, ...data?.recipes])
        setCurrPage((prev)=>prev+1)

        // ! skip+page_size < data.total
        setHasMore(skip + PAGE_SIZE < data.total)

      }catch(err){
        console.log(err)
      }finally{
        setIsLoading(false)
      }
  }

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    const fetchMore = ()=>{
      const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
      // ! rember calculation
      if(scrollTop+clientHeight > scrollHeight-100){
        fetchData()
      }
    }

    window.addEventListener("scroll", fetchMore)
    return ()=>{
      window.removeEventListener("scroll", fetchMore)
    }
    // ! remember dep
  },[fetchData])

  // ! Approach - 2
  // const itemRef = useRef()
  // const [isVisible, setIsVisible] = useState(false);
  // const observer = new IntersectionObserver(([item])=>setIsVisible(item.isIntersecting))

  // useEffect(()=>{
  //   if(itemRef?.current){
  //     observer.observe(itemRef?.current)   
  //   }

  //   return ()=>observer.disconnect(itemRef?.current)
  // },[fetchData])
  
  // useEffect(()=>{
  //   if(isVisible){
  //     fetchData()
  //   }
  // },[isVisible]) 

  return <div className="container">
    {data.map((item)=>
     <div key={item.id} className="content">
        <img className="image-content" src={item.image} alt={item.name} />
        <p className="name-content">{item.name}</p>
     </div>
    )} 
    {/* ! always keep at the end */}
   {isLoading && <div className="container">Loading...</div>} 
  </div>
}

export default InfiniteScroll