import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburg from '../Components/Hamburg';
import Drawer from '../Components/Drawer';
import SignButton from '../Components/SignButton';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(prevState => !prevState);
    };

    const handleResize = () => {
        if (window.innerWidth >= 768) { 
            setIsDrawerOpen(false); 
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

      
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className='w-[85%] mx-auto flex justify-between py-10'>
            <div className='logo text-white'>
                <Link className='nav-link' to='/'>Codegrid</Link>
            </div>
            <div className='hidden md:flex justify-around text-white w-[33%]'>
                <div className='nav-items'>
                    <Link className='nav-link hover:text-green-600 transition' to='/'>Home</Link>
                </div>
                <div className='nav-items'>
                    <Link className='nav-link hover:text-green-600 transition' to='/about'>About</Link>
                </div>
                <div className='nav-items'>
                    <Link className='nav-link hover:text-green-600 transition' to='/contact'>Contact</Link>
                </div>
            </div>
            <div className='flex items-center'>
            <button className='hidden sm:hidden md:block lg:block xl:block 2xl:block mt-[-10px]'>
            <SignButton/>
        </button>
        <button className='block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden'>
            MENU
        </button>
        <div className='block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden'>
        <Hamburg onToggleDrawer={toggleDrawer}/>
        </div>
            </div>
            <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        </div>
    );
};

export default Navbar;
