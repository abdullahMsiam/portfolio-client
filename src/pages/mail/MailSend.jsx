import React, { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import emailjs from '@emailjs/browser';

const MailSend = () => {

    const form = useRef();

    const sendEmail = event => {
        event.preventDefault();

        emailjs.sendForm('service_0nqoow2', 'template_5vqlv6o', form.current, 'C5mPzOwWYllLsjUcl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <div className='text-center text-[#ffde29] mt-3 text-4xl mb-10'>
                <Typewriter
                    options={{
                        strings: ['| |'],
                        autoStart: true,
                        pauseFor: (700),
                        loop: (true),
                        cursor: ('')
                    }}
                />
                <br />
                <Typewriter
                    options={{
                        strings: ['| |'],
                        autoStart: true,
                        pauseFor: (500),
                        loop: (true),
                        cursor: ('')
                    }}
                />
            </div>

            <h1 className='text-center text-3xl md:text-5xl font-bold mb-4'>--- Get Me ---</h1>

            <div className=' mx-auto'>
                <div className="hero bg-neutral-800 rounded-lg transition duration-500 hover:bg-neutral-900 ">
                    <div className="hero-content flex-col p-0 md:p-5 lg:flex-row w-11/12 md:w-full">
                        <div className="text-center lg:text-left">
                            <div className='hidden md:block'>
                                <h1 className="text-5xl font-bold">connect With Me...</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-11/12 md:w-1/2  bg-neutral-900">
                            <div className="card-body p-5">
                                {/* form */}
                                <form ref={form} onSubmit={sendEmail} className='text-black'>
                                    <div className="form-control">
                                        <label className="label ">
                                            <span className="label-text text-white font-bold text-2xl">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" name='userName' className="input rounded-full bg-neutral-800 text-white focus:border-white" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-bold text-2xl mt-2">Email</span>
                                        </label>
                                        <input type="email" placeholder="Email" name='email' className="input rounded-full bg-neutral-800 text-white focus:border-white" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-bold text-2xl mt-2">Message</span>
                                        </label>
                                        <textarea type="text" placeholder="Message" name='message' className="textarea-lg border-0 focus:border-0 rounded-xl bg-neutral-800 text-white" required />
                                    </div>
                                    <div className="form-control mt-6 ">
                                        <input type="submit" className="btn text-xs border-[#ffde29] duration-500 hover:bg-[#ffde29] hover:text-black hover:scale-105 focus:scale-95 rounded-full bg-neutral-900 text-white w-full" value="--Send Message--" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MailSend;