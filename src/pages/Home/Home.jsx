import React from 'react';
import PortNav from '../portNav/PortNav';
import Banner from '../banner/Banner';
import AboutMe from '../about/AboutMe';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import MailSend from '../mail/MailSend';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <PortNav></PortNav>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <MailSend></MailSend>
            <Footer></Footer>
        </div>
    );
};

export default Home;