import React, {useState, useEffect} from "react"
import RingLoader  from "react-spinners/RingLoader";
import Nav from "./components/Nav/Nav";


export default function App() {
  
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout( () => {
      setLoading(false)
    }, 1000)
  },[])

  return (
  
  
  <div className= { loading ? "flex justify-center items-center w-full h-screen" : ""}>
  
    {loading ? 
    
      <RingLoader 
          color={"#d63a36"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    
    :
      <>
        <Nav />
      </>

    }
  </div>
  )
}
