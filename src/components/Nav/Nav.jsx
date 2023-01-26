import React, { useRef, useState, useEffect } from "react";
import "./nav.css";
import Logo  from "../../assets/react.svg";
import BgHome from "../../assets/home-bg.jpg";
import logo from "../../assets/logo.png";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import { IoIosArrowDropupCircle } from 'react-icons/io';

export default function Nav() {

    ///////////////////----------------Scroll to section --------- ////////////////////////

    const about = useRef(null);
    const services = useRef(null);
    const contact = useRef(null);
    
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            /* top: elementRef.current.offsetTop, */
            top: elementRef.current.offsetTop-140,
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
        <div className="wrapper ">
            <div className="gradient bg-white opacity-40 top-0 absolute w-full h-screen">
                <img src={BgHome} className="top-0 absolute -z-10 w-full h-screen" ></img>
            </div>
            <div className={isVisible ? "nav relative px-24 bg-transparent" : "nav sticky active px-20 z-30"}>

                <div>
                    <a href="/">
                        <img className="h-24 w-32" src={logo} alt="Logo"></img>
                    </a>
                </div>

                <ul className="flex gap-10 text-xl items-center ">
                    <li className="cursor-pointer text-xl"><a href="/">Home</a> </li>
                    <li className="cursor-pointer text-xl"><a>About</a></li>
                    <li className="cursor-pointer text-xl"><a>Services</a></li>
                    <li className="cursor-pointer text-xl"><a>Contact</a></li>
                </ul>
            </div>
        
            {/* ------------------------------- END OF NAVIGATOR ---------------------------------------------- */}

            <Home ref={home} scrollDown={() => scrollToSection(about)} />
            

            {!backToTopBtnIsVisible && <IoIosArrowDropupCircle onClick={scrollUp} className="btnUp fixed cursor-pointer bottom-12 right-12 h-14 w-14 text-5xl"/> }
            <About ref={about} scrollDown={() => scrollToSection(services)}/>
            <Services ref={services} scrollDown={() => scrollToSection(contact)} />
            <Contact ref={contact} />
            <Footer />
        </div>
    )
}
