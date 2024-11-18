import React from 'react';

interface BoxGameProps {
  nome: string;
  desconto: number; 
  preco: number; 
}

const BoxGame: React.FC<BoxGameProps> = ({ nome, desconto, preco }) => {
  return (
    <div
      className="w-56 h-50 bg-neutral-800 flex flex-col items-center justify-center text-white p-4 rounded-lg gap-2"
    >
      <h1 className="text-lg font-bold">{nome}</h1>
      <div className="flex gap-2">
        <h2 className="bg-palette-red-light text-white text-md rounded-md">- {desconto}%</h2>
        <h2 className="text-md">Preço: R${preco}</h2>
      </div>
      <button className='bg-green-800 w-full rounded-md'>Botao</button>
    </div>
  );
};

export default BoxGame;
