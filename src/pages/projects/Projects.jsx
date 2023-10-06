import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Bounce from 'react-reveal/Bounce';
import './style.css'
import img1 from '../../assets/web-photo/school.png'
import img2 from '../../assets/web-photo/toys.png'
import img3 from '../../assets/web-photo/chefs.png'
import { FaArrowAltCircleUp, FaRegArrowAltCircleRight } from 'react-icons/fa';


const Projects = () => {
    return (
        <div className='pb-9 mt-9'>
            <div className='text-center mt-3 text-2xl md:text-4xl mb-10 text-[#ffde29]'> <div>
                <Typewriter
                    options={{
                        strings: ['--'],
                        autoStart: true,
                        pauseFor: (600),
                        loop: (true),
                        delay: 50,
                        cursor: ('')
                    }}
                />
            </div> <div>| |</div>
                <div className='inline'>
                    <Typewriter
                        options={{
                            strings: ['--'],
                            autoStart: true,
                            pauseFor: (500),
                            loop: (true),
                            delay: 100,
                            cursor: ('')
                        }}
                    />
                </div>
            </div>
            <div className=''>
                <div>
                    <Bounce left cascade>
                        <h1 className='text-center text-3xl md:text-5xl font-bold pb-6'>--- My Projects ---</h1>
                    </Bounce>
                </div>
                <div className='bg-neutral-900 bg-opacity-50'>
                    <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-7 content-center justify-center p-3 py-8'>
                        <div className='image-wrap ms-3'>
                            <img className='rounded-lg' src={img1} alt="" />
                        </div>
                        <div>
                            <Bounce right cascade>
                                <div>
                                    <h1 className='text-4xl font-bold'>Language Learning Institute</h1>
                                </div>
                                <div>
                                    <h2 className='text-3xl mt-3 mb-1 font-bold'>Features</h2>
                                    <ol className='text-xl font-medium'>
                                        <ul> 1. Login Authentication with gmail</ul>
                                        <ul> 2. Enrolled any course saved in database.</ul>
                                        <ul> 2. Users has different dashboard.</ul>
                                        <ul> 4. Feels likes a web application.</ul>
                                    </ol>
                                    <p className='mt-2'> <span className='text-xl font-semibold'>Technology:</span> <span>ReactJS, MongoDB, Firebase, TailwindCSS, ExpressJS for Backend</span> </p>
                                </div>
                                <div className='mt-5 flex gap-3'>
                                    <div>
                                        <Link to="https://language-school-3ec51.web.app/">
                                            <button className='btn btn-outline btn-warning flex'>Live Site <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="https://github.com/abdullahMsiam/language-school-client">
                                            <button className='btn btn-outline btn-warning flex'>Github Client <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="https://github.com/abdullahMsiam/language-school-server">
                                            <button className='btn btn-outline btn-warning flex'>Github Server <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </button>
                                        </Link>
                                    </div>
                                </div>
                            </Bounce>
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-7 content-center justify-center p-3 py-8'>
                        <div className='image-wrap ms-3'>
                            <img className='rounded-lg' src={img2} alt="" />
                        </div>
                        <div>
                            <Bounce left cascade>
                                <div>
                                    <h1 className='text-4xl font-bold'>Car Toys Platform</h1>
                                </div>
                                <div>
                                    <h2 className='text-3xl mt-3 mb-1 font-bold'>Features</h2>
                                    <ol className='text-xl font-medium'>
                                        <ul> 1. Login Authentication with mail</ul>
                                        <ul> 2. User Can see their toys.</ul>
                                        <ul> 2. New toys can be added by users.</ul>
                                        <ul> 4. Feels likes a web application.</ul>
                                    </ol>
                                    <p className='mt-2'> <span className='text-xl font-semibold'>Technology:</span> <span>ReactJS, MongoDB, Firebase, TailwindCSS, ExpressJS for Backend</span> </p>
                                </div>
                                <div className='mt-5 flex gap-1 md:gap-3'>
                                    <div>
                                        <Link to="https://ams-toy.web.app/">
                                            <button className='btn btn-outline btn-warning flex'>Live Site <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="https://github.com/abdullahMsiam/ams-toy-client">
                                            <button className='btn btn-outline btn-warning flex'>Github Client <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="https://github.com/abdullahMsiam/ams-toy-server">
                                            <button className='btn btn-outline btn-warning flex'>Github Server <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </button>
                                        </Link>
                                    </div>
                                </div>
                            </Bounce>
                        </div>
                    </div>
                </div>

                <div className='bg-neutral-900 bg-opacity-50 mt-6'>
                    <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-7 content-center justify-center p-3 py-8'>
                        <div className='image-wrap ms-3'>
                            <img className='rounded-lg' src={img3} alt="" />
                        </div>
                        <div>
                            <Bounce right cascade>
                                <div>
                                    <h1 className='text-4xl font-bold'>Master Chefs Website</h1>
                                </div>
                                <div>
                                    <h2 className='text-3xl mt-3 mb-1 font-bold'>Features</h2>
                                    <ol className='text-xl font-medium'>
                                        <ul> 1. Their available master chefs from anywhere.</ul>
                                        <ul> 2. User can explore their favorite chef.</ul>
                                        <ul> 2. Chefs bio can available when user logged in.</ul>
                                        <ul> 4. Feels likes a web application.</ul>
                                    </ol>
                                    <p className='mt-2'> <span className='text-xl font-semibold'>Technology:</span> <span>ReactJS, MongoDB, Firebase, Bootstrap, ExpressJS for Backend</span> </p>
                                </div>
                                <div className='mt-5 flex gap-3'>
                                    <div>
                                        <Link to="https://chef-master-e0b16.web.app/">
                                            <button className='btn btn-outline btn-warning flex'>Live Site <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="https://github.com/abdullahMsiam/chef-master">
                                            <button className='btn btn-outline btn-warning flex'>Github Client <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="https://github.com/abdullahMsiam/chef-master-server">
                                            <button className='btn btn-outline btn-warning flex'>Github Server <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </button>
                                        </Link>
                                    </div>
                                </div>
                            </Bounce>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-6'>
                    <Link>
                        <button className='btn text-xs border-[#ffde29] duration-500 hover:bg-[#ffde29] hover:text-black hover:scale-105 focus:scale-95 rounded-full bg-neutral-900 text-white '>--More Projects--</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;