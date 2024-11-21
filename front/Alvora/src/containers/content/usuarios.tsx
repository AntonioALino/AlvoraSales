import React, { useState } from "react";
import Users from "../../components/Forms/usuarios"


const NewSale: React.FC = () => {
    return (
        <div className='w-full h-screen bg-zinc-950 flex items-center justify-center'>
            <div className='w-1/2 bg-palette-black p-8 rounded-lg'><Users /></div>
        </div>
    );
}

export default NewSale;