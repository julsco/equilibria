import React, { forwardRef } from "react";
import "./about.css";
import doctor from "../../assets/doctor.jpg";
import { HiArrowLongDown } from "react-icons/hi2";

function About(props, ref) {

    return (
        <div ref={ref} className="about__section flex flex-col gap-9 items-center justify-center pt-10 w-full bg-white">
            
            <div className="about__wrapper relative bg-transparent w-3/5 h-3/4">

                <img className="h-auto w-96 absolute left-20 rounded-3xl" src={doctor} alt="doctor" />

                <div className="inner__about h-full">
                    <div className="title flex items-center justify-end pr-24 bg-transparent w-full h-2/6">
                        <h1 className="text__red text-center font-bold relative text-5xl" >The Equilibra Project</h1>
                    </div>
                    <div className="text__about bg__green w-full h-4/6 rounded-3xl flex">
                        <div className="empty__div w-1/2"></div>
                        <div className="text__btn flex flex-col w-1/2 items-center justify-center gap-8">
                            <div className="description__about text-white text-3xl text-left pr-6 leading-normal">
                                Fernando Martin Riggi Bou is a Sports Therapist working in the Sport Industry as an Instructor, 
                                Coach, Nutritionist, Personal Trainer, and Rehabilitation Therapist.
                            </div>
                            <button className="btn__main bg__red text-center text-white rounded w-36 h-14 text-base" >Explore more</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-col items-center justify-center h-1/4">
                <HiArrowLongDown onClick={props.scrollDown} className="text__green text-8xl cursor-pointer" />
                <div onClick={props.scrollDown} className="text__green h-16 text-xl font-bold cursor-pointer">Scroll down</div>
            </div>
            
            
        </div>
    )
}

export default forwardRef(About)