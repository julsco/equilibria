import React from "react";
import "./services.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import SportMassage from "../../assets/sport-massage.jpg";
import SwedishMassage from "../../assets/swedish-massage.jpg";
import HotStone from "../../assets/hot-stone.jpg";
import TokSen from "../../assets/tok-sen.jpg";
import Acupuncture from "../../assets/acupuncture.jpg";
import Electroacupuncture from "../../assets/electroacupuncture.jpg";
import RehabMassage from "../../assets/rehab-massage.jpg";
import Chiropractic from "../../assets/chiropractic-technic.jpg";
import MultipleTechnic from "../../assets/multiple-technic.jpg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export default function MainServices () {

    const myServices = [
        {
            name: "Sports Massage",
            img: SportMassage,
            description: "Sports massage is proven to release and reduce tension in muscles, improve circulation and encourage the removal of waste products such as lactic acid during high intensity activity and can help to relax the body. All of this helps promote recovery and reduces the chance of muscle injury.",
            price: "1 hour: £45\n1 ½ hour: £65\n2 hours: £85"
        },
        {
            name: "Swedish Massage",
            img: SwedishMassage,
            description: "Swedish massage involves long, kneading strokes combined with rhythmic tapping strokes and movement of the joints. This type of massage targets the uppermost layer of muscles and aims to relieve muscle tension.",
            price: "½ hour: £30\n1 hour: £60"
        },
        {
            name: "Tok Sen Massage",
            img: TokSen,
            description: "Tok Sen massage is an ancient northern Thai practice that involves the use of a special wooden hammer , made from the bark of the tamarind tree, to relax muscles in a rhythmically tapping motion, 'Tok Sen'. Tok means to hammer or hit and sen refers to the pathways in the body.",
            price: "½ hour: £30"
        },
        {
            name: "Hot Stone Massage",
            img: HotStone,
            description: "Studies show that a hot stone massage may be a helpful way to reduce stress and anxiety, promote relaxation, and ease pain and muscle tension. It may be helpful for a variety of conditions and circumstances.",
            price: "½ hour: £30\n1 hour: £60"
        },
        {
            name: "Acupuncture",
            img: Acupuncture,
            description: "Acupuncture points are believed to stimulate the central nervous system. This, in turn, releases chemicals into the muscles, spinal cord, and brain. These biochemical changes may stimulate the body's natural healing abilities and promote physical and emotional well-being.",
            price: "40 minutes: £45"
        },
        {
            name: "Electro-Acupuncture",
            img: Electroacupuncture,
            description: "Electroacupuncture is a modified form that uses two needles. A mild electric current passes between these needles during treatment. With electro-acupuncture, it circulates the bloodstream for longer and it provides a longer period of time for pain relief when compared to acupuncture.",
            price: "40 minutes: £50"
        },
        {
            name: "Rehabilitation Massage",
            img: RehabMassage,
            description: "Studies indicate that massage therapy has a variety of benefits for helping people recover from surgeries, including: Aiding in the re-alignment of muscles and joints, Helping regain full range of motion without discomfort, Reducing inflammation and scar tissue, along with others.",
            price: "1 hour: £45\n1 ½ hour: £65\n2 hours: £85"
        },
        {
            name: "Chiropractic Techniques",
            img: Chiropractic,
            description: "Chiropractic adjustments are a natural, drug-free approach to helping patients alleviate pain and gain more mobility. When the spine is properly aligned, the nervous system works correctly and strain on the back and neck is significant reduced. Chiropractic adjustments are very effective at restoring joint function and mobility, which leads to increased range of motion and reduced pain.",
            price: "£50 Each Treatment"
        },
        {
            name: "Multiple Techniques Treatment",
            img: MultipleTechnic,
            description: "This multiple technique treatment includes all necessary techniques into the sessions.",
            price: "1 hour: £60\n1 ½ hour: £80\n2 hours: £95"
        }
        
    ]

    return (
        <>
            <Nav showBg={false}/>
            <div className="flex flex-col py-5 gap-4">
                <h1 className="text__green font-bold text-center text-3xl">Services</h1>
                <p className="text-left px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sapiente, ab adipisci voluptates distinctio nam possimus ipsam saepe eaque non vitae temporibus ullam? Facilis in, nesciunt aspernatur incidunt possimus neque, sunt quo tempora quis at illo ipsum animi dolorem totam magnam reprehenderit maxime, modi velit perferendis nisi repellendus soluta accusamus?</p>
                <ul className="flex flex-col gap-10 items-center justify-center px-10">
                    {myServices.map((service, i) => (
                        <li key={i} className="flex flex-col gap-4">
                            <h2 className="text__red font-bold text-xl">{service.name}</h2>
                            <img src={service.img} alt="massage" className="w-auto h-56" />
                            <p>{service.description}</p>

                        </li>
                    ))}
                </ul>
                <h1 className="text__green font-bold text-center text-3xl">Price List</h1>
                <div className="px-6">
                    <table className="pricelist border-collapse border-solid" >
                        <tbody>
                            {myServices.map((service, i) => (
                                <tr key={i} className="border-2">
                                    <td>{service.name}</td>
                                    <td><pre>{service.price}</pre></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
            
            
        </>
    )
}