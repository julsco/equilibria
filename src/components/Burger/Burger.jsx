import React, { useState } from "react";
import "./burger.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Burger() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleBurger = () => {
        setIsOpen(!isOpen)
    }

    isOpen ? document.body.classList.add("active-modal") : document.body.classList.remove("active-modal");


    return (
        <>
            <GiHamburgerMenu onClick={toggleBurger} className="text-4xl cursor-pointer" />
            <div className={`overlay z-30 fixed top-0 left-0 h-screen w-full ${!isOpen ? "hidden" : ""}`}></div>
            <div className={`burg fixed h-screen top-0 right-0 w-0 bg__grey z-40 ${!isOpen ? "hidden" : "w-80"}`}>
                
                <div className="z-50 flex flex-col gap-8 items-end pr-8 sm:pr-24 pt-12">
                    <RxCross2 onClick={toggleBurger} className="text-4xl cursor-pointer" />
                    <ul className={`flex flex-col gap-10 pr-20 text-xl ${!isOpen ? "hidden" : "block"}`}>
                            <li className="cursor-pointer text-xl"><Link to="/">Home</Link> </li>
                            <li className="cursor-pointer text-xl"><Link to="/about">About</Link></li>
                            <li className="cursor-pointer text-xl"><Link to="/services">Services</Link></li>
                            <li className="cursor-pointer text-xl"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}