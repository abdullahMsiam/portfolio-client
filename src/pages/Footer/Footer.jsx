import React from 'react';

const Footer = () => {
    return (
        <div>
            <p className='text-center mt-3 text-4xl mb-14 text-[#ffde29]'>- - | | - -</p>
            <div className='pb-8'>
                <footer className="footer p-10 bg-[#ffde29] text-black rounded-ee-full rounded-ss-full px-28 md:h-[180px] hover:bg-opacity-80">
                    <div className='gap-0'>
                        <p className='text-3xl font-bold mb-0 pb-0'>Abdullah Muhammad Siam</p>
                        <p className='text-2xl font-bold mt-0 p-0'>Web Developer</p>
                        <p className='text-base font-bold'>Dhaka, Bangladesh</p>
                        <p className='text-base font-bold'>Email: abdullahmuhammadsiam99@gmail.com</p>
                    </div>
                    <div>
                        <span className="footer-title">Social</span>
                        <div className="grid grid-flow-col gap-4">

                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;