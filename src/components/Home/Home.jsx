import React, { forwardRef } from "react";
import "./home.css";
import { HiArrowLongDown } from "react-icons/hi2";

function Home(props, ref) {

    return (
        <div ref={ref} className="home__section relative flex flex-col gap-14 w-full bg-transparent pt-32 pl-28">
            <h1 className="text__green text-6xl">EQUILIBRIA THERAPY</h1>
            <h2 className="text__green text-4xl w-2/4">
                The harmony's root grows into the obtained results of the physical,
                mental, and spiritual equilibrium.
            </h2>
            <h4 className="text__green text-3xl">Sport Industry | Coach | Therapist</h4>
            <div className="pt-8 pl-56">
                <button className="btn__main bg__red text-center text-white rounded w-56 h-16 text-2xl" >Contact us</button>
            </div>
            <div className="flex flex-col items-center justify-center">
                <HiArrowLongDown onClick={props.scrollDown} className="text__green text-8xl cursor-pointer" />
                <div onClick={props.scrollDown} className="text__green h-16 text-xl font-bold cursor-pointer">Scroll down</div>
            </div>
        </div>
    )
}

export default forwardRef(Home)