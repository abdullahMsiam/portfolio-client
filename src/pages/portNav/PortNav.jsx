import React from 'react';
import { Link } from 'react-router-dom';

const PortNav = () => {
    return (
        <div className=''>
            <div className=' relative'>
                <div className=" navbar fixed z-10 top-0 right-0 left-0 bg-neutral-900 bg-opacity-70">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden focus:bg-[#ffde29] focus:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral-700 bg-opacity-50 rounded-box w-28">
                                <li className='font-bold rounded-full bg-neutral-900 border-[#ffde29] hover:bg-[#ffde29] hover:rounded-full hover:text-black text-start'>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className='mt-2 font-bold rounded-full bg-neutral-900 border-[#ffde29] hover:bg-[#ffde29] hover:rounded-full hover:text-black text-start'>
                                    <Link to="/all-projects">Works</Link>
                                </li>
                                <li className=' mt-2 font-bold rounded-full bg-neutral-900 border-[#ffde29] hover:bg-[#ffde29] hover:rounded-full hover:text-black text-start'>
                                    <Link to="/blogs" className=''>Blogs</Link>
                                </li>
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost normal-case text-xl md:px-20">Abdullah M.S.</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal px-1">
                            <li className='hover:text-orange-400 text-xl font-bold ms-5'>
                                <Link to="/all-projects">Projects</Link>
                            </li>
                            <li className='hover:text-orange-400 text-xl font-bold ms-5'>
                                <Link to="/blogs" >Blogs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortNav;