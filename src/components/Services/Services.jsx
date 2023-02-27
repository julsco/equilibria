import React, { forwardRef, useContext } from "react";
import "./services.css";
import acupuncture from "../../assets/acupuncture.jpg";
import massage from "../../assets/massage.jpg";
import chiropractic from "../../assets/chiropractic.jpg";
import { HiArrowLongDown } from "react-icons/hi2";
import { WindowWidthContext } from "../../App";
import { Link } from "react-router-dom";


function Services(props, ref) {

    const windowWidth = useContext(WindowWidthContext);


    return (
        <div ref={ref} className="services__section overflow-hidden w-full bg-white flex flex-col justify-center items-center gap-6 sm:gap-10 lg:gap-14 pt-6">
            
            <div className="flex flex-col items-center justify-center gap-6 xl:gap-8" >
                <h1 className="text__green text-3xl md:text-4xl text font-bold">Our services</h1>
                <h2 className="text__green text-xl px-8 md:px-32 lg:px-36 xl:px-72 text-center">
                    The Equilibra Therapy Project as an Integral Physical Medicine comes from the 
                    success acquired through years of physical treatments with different patients 
                    with the most variety pathologies
                </h2>

                {   ///////////////////----------------Slider if small screen --------- ////////////////////////
                    windowWidth >= 1280 ?

                    <div className="flex flex-wrap w-full px-8 xl:px-0 gap-10 justify-center items-center">
                        <img className="w-96 h-64 rounded-3xl shadow-slate-800 shadow-2xl" src={massage} alt="Sports massage" />
                        <img className="w-96 h-64 rounded-3xl shadow-slate-800 shadow-2xl" src={acupuncture} alt="Acupunture" />
                        <img className="w-96 h-64 rounded-3xl shadow-slate-800 shadow-2xl" src={chiropractic} alt="Chiropractic technic" />
                    </div> :

                    <div className="flex flex-wrap w-full px-8 gap-10 justify-center items-center">
                        <img className="w-96 h-64 rounded-3xl shadow-slate-800 shadow-2xl" src={acupuncture} alt="Acupuncture" />
                    </div>

                }
                <Link to="/services"><button className="btn__main bg__red text-center text-white rounded w-32 h-10 text-base" >Explore more</button></Link>
            </div>
            <div className="flex flex-col items-center justify-center">
                <HiArrowLongDown onClick={props.scrollDown} className="text__green text-6xl cursor-pointer" />
                <div onClick={props.scrollDown} className="text__green h-16 font-bold cursor-pointer">Scroll down</div>
            </div>

        </div>
    )
}

export default forwardRef(Services)