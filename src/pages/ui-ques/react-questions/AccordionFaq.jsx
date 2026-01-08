import { useState } from "react";
import jsonData from "./json/accordion-faq.json";
import "./styles/accordion-faq.css";


/* 
 ! if want to open and close independently

const [openItems, setOpenItems] = useState(new Set());

const handleClick = (index) => {
  setOpenItems((prev) => {
    ! create a copy first
    const next = new Set(prev); 
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    return next;
  });
};

*/

const AccordionFaq = ()=>{
  const [data, setData] = useState(jsonData);
  const [openIdx, setOpenIdx] = useState(-1)

  // ! remember the behaviour and how below logic is related
  const onClickHandler = (clickedIdx)=>{
    setOpenIdx((prevIdx)=>prevIdx === clickedIdx ? -1 : clickedIdx)
  }
 
 return <div className="acc-container">
  {data.map((item, idx)=>
    <div onClick={()=>onClickHandler(idx)} key={idx} className="acc-item">
      <div className="acc-heading">
        <div className="acc-title">{item.question}</div>
        <span className="acc-indicator">{openIdx !== idx ? "+":"-"}</span>
      </div>
      {openIdx === idx && <div className="acc-dsc">{item.answer}</div>}
    </div>)
  }  
  </div>
}

export default AccordionFaq