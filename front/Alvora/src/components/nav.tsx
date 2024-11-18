import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.svg';
import Add from '../assets/plus-circle.svg'

const Nav: React.FC = () => {
    return (

        <div className='
        bg-palette-black text-white
        w-full h-20
        px-20
        text-lg
        flex justify-between items-center'>
            <div className="
            flex gap-10
            font-medium
            items-center">
                <Link className='
                flex gap-3
                text-3xl'
                 to="/"> 
                    <div className="
                    w-10">
                        <img src={Logo} alt="Logo da Alvora, consiste de um (A) estilizado onde sua linha não possui fim"/>
                    </div>
                    <h1>Alvora</h1>
                </Link>
                <Link to='/new_sale'>
                    <div className="
                    flex gap-3 items-center">
                        <img className="h-5" src={Add} alt='icone de adicionar'></img>
                        <h1>Adicionar Desconto</h1>
                    </div>
                </Link>
            </div>
            <div className="
            flex gap-10 items-center">
                <Link to="/signup"> 
                    <div className="
                    text-palette-blue-green
                    felx p-1.5 px-6
                    border-palette-blue-green border-2
                    rounded-md
                    font-normal">
                        <h1>Cadastrar</h1>
                    </div>
                </Link>
                <Link to="/login"> 
                    <div className="
                    bg-palette-blue-green
                    text-white
                    rounded-md
                    p-1.5 px-6
                    font-normal">
                        <h1>Login</h1>
                    </div>
                </Link>
            </div>
        </div>

    );
}

export default Nav;