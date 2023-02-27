import React, {useState, useEffect, createContext} from "react"
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import MainAbout from "./components/About/MainAbout";
import MainServices from "./components/Services/MainServices";
import MainContact from "./components/Contact/MainContact";
import ScrollToTop from "./components/ScrollToTop";

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
        <Route path="/about" element={<MainAbout />}/>
        <Route path="/services" element={<MainServices />}/>
        <Route path="/contact" element={<MainContact />}/>
      </Routes>
      
    </WindowWidthContext.Provider>
 
  )
}
