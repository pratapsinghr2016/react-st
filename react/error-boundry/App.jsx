import { useEffect, useState } from "react";
import ErrorBoundry from "./ErrorBoundry";


const useError = ()=>{
  const [err, setErr] = useState(false);

  function triggereError(){
    setErr(true)
  }

  if(err){
    throw new Error("Error occured", err)
  }

  return {triggereError}
}


const Header = ()=>{

  useEffect(()=>{
    console.log("mounted")
    // ! crshes the app
    // null.length();

    /* 
    ! App will crash and get caught in EB for:
      - ! crash in hooks and custom-hooks
      - ! crash in when react life cycle starts
    
    */
    
  },[]);


   /* 
    ! App will crash and NOT get caught in EB for:
      - ! event handlers
      - ! setTimeout
      - ! async code

    ! for this we can use a custom hook
    
    */
   const {triggereError} = useError();
   
    function test(){
      try{
          null.length()
        }catch(err){
          triggereError(err)
        }
      }


  return <header onClick={test} className="header">Header</header>
}


const App = ()=>{

  return <div className="container">
    <ErrorBoundry>
      <Header/>
    </ErrorBoundry>
    <aside className="side-bar">Side Bar</aside>
    <main className="main-body"> Main Body</main>
    <footer className="footer">Footer</footer>
  </div>
}

export default App