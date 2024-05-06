import React from 'react';
import './style.scss'
import HeroBanner from './heroBanner/HeroBanner';


function Home() {
    return (
        <div className='homePage'>
            <h1>Home Component</h1>
            <HeroBanner />
        </div>
    );
}

export default Home;