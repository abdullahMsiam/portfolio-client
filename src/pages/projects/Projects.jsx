import React from 'react';
import img1 from '../../assets/images/language.png'
import img2 from '../../assets/images/toy.png'
import img3 from '../../assets/images/chef.png'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Bounce from 'react-reveal/Bounce';

const Projects = () => {
    return (
        <div className='pb-9 mt-9'>
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
            <div>
                <Bounce top cascade>
                    <h1 className='text-center text-3xl md:text-5xl font-bold pb-6'>---My Projects---</h1>
                </Bounce>
            </div>
            <div className='grid lg:grid-cols-3 gap-6 mx-auto'>
                <div className="card card-side w-11/12 mx-auto bg-neutral-900 bg-opacity-50 shadow-xl h-[250px] hover:bg-[#ffdf297f]  transition duration-500 hover:text-black transform  hover:scale-105 overflow-hidden">
                    <div className=''><img className='h-full rounded-lg' src={img1} alt="" /></div>
                    <div className="card-body px-2">
                        <h2 className="card-title">Language Learning Institute!</h2>
                        <p>A full MERN stack project by Abdullah M.S.</p>
                        <div className="card-actions justify-start">
                            <Link to="https://language-school-3ec51.web.app/">
                                <button className="btn btn-sm bg-neutral-800 border-[#ffde29] text-white hover:text-[#ffde29] hover:bg-neutral-900 rounded-full hover:border-[#ffde29]">Live site--</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card card-side w-11/12 mx-auto bg-neutral-900 bg-opacity-50 shadow-xl h-[250px] hover:bg-[#ffdf297f]  transition duration-500 hover:text-black transform  hover:scale-105 overflow-hidden">
                    <div className=''><img className='h-full rounded-lg' src={img2} alt="" /></div>
                    <div className="card-body px-2">
                        <h2 className="card-title">Toys Collection Site!</h2>
                        <p>A full MERN stack project by Abdullah M.S.</p>
                        <div className="card-actions justify-start">
                            <Link to="https://ams-toy.web.app/">
                                <button className=" btn btn-sm bg-neutral-800 border-[#ffde29] text-white hover:text-[#ffde29] hover:bg-neutral-900 rounded-full hover:border-[#ffde29]">Live site--</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card card-side w-11/12 mx-auto bg-neutral-900 bg-opacity-50 shadow-xl h-[250px] hover:bg-[#ffdf297f]  transition duration-500 hover:text-black transform  hover:scale-105 overflow-hidden">
                    <div className=''><img className='h-full rounded-lg' src={img3} alt="" /></div>
                    <div className="card-body px-2">
                        <h2 className="card-title">All Master chef!</h2>
                        <p>A full MERN stack project by Abdullah M.S.</p>
                        <div className="card-actions justify-start">
                            <Link to="https://chef-master-e0b16.web.app/">
                                <button className="btn btn-sm bg-neutral-800 border-[#ffde29] text-white hover:text-[#ffde29] hover:bg-neutral-900 rounded-full hover:border-[#ffde29]">Live site--</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='text-center mt-6'>
                <Link>
                    <button className='btn text-xs border-[#ffde29] duration-500 hover:bg-[#ffde29] hover:text-black hover:scale-105 focus:scale-95 rounded-full bg-neutral-900 text-white '>--More Projects--</button>
                </Link>
            </div>
        </div>
    );
};

export default Projects;