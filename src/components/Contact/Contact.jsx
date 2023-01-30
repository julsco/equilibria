import React, { forwardRef, useContext } from "react";
import "./contact.css";
import skeletonContact from "../../assets/skeleton-contact.jpg";
import { WindowWidthContext } from "../../App";

function Contact(props, ref) {

    const windowWidth = useContext(WindowWidthContext);

    return (
        <div ref={ref} className="contact__section overflow-hidden flex flex-col justify-center items-center w-full bg-white">
            
            <div className="w-11/12 h-full flex flex-col md:flex-row-reverse gap-5 xl:gap-0 items-center justify-center py-5">
                
                    <div className="flex flex-col gap-1 md:gap-6 md:pb-20 px-7 sm:px-28 md:px-4 lg:px-10 xl:px-0 xl:pr-32 md:w-1/2">
                        <h1 className="text__green font-bold text-2xl xl:text-3xl">I'm here for you</h1>
                        <p className="text__green text-base xl:text-xl">Contact me today to find out the best way to overcome your injuries and pains. It's never too late regardless how long you've suffered for.</p>
                        {windowWidth >= 768 && <div className="self-center md:self-start">
                                <button className="btn__main bg__red text-center text-white rounded w-32 h-10 text-base" >Contact me</button>
                    </div>}
                    </div>
                    <div className="md:w-1/2 h-full flex items-center justify-center">
                        <img className="w-80 md:w-full lg:w-4/5 xl:w-1/2 h-auto rounded-xl shadow-slate-800 shadow-xl" src={skeletonContact} alt="skeleton-contact-picture" />
                    </div>

                    {windowWidth <768 && <div className="self-center">
                                <button className="btn__main bg__red text-center text-white rounded w-32 h-10 text-base" >Contact me</button>
                    </div>}
                
            </div>

        </div>
    )
}

export default forwardRef(Contact)