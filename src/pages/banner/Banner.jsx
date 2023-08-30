import React from 'react';
import Typewriter from 'typewriter-effect';
import myImg from '../../assets/images/amarPoto.png'
import Bounce from 'react-reveal/Bounce';

const Banner = () => {
    return (
        <div className='pt-10'>
            <div className='md:flex gap-12 h-1/2 mt-9 pb-4'>
                <div className='w-1/3 mx-auto'>
                    <img className=' md:h-[400px] rounded-full border-t-8 border-[#ffde29] md:rounded-3xl md:border-l-8 md:border-[#ffde29]' src={myImg} alt="" />
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
                    <p className='mt-2 text-lg text-justify w-full mx-auto'>Hello dear, I am MERN stack developer for any region. All types of project done in remotely. You can hire me from your place for my stack related project. Maybe I can learn  important information or knowledge to complete your project.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;