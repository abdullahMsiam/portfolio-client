import React from 'react';
import { Link } from 'react-router-dom';

const PortNav = () => {
    return (
        <div className='max-w-5xl'>
            <div className="navbar bg-neutral-800 text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral-800 rounded-box w-52">
                            <li className='hover:text-orange-400 text-xl font-bold ms-5'>
                                <Link>Works</Link>
                            </li>
                            <li>
                                <Link className='hover:text-orange-400 text-xl font-bold ms-5'>Blogs</Link>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        <li className='hover:text-orange-400 text-xl font-bold ms-5'>
                            <Link>Works</Link>
                        </li>
                        <li className='hover:text-orange-400 text-xl font-bold ms-5'>
                            <Link>Blogs</Link>
                        </li>
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                     bg-[#ffde29]
                </div> */}
            </div>
        </div>
    );
};

export default PortNav;