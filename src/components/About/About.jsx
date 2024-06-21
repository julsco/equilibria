import React, { forwardRef, useContext } from "react";
import "./about.css";
import doctor from "../../assets/doctor.jpg";
import { HiArrowLongDown } from "react-icons/hi2";
import { WindowWidthContext } from "../../App";
import { Link } from "react-router-dom";

function About(props, ref) {
  const windowWidth = useContext(WindowWidthContext);

  return (
    <div
      ref={ref}
      className="about__section overflow-hidden flex flex-col items-center justify-center w-full xl:px-32 bg-white pt-10"
    >
      <div className="h-7/8 flex flex-col md:flex-row items-center justify-center gap-6 md:px-10 lg:px-20">
        <img
          src={doctor}
          alt="fernando"
          className="w-52 md:w-auto md:h-96 rounded-xl shadow-slate-800 shadow-2xl"
        />

        <div className="flex flex-col gap-4 ">
          <h1 className="text__green font-bold text-2xl xl:text-3xl self-start pl-6">
            The equilibria Project
          </h1>
          <div className="text__green text-base xl:text-xl px-6">
            Welcome to Fernando Martin Riggi Bou's Sports Medicine Practice,
            where your health and athletic performance are my top priorities.
            With years of experience in sports medicine, I specialize in injury
            prevention, treatment, and rehabilitation for athletes of all
            levels. Combining advanced techniques with personalized care, I am
            dedicated to helping you achieve your peak performance and recover
            swiftly from any setbacks. Whether you're a professional athlete or
            a fitness enthusiast, you can trust my expertise to support your
            journey to optimal health and performance. After working in many
            sports clubs such as Spartans FC, I decided to continue my
            professional career by working for myself in parallel with my
            clients.
          </div>
          <div className="self-center md:self-start md:pl-6 md:pt-3">
            <Link to="/about">
              <button className="btn__main bg__red text-center text-white rounded w-32 h-10 text-base">
                Explore more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center h-1/8 pt-6 md:pt-20 xl:pt-36 lg:pt-12">
        <HiArrowLongDown
          onClick={props.scrollDown}
          className="text__green text-6xl cursor-pointer"
        />
        <div
          onClick={props.scrollDown}
          className="text__green h-16 font-bold cursor-pointer"
        >
          Scroll down
        </div>
      </div>
    </div>
  );
}

export default forwardRef(About);
