import React from 'react';
import Banner from '../../components/banner';
import BoxJogo from '../../components/boxGame'

const Home: React.FC = () => {
    return (
        <div className='w-full h-full bg-black'>
            <Banner />
            <BoxJogo nome='Jogo' desconto='60' preco='120'/>
        </div>
        

    );
}

export default Home;