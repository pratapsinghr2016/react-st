import { createContext, useContext, useState } from "react"


const AccordionContext = createContext()

const Accordion = ({children})=>{
  const [idx, setIdx] = useState(0)


  return <AccordionContext.Provider value={{idx, setIdx}}>
      {children}
  </AccordionContext.Provider>
}


const AccordionHeading = ({children, currIdx})=>{
  const {idx} = useContext(AccordionContext)
  
  if(idx !== currIdx) return null;

  return  <h2>{children}</h2>
}

const AccordionSubHeading = ({children, currIdx})=>{
  const {idx} = useContext(AccordionContext)
  
  if(idx !== currIdx) return null;

  return  <p>{children}</p>
}



Accordion.Heading = AccordionHeading;
Accordion.SubHeading = AccordionSubHeading;

export default Accordion