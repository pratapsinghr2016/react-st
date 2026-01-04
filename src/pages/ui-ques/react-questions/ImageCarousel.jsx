import { useEffect, useState } from "react";
import "./styles/test-revision.css";
const images = [
  "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
  "https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];

const TOTAL_IMAGES = images.length
const ImageCarousal = ()=>{
  const [imagSt] = useState(images)
  const [activeImg, setActiveImage] = useState(0)

  const onNextClick = ()=>{
    setActiveImage((prev)=>{
      if(prev < TOTAL_IMAGES-1){
        return prev+1
      }
      return prev
    })
  }

   const onPrevClick = ()=>{
    setActiveImage((prev)=>{
      
      if(prev > 0){
        return prev-1
      }
      return 0
    })
  }

  useEffect(()=>{
   const timerId = setTimeout(()=>{
    
       setActiveImage((prev) => (prev + 1) % TOTAL_IMAGES); // ! auto-play logic
    }, 5000)
    return ()=>clearTimeout(timerId)
  },[activeImg])

  return <div className="carousal-container">
    <div  className="carousal-body">
      {imagSt.map((item, idx)=>
      <img style={{transform: `translateX(-${activeImg*100}%)`}} className="carousal-img" key={idx} src={item} alt={idx+"image"} />)}
      
    </div>
    <div className="carousal-cta">
      <button onClick={onPrevClick} className="carousal-btn">Prev</button>
       <button onClick={onNextClick} className="carousal-btn">Next</button>
    </div>
  </div>
}

export default ImageCarousal