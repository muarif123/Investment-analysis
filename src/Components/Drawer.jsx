import React from 'react';
import { Link } from 'react-router-dom';
import Closer from './Close';
import SignButton from './SignButton';

const Drawer = ({ isOpen, toggleDrawer }) => {
    return (
        <div
            className={`fixed z-20 top-0 right-0 h-full w-[250px] bg-gray-200 transition-transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className='flex w-[90%] mx-auto justify-between'>
                <div className='logo'>
                <Link className='nav-link' to='/'>Codegrid</Link>
            </div>

                <div className=''>
                    <Closer onToggleDrawer={toggleDrawer}/>
                </div>
                </div>
                <div className='mt-10'>

            <div className='p-4'>
                <div className='border-gray-400 border-b-2'>
                    <Link className='nav-link' to='/' onClick={toggleDrawer}>Home</Link>
                </div>
                <div className='border-gray-400 border-b-2'>
                    <Link className='nav-link' to='/about' onClick={toggleDrawer}>About</Link>
                </div>
                <div className='border-gray-400 border-b-2'>
                    <Link className='nav-link' to='/contact' onClick={toggleDrawer}>Contact</Link>
                </div>
            <div className='mt-[90%] ml-[38%]'>
                <SignButton/>
            </div>
            </div>
                </div>
        </div>
    );
};

export default Drawer;
