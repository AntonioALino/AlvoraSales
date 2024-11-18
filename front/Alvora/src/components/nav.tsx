import React from "react";
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.svg'

const Nav: React.FC = () => {
    return (

        <div className='
        bg-palette-black text-white
        w-full h-28
        px-20 py-5
        text-2xl
        flex justify-between items-center'>
            <div className="
            font-medium
            flex gap-10 items-center">
                <Link className='
                flex 
                text-4xl
                items-center'
                 to="/"> 
                    <div>
                        <img src={Logo} alt="Logo da Alvora, consiste de um (A) estilizado onde sua linha não possui fim"/>
                    </div>
                    <h1>Alvora</h1>
                </Link>
                <Link to="profile"> Perfil</Link>
            </div>
            <div className="
            flex gap-10 items-center">
                <Link to="/login"> 
                    <div className="
                    text-palette-blue-green
                    felx p-2 px-6
                    border-palette-blue-green border-4">
                        <h1>Register</h1>
                    </div>
                </Link>
                <Link to="/signup"> Signup</Link>
            </div>
        </div>

    );
}

export default Nav;