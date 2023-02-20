import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import AboutBg from "../../assets/about-bg.jpg"
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

export default function MainContact () {

    const contact = [
        {
            icon: AiOutlineMail,
            title: "ligtyfer@gmail.com"
        },
        {
            icon: BsWhatsapp,
            title: "07417402418"
        },
        {
            icon: FiMapPin,
            title: "Muirhouse Grove\nEdinburgh\nEH4 4SS"
        }
    ]

    const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.677027144379!2d-3.2671929839417224!3d55.972298882508845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65f736c229311123%3A0x9a5f2ead0a50a7df!2sEQUILIBRA%20THERAPY!5e0!3m2!1sen!2suk!4v1676926002639!5m2!1sen!2suk" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

    return (
        <>
            <Nav showBg={false}/>
            <h1 className="text__green text-3xl lg:text-4xl font-bold pt-12 text-center">Get in touch</h1>
            <div className="flex flex-col gap-14 justify-center items-center py-12">

                <p className="px-6 md:px-16 lg:px-24 xl:px-96 text-center text-base lg:text-xl leading-7 lg:leading-8">
                    If you wish to book an appointment or consultation, please find below a list of ways you can contact me. All treatments are delivered in Edinburgh and surrounding areas to your home or in the Equilibra Therapy clinical Room.I am here to help in whatever way I can!
                </p>
                <div className="flex flex-row flex-wrap justify-around items-center gap-2 px-4">

                {contact.map((cont, i) => (
                        <div key={i} className="flex flex-col gap-3 items-center  w-36 lg:w-48 h-36 lg:h-48">
                        
                            <div className="bg__red flex justify-center items-center rounded-full w-16 lg:w-24 h-16 lg:h-24 hover:opacity-80">
                                <cont.icon className="text-white text-3xl lg:text-4xl "/>
                            </div>

                            <pre><div className="text-base text-center">{cont.title}
                            </div></pre>

                        </div>
                            ))}

                
                </div>

                
            </div>
            {/* MAP */}
            <div className="">    
                    <div dangerouslySetInnerHTML={ {__html:  iframe?iframe:""}} />
            </div>
            <Footer />
            
        </>
    )
}