import React from 'react';
import {Link} from 'react-router-dom';
import Cart from '../assets/Cart.svg';

interface BoxGameProps {
  nome: string;
  desconto: number; 
  preco: number; 
}

const BoxGame: React.FC<BoxGameProps> = ({ nome, desconto, preco }) => {
  const handleDelete = async () => {
    try {
        const response = await fetch('http://localhost:3000/alvora/game/edit', {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log('Recurso deletado com sucesso');
        } else {
            console.error('Erro ao deletar:', response.statusText);
        }
    } catch (error) {
        console.error('Erro de rede:', error);
    }
};

  return (
    <div
      className="w-80 h-52 bg-neutral-800 flex flex-col items-center justify-between text-white p-4 rounded-lg py-10"
    >
      <h1 className="text-lg font-bold overflow-hidden">{nome}</h1>
      <div className="flex gap-4">
        <h2 className="bg-palette-red-light text-white text-md rounded-md">- {desconto}%</h2>
        <h2 className="text-md">Preço: R${preco}</h2>
      </div>
      <button className='bg-palette-blue-green w-full rounded-sm flex gap-5 items-center justify-center'>
        <p>Comprar</p>
        <img src={Cart} />
      </button>
      <div className='gap-5 w-full rounded-sm flex'>
        <button 
            onClick={handleDelete} 
            className="bg-palette-red-light w-full py-2 text-white rounded-md hover:bg-palette-red-dark"
        >
            <p>Delete</p>
        </button>
        <Link to='/edit' className='w-full h-full' >
          <div className=' flex bg-yellow-600 h-full py-2 rounded-md items-center justify-center'>
            <p>Edit</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BoxGame;
