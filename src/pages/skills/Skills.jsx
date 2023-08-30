import React from 'react';
import reactImg from '../../assets/images/reactjs.png'
import mongoImg from '../../assets/images/mongo.png'
import expressImg from '../../assets/images/express.png'
import nodeImg from '../../assets/images/nodejs.jpg'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Bounce from 'react-reveal/Bounce';

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
            <div>
                <Bounce left cascade>
                    <h1 className='text-center text-3xl md:text-5xl font-bold'>--- My Zone ---</h1>
                </Bounce>
            </div>
            <div>
                <Bounce right cascade>
                    <div className='grid md:grid-cols-2 justify-items-center gap-5 w-3/4 mx-auto mt-9'>
                        <div className="card md:w-96 shadow-xl image-full transition duration-500 transform  hover:scale-105">
                            <figure><img src={reactImg} alt="Shoes" /></figure>
                            <div className="card-body hover:bg-neutral-700 hover:bg-opacity-20 hover:rounded-xl">
                                <h2 className="card-title">ReactJs</h2>
                                <p>I am confident with ReactJs</p>
                            </div>
                        </div>
                        <div className="card md:w-96 bg-neutral-800   shadow-xl image-full transition duration-500 transform  hover:scale-105">
                            <figure><img src={mongoImg} alt="Shoes" /></figure>
                            <div className="card-body hover:bg-neutral-700 hover:bg-opacity-20 hover:rounded-xl">
                                <h2 className="card-title">MongoDB</h2>
                                <p>I am confident with MongoDB</p>
                            </div>
                        </div>
                        <div className="card md:w-96 bg-neutral-800   shadow-xl image-full transition duration-500 transform  hover:scale-105">
                            <figure><img src={expressImg} alt="Shoes" /></figure>
                            <div className="card-body hover:bg-neutral-700 hover:bg-opacity-20 hover:rounded-xl">
                                <h2 className="card-title">Express</h2>
                                <p>I am confident with Express!</p>
                            </div>
                        </div>
                        <div className="card md:w-96 bg-neutral-800   shadow-xl image-full transition duration-500 transform  hover:scale-105">
                            <figure><img src={nodeImg} alt="Shoes" /></figure>
                            <div className="card-body hover:bg-neutral-700 hover:bg-opacity-20 hover:rounded-xl">
                                <h2 className="card-title">NodeJs</h2>
                                <p>I am confident with NodeJs</p>
                            </div>
                        </div>
                    </div>
                </Bounce>
            </div>

        </div>
    );
};

export default Skills;