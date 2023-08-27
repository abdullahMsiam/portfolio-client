import React from 'react';
import myImg from '../../assets/images/amarPoto.png'

const Banner = () => {
    return (
        <div>
            <div className='flex gap-12 h-1/2 mt-9 pb-4'>
                <div className='w-1/3'>
                    <img className='h-[400px] rounded-3xl border-l-8 border-[#ffde29]' src={myImg} alt="" />
                </div>
                <div className='my-auto'>
                    <h1 className='text-6xl font-bold text-[#ffde29]'>Abdullah Muhammad Siam</h1>
                    <h1 className='text-4xl font-bold mt-2'> <span className='text-[#ffde29]'>--</span> <span className='hover:text-red-700'>Web Developer</span> </h1>
                    <p className='mt-2 text-lg text-justify'>Hello dear, <br /> I am MERN stack developer for any region. All types of project done in <br /> remotely. You can hire me from your place for my stack related project. Maybe I can learn <br /> important information or knowledge to complete your project.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;