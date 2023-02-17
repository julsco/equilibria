import React from "react";
import Nav from "../Nav/Nav";
import AboutBg from "../../assets/about-bg.jpg";

export default function MainAbout () {
    return (
        <>
            <Nav showBg={false}/>
            <img src={AboutBg} alt="about-background" className="w-full " />
            <h1>About</h1>
            
        </>
    )
}