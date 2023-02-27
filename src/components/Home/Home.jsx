import React, { forwardRef } from "react";
import "./home.css";
import { HiArrowLongDown } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Home(props, ref) {

    return (
        <div ref={ref} className="home__section overflow-hidden relative items-center lg:items-start justify-center flex flex-col gap-16 xl:gap-12 w-full bg-transparent  lg:pt-32 lg:pl-28 xl:pt-24">
            <h1 className="text__green text-center font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">EQUILIBRIA THERAPY</h1>
            <h2 className="text__green lg:text-start text-center text-2xl md:text-3xl xl:text-4xl lg:w-3/4 md:px-6 lg:px-0">
                The harmony's root grows into the obtained results of the physical,
                mental, and spiritual equilibrium.
            </h2>
            <h4 className="text__green text-xl md:text-2xl xl:text-4xl">Sport Industry | Physiotherapist | Chiropractic</h4>
            <div className="lg:pl-36 xl:pt-8 xl:pl-56">
            <Link to="/about"><button className="btn__main bg__red text-center text-white rounded w-40 h-12 xl:w-56 xl:h-16 text-xl xl:text-2xl" >Explore more</button></Link>
            </div>
            <div className="flex flex-col self-center items-center md:pt-0 lg:pr-28">
                <HiArrowLongDown onClick={props.scrollDown} className="text__green text-6xl cursor-pointer" />
                <div onClick={props.scrollDown} className="text__green h-16 font-bold cursor-pointer">Scroll down</div>
            </div>
        </div>
    )
}

export default forwardRef(Home)