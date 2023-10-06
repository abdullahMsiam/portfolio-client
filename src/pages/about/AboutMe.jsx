import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Bounce from 'react-reveal/Bounce';
import img1 from '../../assets/images/amarPoto.png'

const AboutMe = () => {
    return (
        <div className='pb-4'>
            <div className='text-center mt-3 text-2xl  md:text-4xl mb-10 text-[#ffde29]'> <div>
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

            <div className='bg-neutral-900 bg-opacity-50  mx-auto md:pt-10 md:pb-20 mt-3'>
                <div>
                    <Bounce left cascade>
                        <h1 className='text-center text-4xl md:text-5xl font-bold'>--- About Me ---</h1>
                    </Bounce>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 my-auto gap-3 mt-8 justify-items-center content-center max-w-6xl mx-auto'>
                    <div>
                        <Bounce left cascade>
                            <img className='h-72 rounded-xl border-amber-400 border-t-4 border-l-4 ' src={img1} alt="" />
                        </Bounce>
                    </div>
                    <div className='w-11/12 md:w-full mx-auto md:col-span-2'>
                        <h1 className='text-2xl md:text-3xl font-bold md:ms-2'>Personal Information </h1>
                        <div className='mt-6 md:flex gap-2 w-11/12 md:w-full md:ms-3 md:text-start '>
                            <div>
                                <h2 className='mb-1'> <span className='font-bold opacity-50'>First Name:</span> <span className='font-bold ms-1'>Abdullah</span> </h2>
                                <h2 className='mb-1'> <span className='font-bold opacity-50'>Availability:</span> <span className='font-bold ms-1'>Remote</span> </h2>
                                <h2 className='mb-1'> <span className='font-bold opacity-50'>Contact:</span> <span className='font-bold ms-1'>+8801637271447</span> </h2>
                                <h2 className='mb-1'> <span className='font-bold opacity-50'>Email:</span> <span className='font-bold md:ms-1'>abdullahmuhammadsiam99@gmail.com</span> </h2>
                            </div>
                            <div>
                                <h2 className='mb-1'> <span className='font-bold opacity-50 hidden md:inline'>Last Name:</span> <span className='font-bold ms-1 hidden md:inline' >Muhammad Siam</span> </h2>
                                <h2 className='mb-1'> <span className='font-bold opacity-50'>Nationality:</span> <span className='font-bold ms-1'>Bangladeshi</span> </h2>
                                <h2 className='mb-1'> <span className='font-bold opacity-50'>Address:</span> <span className='font-bold ms-1'>Dhaka, Bangladesh</span> </h2>
                                <h2 className='mb-1'> <span className='font-bold opacity-50'>Language:</span> <span className='font-bold ms-1'>English, Bangla</span> </h2>
                            </div>
                        </div>
                        <div className='md:flex content-center mt-10'>
                            <div>
                                <Link to="https://drive.google.com/file/d/1QQIDUDacpVtKgD4IdudYkf4Q35NWpijY/view?usp=drive_link">
                                    <button className=' me-4 text-xs mb-5 btn w-48 md:w-72 border-[#ffde29] bg-neutral-900 duration-500 hover:scale-95 hover:bg-[#ffde29] hover:text-black rounded-full text-white'>--Download CV--</button>
                                </Link>
                            </div>
                            <div className='text-center mx-8 my-3'>
                                <p>Or</p>
                            </div>
                            <div>
                                <Link to="https://drive.google.com/file/d/1YS2FpBApDYm7bMGaMtRyecZnLaMon0Cf/view?usp=drive_link">
                                    <button className=' me-4 ms-1 text-xs mb-5 w-48 md:w-72 btn border-[#ffde29] bg-neutral-900 duration-500 hover:scale-95 hover:bg-[#ffde29] hover:text-black rounded-full text-white '>--Download Resume--</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className='grid grid-cols-2 w-11/12 md:w-full gap-4 mx-auto justify-items-center'>
                        <div className='border p-3 py-8 w-11/12 rounded-md hover:bg-[#ffde29] hover:text-black pe-9 border-[#ffde29]'>
                            <h1 className='text-xl md:text-2xl font-bold'>ReactJS</h1>
                            <h2 className='md:font-bold md:ms-2'>-- Expertise</h2>
                        </div>
                        <div className='border p-3 py-8 w-11/12 rounded-md hover:bg-[#ffde29] hover:text-black pe-9 border-[#ffde29]'>
                            <h1 className='text-xl md:text-2xl font-bold'>MongoDB</h1>
                            <h2 className='md:font-bold md:ms-2'>-- Familiar</h2>
                        </div>
                        <div className='border p-3 py-8 w-11/12 rounded-md hover:bg-[#ffde29] hover:text-black pe-9 border-[#ffde29]'>
                            <h1 className='text-xl md:text-2xl font-bold'>Router</h1>
                            <h2 className='md:font-bold md:ms-2'>-- Familiar</h2>
                        </div>
                        <div className='border p-3 py-8 w-11/12 rounded-md hover:bg-[#ffde29] hover:text-black pe-9 border-[#ffde29]'>
                            <h1 className='text-xl md:text-2xl font-bold'>Tailwind</h1>
                            <h2 className='md:font-bold md:ms-2'>-- Expertise</h2>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;