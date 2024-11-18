import React from 'react';
import Logo from '../assets/logo.svg'

const Banner: React.FC = () => {
    return (

        <div className='
        p-10 gap-5 
        flex flex-col
        items-center
        text-white'>
            <div className="
            w-10">
                <img src={Logo} alt="Logo da Alvora, consiste de um (A) estilizado onde sua linha não possui fim"/>
            </div>
            <div className='flex flex-col gap-2 items-center '>
                <h1 className='
                font-medium text-lg'>Alvora dos Descontos</h1>
                <h2 className='
                font-light'>Confira os descontos atuais dos jogos mais procurados</h2>
            </div>
        </div>

    );
}

export default Banner;