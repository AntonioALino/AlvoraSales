import React from 'react';
import Banner from '../../components/banner';
import BoxJogo from '../../components/boxGame';

const Home: React.FC = () => {
    return (
        <div className="w-full h-screen bg-zinc-950 flex flex-col items-center">
            <Banner />
            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
                <BoxJogo nome="Jogo 1" desconto="60" preco="120" />
                <BoxJogo nome="Jogo 2" desconto="50" preco="100" />
                <BoxJogo nome="Jogo 3" desconto="40" preco="80" />
                <BoxJogo nome="Jogo 4" desconto="30" preco="70" />
                <BoxJogo nome="Jogo 5" desconto="20" preco="50" />
                <BoxJogo nome="Jogo 6" desconto="10" preco="40" />
            </div>
        </div>
    );
};

export default Home;

