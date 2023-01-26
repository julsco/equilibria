import React, { forwardRef } from "react";
import "./services.css";
import acupuncture from "../../assets/acupuncture.jpg";
import massage from "../../assets/massage.jpg";
import chiropractic from "../../assets/chiropractic.jpg";
import { HiArrowLongDown } from "react-icons/hi2";

function Services(props, ref) {

    return (
        <div ref={ref} className="services__section w-full bg-white flex flex-col justify-center items-center gap-10 pt-6">
            <h1 className="text__red text-5xl text font-bold">Our services</h1>
            <h2 className="text__green text-3xl px-72 text-center">
                The Equilibra Therapy Project as an Integral Physical Medicine comes from the 
                success acquired through years of physical treatments with different patients 
                with the most variety pathologies
            </h2>

            <div className="services__imgs flex w-full px-8 gap-10 justify-center items-center">
                <img className="w-96 h-64 rounded-3xl shadow-slate-800 shadow-2xl" src={massage} alt="Sports massage" />
                <img className="w-96 h-64 rounded-3xl shadow-slate-800 shadow-2xl" src={acupuncture} alt="Acupunture" />
                <img className="w-96 h-64 rounded-3xl shadow-slate-800 shadow-2xl" src={chiropractic} alt="Chiropractic technic" />
            </div>

            <button className="btn__main bg__red text-center text-white rounded w-56 h-20 text-xl" >Explore more</button>

            <div className="flex flex-col items-center justify-center">
                <HiArrowLongDown onClick={props.scrollDown} className="text__green text-8xl cursor-pointer" />
                <div onClick={props.scrollDown} className="text__green h-16 text-xl font-bold cursor-pointer">Scroll down</div>
            </div>

        </div>
    )
}

export default forwardRef(Services)