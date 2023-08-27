import React from 'react';
import PortNav from '../portNav/PortNav';
import Banner from '../banner/Banner';
import AboutMe from '../about/AboutMe';

const Home = () => {
    return (
        <div>
            <PortNav></PortNav>
            <Banner></Banner>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;