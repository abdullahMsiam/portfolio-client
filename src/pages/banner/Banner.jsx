import React from 'react';
import Typewriter from 'typewriter-effect';
import myImg from '../../assets/images/think-final-ps.jpg'
import Bounce from 'react-reveal/Bounce';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='pt-10 max-w-6xl mx-auto'>
            <div className='md:flex flex-row-reverse gap-12 h-1/2 mt-9 pb-4'>
                <div className='w-1/3 mx-auto'>
                    <Bounce>
                        <img className=' md:h-[400px] rounded-full border-t-4 border-[#ffde29] md:rounded-3xl md:border-r-4 md:border-[#ffde29]' src={myImg} alt="" />
                    </Bounce>
                </div>
                <div className='my-auto w-11/12 md:w-4/5 mx-auto'>
                    <Bounce left cascade>
                        <h1 className='text-2xl md:text-6xl font-normal md:font-bold text-[#ffde29]'>
                            Abdullah Muhammad Siam
                        </h1>
                    </Bounce>
                    <h1 className='text-xl md:text-4xl font-bold mt-2 flex'> <span className='text-[#ffde29] '>--</span> <span className='inline'>
                        <Typewriter
                            options={{
                                strings: ['React Developer', 'NodeJS Developer', 'Web Developer'],
                                autoStart: true,
                                pauseFor: (500),
                                loop: (true),
                                cursor: ('')
                            }}
                        />
                    </span> </h1>
                    <p className='mt-2 text-lg text-justify w-full mx-auto'>Hello, I am a web developer available to work from any location. I have the skills to complete various types of projects remotely. Whether you're looking for someone to handle a project related to the MERN stack, you can confidently hire me. I am also open to learning any necessary information or acquiring the knowledge to collaborate effectively with you.</p>

                    <div className=' mt-4'>
                        <h1 className='text-2xl font-semibold w-full text-amber-300 mb-2'>Find me from</h1>
                        <Bounce bottom cascade>
                            <div className="grid w-1/3 grid-flow-col gap-4 text-xl">
                                <div className='btn btn-circle bg-neutral-800 text-white duration-500 hover:scale-110 hover:bg-amber-400'>
                                    <Link to="https://www.linkedin.com/in/abdullahms055"><FaLinkedinIn></FaLinkedinIn></Link>
                                </div>
                                <div className='btn btn-circle bg-neutral-800 text-white duration-500 hover:scale-110 hover:bg-amber-400'>
                                    <Link to="https://github.com/abdullahMsiam"><FaGithub></FaGithub> </Link>
                                </div>

                                <div className='btn btn-circle bg-neutral-800 text-white duration-500 hover:scale-110 hover:bg-amber-400'>
                                    <a href="https://www.instagram.com/abdullah_muhammad_siam"><FaInstagram></FaInstagram></a>
                                </div>
                                <div className='btn btn-circle bg-neutral-800 text-white duration-500 hover:scale-110 hover:bg-amber-400'>
                                    <a href="https://web.facebook.com/abdullah.muhammadsiam.7"><FaFacebook></FaFacebook></a>
                                </div>
                            </div>
                        </Bounce>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;