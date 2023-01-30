import React, { useRef, useState, useEffect, useContext } from "react";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";
import { IoIosArrowDropupCircle } from 'react-icons/io';
import RingLoader  from "react-spinners/RingLoader";
import { WindowWidthContext } from "../App";


export default function Landing() {
    
    const windowWidth = useContext(WindowWidthContext);

    ///////////////////----------------Loading animation --------- ////////////////////////

    const [loading, setLoading] = useState(false)

    /* useEffect(()=>{
        setLoading(true)
        setTimeout( () => {
        setLoading(false)
        }, 2000)
    },[]) */

    

    ///////////////////----------------Scroll to section --------- ////////////////////////

    const about = useRef(null);
    const services = useRef(null);
    const contact = useRef(null);
    const navigator = useRef(null);

    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        setNavHeight(navigator.current.clientHeight);
        }, [windowWidth]
    );

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop-navHeight,
            behavior: "smooth",
            threshold: 0
        })
    }



    ///////////////////----------------Nav change of color --------- ////////////////////////
    
    const home = useRef();

    const [isVisible, setIsVisible] = useState(false)
    const [backToTopBtnIsVisible, setBackToTopBtnVisible] = useState(false);
    
    useEffect( () => {
        const observer = new IntersectionObserver(entries=> {
            const entry = entries[0]
            setIsVisible(entry.isIntersecting) 
            setBackToTopBtnVisible(entry.isIntersecting) 
        }, { threshold: [0.2] })

        observer.observe(home.current)

    },[]);

    ///////////////////----------------Button to top function --------- ////////////////////////

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    
    ///////////////////----------------End --------- ////////////////////////

    return (
        
            <div className= { loading ? "flex justify-center items-center w-full h-screen bg__pink-light" : ""}>
            {loading ? 
      
            <RingLoader 
                color={"#0E5474"}
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
            
            :
            <>
                
                <div className="wrapper ">
                    <Nav ref={navigator} isNavVisible = {isVisible}/>

                    <Home ref={home} scrollDown={() => scrollToSection(about)} />
                    
                    {!backToTopBtnIsVisible && <IoIosArrowDropupCircle onClick={scrollUp} className="btnUp fixed cursor-pointer bottom-12 right-12 h-14 w-14 text-5xl"/> }
                    
                    <About ref={about} scrollDown={() => scrollToSection(services)}/>
                    <Services ref={services} scrollDown={() => scrollToSection(contact)} />
                    <Contact ref={contact} />
                    <Footer />
                
                </div>
            </>
            }

            
            </div>
         
    )
}
