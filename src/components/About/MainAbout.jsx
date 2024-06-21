import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import doctor from "../../assets/doctor.jpg";
import { BiRun } from "react-icons/bi";
import {
  GiMuscleUp,
  GiMeditation,
  GiHealing,
  GiSkeleton,
} from "react-icons/gi";
import { TbMassage, TbPhysotherapist } from "react-icons/tb";
import { FaNutritionix } from "react-icons/fa";

export default function MainAbout() {
  const solutions = [
    {
      title: "Sports Medicine",
      icon: TbPhysotherapist,
    },
    {
      title: "Osteopathic",
      icon: GiSkeleton,
    },
    {
      title: "Fitness",
      icon: BiRun,
    },

    {
      title: "Meditation",
      icon: GiMeditation,
    },
    {
      title: "Nutrition",
      icon: FaNutritionix,
    },
    {
      title: "Sport\n Massage",
      icon: TbMassage,
    },
    {
      title: "Post-injury\n Recovery",
      icon: GiHealing,
    },
    {
      title: "Personal\n Trainer",
      icon: GiMuscleUp,
    },
  ];

  return (
    <>
      <Nav showBg={false} />

      <h1 className="text__green text-3xl lg:text-4xl font-bold pt-12 text-center">
        About me
      </h1>
      <div className="flex flex-col md:flex-row gap-7 justify-center items-center py-12 px-2 md:px-8 lg:px-16 xl:px-32">
        <img
          src={doctor}
          alt="fernando"
          className="w-52 md:w-auto md:h-96 rounded-xl shadow-slate-800 shadow-2xl"
        />

        <p className="px-6 leading-7 lg:leading-8 text-base lg:text-xl">
          Welcome to Fernando Martin Riggi Bou's Sports Medicine Practice, where
          your health and athletic performance are my top priorities. With years
          of experience in sports medicine, I specialize in injury prevention,
          treatment, and rehabilitation for athletes of all levels. Combining
          advanced techniques with personalized care, I am dedicated to helping
          you achieve your peak performance and recover swiftly from any
          setbacks. Whether you're a professional athlete or a fitness
          enthusiast, you can trust my expertise to support your journey to
          optimal health and performance. After working in many sports clubs
          such as Spartans FC, I decided to continue my professional career by
          working for myself in parallel with my clients.
        </p>
      </div>

      <div className="flex flex-col gap-12 justify-center items-center py-12">
        <h1 className="text__green text-3xl lg:text-4xl font-bold">
          Solutions
        </h1>

        <div className="flex flex-row flex-wrap justify-around items-center gap-10 px-6 lg:px-32 xl:w-4/6">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 items-center justify-center w-32 lg:w-40 h-32 lg:h-40"
            >
              <div className="bg__red flex justify-center items-center rounded-full w-16 lg:w-24 h-16 lg:h-24 hover:opacity-80">
                <solution.icon className="text-white text-3xl lg:text-4xl " />
              </div>

              <pre>
                <div className="text-base text-center">{solution.title}</div>
              </pre>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
