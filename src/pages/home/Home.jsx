import React from 'react';
import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';

function Home() {
    return (
        <div className='homePage' style={{ height: "8+00px" }}>
            <HeroBanner />
            <Trending />
        </div>
    );
}

export default Home;
