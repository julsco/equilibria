import React, { forwardRef } from "react";
import "./contact.css";

function Contact(props, ref) {

    return (
        <div ref={ref} className="contact__section flex flex-col justify-center items-center w-full bg-white">
            <h1 className="text__red text-5xl text font-bold">Contact us</h1>
        </div>
    )
}

export default forwardRef(Contact)