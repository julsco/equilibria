import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";   
import { GiSkeleton } from 'react-icons/gi';

function Footer(props) {

    return (
        <div className="footer w-full h-full bg__grey text__green flex flex-col justify-center items-center py-5">
            <div className="flex flex-col items-center justify-center w-11/12 gap-2">
                <a href="/">
                    <img src={logo} alt="logo" className="h-24 w-32"/>
                </a>
                <ul className="flex gap-8 font-bold pt-3">
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className="text-center py-5">&copy; Copyright {(new Date().getFullYear())}, Equilibria Therapy. All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Footer