import React from 'react';
import PortNav from '../portNav/PortNav';
import Projects from '../projects/Projects';
import Footer from '../Footer/Footer';

const AllProjects = () => {
    return (
        <div>
            <div className='text-center'>
                <PortNav></PortNav>
                <Projects></Projects>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AllProjects;