import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Footer = () => {
    return (
        <div>
            <div className='text-center mt-3 text-4xl mb-10 text-[#ffde29]'> <div>
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
            <div className='pb-20'>
                <footer className="footer p-10 bg-[#ffde29] text-black rounded-ee-full md:rounded-ss-full md:px-28 md:h-[180px] duration-300 hover:bg-opacity-80">
                    <div className='gap-0'>
                        <p className='text-3xl font-bold mb-0 pb-0'>Abdullah Muhammad Siam</p>
                        <p className='text-2xl font-bold mt-0 p-0'>Web Developer</p>
                        <p className='text-base font-bold'>Dhaka, Bangladesh</p>
                        <p className='text-base font-bold'>Email: abdullahmuhammadsiam99@gmail.com</p>
                    </div>
                    <div>
                        <span className=" text-2xl font-bold text-black">Social</span>
                        <p className='text-xl font-bold'>Find me from--</p>
                        <div className="grid grid-flow-col gap-5 text-xl">
                            <div className='btn btn-circle bg-neutral-800 text-white duration-500 hover:scale-110 hover:bg-neutral-800'>
                                <Link to="https://www.linkedin.com/in/abdullahms055/"><FaLinkedinIn></FaLinkedinIn></Link>
                            </div>
                            <div className='btn btn-circle bg-neutral-800 text-white duration-500 hover:scale-110 hover:bg-neutral-800'>
                                <Link to="https://github.com/abdullahMsiam"><FaGithub></FaGithub> </Link>
                            </div>

                            <div className='btn btn-circle bg-neutral-800 text-white duration-500 hover:scale-110 hover:bg-neutral-800'>
                                <Link to="https://www.linkedin.com/in/abdullahms055"><FaTwitter></FaTwitter></Link>
                            </div>

                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;