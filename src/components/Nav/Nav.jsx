import React, { useContext, forwardRef } from "react";
import "./nav.css";
import BgHome from "../../assets/home-bg.jpg";
import logo from "../../assets/logo.png";
import Burger from "../Burger/Burger";
import { WindowWidthContext } from "../../App";
import { Link } from "react-router-dom";

function Nav(props, ref) {

    ///////////////////----------------Burger menu--------- ////////////////////////
    
    const windowWidth = useContext(WindowWidthContext);

    return (
        <>
            <div className="gradient bg-white opacity-40 top-0 absolute w-full h-screen">
                <img src={BgHome} className="top-0 absolute -z-10 w-full h-screen" ></img>
            </div>
            <div ref={ref} className={`nav  px-10 sm:px-24 ${props.isNavVisible ? "bg-transparent relative" : "sticky active z-30"}`}>
                <div>
                    <a href="/">
                        <img className="h-24 w-32" src={logo} alt="Logo"></img>
                    </a>
                </div>

                {windowWidth > 768 ? <ul className="flex gap-10 text-xl items-center ">
                    <li className="cursor-pointer text-xl"><a>Home</a> </li>
                    <li className="cursor-pointer text-xl"><a >About</a></li>
                    <li className="cursor-pointer text-xl"><a>Services</a></li>
                    <li className="cursor-pointer text-xl"><a>Contact</a></li>
                </ul> : <Burger />}
            </div>
        </>
    )
}

export default forwardRef(Nav)
