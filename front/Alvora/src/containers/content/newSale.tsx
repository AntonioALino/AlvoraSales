import React from 'react';
import Form from "../../components/Forms/forms"

const NewSale: React.FC = () => {
    return (
        <div className='w-full h-screen bg-zinc-950 flex items-center justify-center'>
            <div className='w-1/2 bg-palette-black p-8 rounded-lg'><Form /></div>
        </div>
    );
}

export default NewSale;