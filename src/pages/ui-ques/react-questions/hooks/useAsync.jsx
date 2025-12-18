import { useCallback, useEffect, useState } from "react"

let count = 0
const getDummyApiRes = function(success=true){
  return new Promise((resolve, reject)=>{
    if(success)
    resolve({
      statu:"succes",
      data: "Hello world" + count++,
    })
    else
      resolve({
        status:"error",
        data:null
    })
  })
}

const useAync = (apiCall, immediate=true)=>{
  const initialState = {
    state:"idle", value:null, error:null
  }
  const [details, setDetails] = useState(initialState)

  const apiCallHandler = useCallback(async ()=>{
    setDetails({
      ...initialState,
      state:"pending"
    })

    try{      
    const response = await apiCall();
      setDetails({
        state: "success",
        value: response,
        error:  null
      })
    }catch(err){
      setDetails({
        state: "error",
        value: null,
        error:  "failed"
      })
    }
  },[apiCall]) // ! function should be in dep 

  useEffect(()=>{
     if (immediate) {
      apiCallHandler();
    }
  },[immediate, apiCallHandler])

  return {state:details.state, value:details?.value?.data, error:details.error, refetch:apiCallHandler}

}

 
function App() {

  const {state, value, error, refetch} = useAync(getDummyApiRes, false)
 

  return (
    <div style={{ margin: "auto", width: "300px" }}>
        <p>state: {state}</p>
        <p>value: {value}</p>
        <p>error: {error}</p>
        <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
