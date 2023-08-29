import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const AboutMe = () => {
    return (
        <div className='pb-4'>
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
            <h1 className='text-center text-4xl md:text-5xl font-bold'>---About Me---</h1>

            <div className='grid md:grid-cols-2 my-auto gap-3 mt-6 content-center'>
                <div className='w-11/12 md:w-full'>
                    <h1 className='text-3xl font-bold ms-2'>Personal Information </h1>
                    <div className='mt-2 md:flex gap-2 w-full ms-5 md:ms-0 md:text-start '>
                        <div>
                            <h2> <span className='font-bold opacity-50'>First Name:</span> <span className='font-bold ms-1'>Abdullah</span> </h2>
                            <h2> <span className='font-bold opacity-50'>Availability:</span> <span className='font-bold ms-1'>Remote</span> </h2>
                            <h2> <span className='font-bold opacity-50'>Contact:</span> <span className='font-bold ms-1'>+880234-234567</span> </h2>
                            <h2> <span className='font-bold opacity-50'>Email:</span> <span className='font-bold ms-1'>abdullahmuhammadsiam@gmail.com</span> </h2>
                        </div>
                        <div>
                            <h2> <span className='font-bold opacity-50 hidden md:inline'>Last Name:</span> <span className='font-bold ms-1 hidden md:inline' >Muhammad Siam</span> </h2>
                            <h2> <span className='font-bold opacity-50'>Nationality:</span> <span className='font-bold ms-1'>Bangladeshi</span> </h2>
                            {/* <h2> <span className='font-bold opacity-50'>Contact:</span> <span className='font-bold ms-1'>+880234-234567</span> </h2> */}
                            <h2> <span className='font-bold opacity-50'>Language:</span> <span className='font-bold ms-1'>English, Bangla</span> </h2>
                        </div>
                    </div>
                    <Link to="https://drive.google.com/file/d/1QQIDUDacpVtKgD4IdudYkf4Q35NWpijY/view?usp=drive_link">
                        <button className='mt-6 text-xs mb-5 btn border-[#ffde29] bg-neutral-900 hover:bg-[#ffde29] hover:text-black rounded-full text-white w-full'>--Download CV--</button>
                    </Link>
                </div>
                <div className='grid grid-cols-2 w-full gap-4 mx-auto my-auto'>
                    <div className='border p-3 py-8 w-11/12 rounded-md hover:bg-[#ffde29] hover:text-black pe-9 border-[#ffde29]'>
                        <h1 className='text-2xl font-bold'>ReactJS</h1>
                        <h2 className='font-bold ms-2'>-- Expertise</h2>
                    </div>
                    <div className='border p-3 py-8 w-11/12 rounded-md hover:bg-[#ffde29] hover:text-black pe-9 border-[#ffde29]'>
                        <h1 className='text-2xl font-bold'>MongoDB</h1>
                        <h2 className='font-bold ms-2'>-- Familiar</h2>
                    </div>
                    <div className='border p-3 py-8 w-11/12 rounded-md hover:bg-[#ffde29] hover:text-black pe-9 border-[#ffde29]'>
                        <h1 className='text-2xl font-bold'>Router</h1>
                        <h2 className='font-bold ms-2'>-- Familiar</h2>
                    </div>
                    <div className='border p-3 py-8 w-11/12 rounded-md hover:bg-[#ffde29] hover:text-black pe-9 border-[#ffde29]'>
                        <h1 className='text-2xl font-bold'>Tailwind</h1>
                        <h2 className='font-bold ms-2'>-- Expertise</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;