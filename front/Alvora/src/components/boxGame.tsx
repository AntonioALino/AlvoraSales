import React from 'react';
import Cart from '../assets/Cart.svg';

interface BoxGameProps {
  nome: string;
  desconto: number; 
  preco: number; 
}

const BoxGame: React.FC<BoxGameProps> = ({ nome, desconto, preco }) => {
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
      <div className='gap-5 w-full rounded-sm'>
        <button className='bg-palette-red-light w-1/2'>
          <p>Delete</p>
        </button>
        <button className='bg-yellow-600 w-1/2'>
          <p>Edit</p>
        </button>
      </div>
    </div>
  );
};

export default BoxGame;
