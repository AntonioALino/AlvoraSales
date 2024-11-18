import React from "react";
import Logo from '../assets/logo.svg';
import Insta from '../assets/insta.svg';
import Youtube from '../assets/youtube.svg';
import X from '../assets/x.svg'

const Footer: React.FC = () => {
    return (

        <div className='
        bg-palette-black 
        w-full h-24 px-20
        text-base
        text-white
        gap-5
        flex flex-col justify-center items-center'>
            <div className="
            flex items-center gap-2 text-lg">
                <div className="
                    w-8">
                        <img src={Logo} alt="Logo da Alvora, consiste de um (A) estilizado onde sua linha não possui fim"/>
                </div>
                <h1>Alvora</h1>
            </div>
            <div className="
            flex gap-5">
                <a target="_blank" href='https://www.instagram.com/'>
                    <img src={Insta}
                    className="
                    hover:opacity-70"/>
                </a>
                <a target="_blank" href='https://www.youtube.com/'>
                    <img src={Youtube}
                    className="
                    hover:opacity-70"/>
                </a>
                <a target="_blank" href='https://www.x.com/'>
                    <img src={X}
                    className="
                    hover:opacity-70"/>
                </a>
            </div>
        </div>

    );
}

export default Footer;