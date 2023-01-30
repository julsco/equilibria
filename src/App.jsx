import React, {useState, useEffect, createContext} from "react"
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";


export const WindowWidthContext = createContext()

export default function App() {

  ///////////////////----------------Create context window width --------- ////////////////////////


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
            
  useEffect(() => {
      const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
      window.removeEventListener('resize', handleWindowResize);
      };
  },[]);

  return (
  
    <WindowWidthContext.Provider value={windowWidth}>
    
      <Routes>
        <Route path="/" element={<Landing />}/>
      </Routes>
      
    </WindowWidthContext.Provider>
 
  )
}
