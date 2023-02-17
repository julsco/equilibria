import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";   
import { GiSkeleton } from 'react-icons/gi';

function Footer(props) {

    return (
        <div className="footer w-full h-full bg__grey text__green flex flex-col justify-center items-center py-5">
            <div className="flex flex-col items-center justify-center w-11/12 gap-2">
                <a href="/">
                    <img src={logo} alt="logo" className="h-24 w-32"/>
                </a>
                <ul className="flex gap-8 font-bold pt-3">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="text-center py-5">&copy; Copyright {(new Date().getFullYear())}, Equilibria Therapy. All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Footer