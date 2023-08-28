import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className='pb-4'>
            <p className='text-center mt-3 text-4xl mb-10'>- - | |  - -</p>
            <h1 className='text-center text-5xl font-bold'>ABOUT ME</h1>

            <div className='grid md:grid-cols-2 my-auto gap-2 mt-6'>
                <div className='w-11/12 md:w-full'>
                    <h1 className='text-3xl font-bold'>Personal Information </h1>
                    <div className='mt-2 md:flex gap-2 w-full ms-5 md:ms-0 md:text-start'>
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
                        <button className='mt-6 mb-5 btn btn-outline bg-neutral-800 hover:bg-[#ffde29] hover:text-black rounded-full text-white'>--Download CV--</button>
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