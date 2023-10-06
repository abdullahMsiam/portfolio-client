import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Bounce from 'react-reveal/Bounce';
import reactImg from '../../assets/images/react.png'
import bootstrapImg from '../../assets/images/bootstrap.png'
import cssImg from '../../assets/images/css.jpg'
import figmaImg from '../../assets/images/figma.png'
import githubImg from '../../assets/images/github.jpg'
import htmlImg from '../../assets/images/html5.png'
import javascriptImg from '../../assets/images/javascript.png'
import mongodbImg from '../../assets/images/mongodb.png'
import nextImg from '../../assets/images/nextjs.png'
import reduxImg from '../../assets/images/redux.png'
import tailwindImg from '../../assets/images/tailwind.png'
import nodeImg from '../../assets/images/nodejs.png'
import es6Img from '../../assets/images/es6.png'
import expressImg from '../../assets/images/express.png'
import firebaseImg from '../../assets/images/firebase.png'
import mysqlImg from '../../assets/images/mysql.png'
import reactRouterImg from '../../assets/images/reactrouter.jpg'
import vercelImg from '../../assets/images/vercel.jpg'


const Skills = () => {
    return (
        <div className='pb-8'>
            <div className='text-center mt-9 text-2xl md:text-4xl pb-10 text-[#ffde29]'>
                <Typewriter
                    options={{
                        strings: ['| |'],
                        autoStart: true,
                        pauseFor: (700),
                        loop: (true),
                        delay: 50,
                        cursor: ('')
                    }}
                />
                <br />
                <Typewriter
                    options={{
                        strings: ['| |'],
                        autoStart: true,
                        pauseFor: (500),
                        delay: 100,
                        loop: (true),
                        cursor: ('')
                    }}
                />
            </div>
            <div className='max-w-5xl mx-auto p-2'>
                <div>
                    <Bounce left cascade>
                        <h1 className='text-center text-3xl md:text-5xl font-bold'>--- My Zone ---</h1>
                    </Bounce>
                </div>
                <div className='mt-8'>
                    <Bounce bottom cascade>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black duration-500 '>
                                <img className='w-12 rounded-xl ' src={reactImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>ReactJS</span> <br /> Expertise</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={mongodbImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>MongoDB</span> <br /> Expertise</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={javascriptImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>Javascript</span> <br /> Expertise</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={nodeImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>NodeJS</span> <br /> Expertise</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={cssImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>CSS</span> <br /> Expertise</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={bootstrapImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>Bootstrap</span> <br /> Expertise</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={tailwindImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>TailwindCSS</span> <br /> Expertise</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={githubImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>Github</span> <br /> Expertise</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={figmaImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>Figma</span> <br /> Expertise</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={nextImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>NextJS</span> <br /> Familiar</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={reduxImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>Redux</span> <br /> Familiar</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={javascriptImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>Javascript</span> <br /> Expertise</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={expressImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>ExpressJS</span> <br /> Familiar</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={es6Img} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>Es6</span> <br /> Expertise</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={reactRouterImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>React Router</span> <br /> Expertise</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={mysqlImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>MySQL</span> <br /> Familiar</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={firebaseImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>Firebase</span> <br /> Expertise</p>
                            </div>
                            <div className='flex gap-1 border-2 rounded-md border-amber-400 hover:bg-amber-400 hover:text-black hover:scale-95 duration-500 '>
                                <img className='w-12 rounded-xl ' src={vercelImg} alt="" />
                                <p className='mx-auto'> <span className='font-semibold mx-auto md:text-2xl'>Vercel</span> <br /> Familiar</p>
                            </div>

                        </div>
                    </Bounce>
                </div>
            </div>

        </div>
    );
};

export default Skills;