import React from 'react'
import { Link } from 'react-router-dom';
import { Logo } from '../../assets';

const TopBar = () => {
    return (
        <header className="flex justify-between h-auto relative w-full z-10 mt-0">
            <Link to="/">
                <img src={Logo} alt="logo" srcset="" className='w-24 h-auto py-4 ml-4' />
            </Link>
            <div className='flex py-4 mr-4 w-48 justify-around pt-6'>
                <Link className='font-semibold text-lg' to="about">About</Link>
                <Link className='font-semibold text-lg' to="contact">Contact</Link>
            </div>
        </header>
    )
}

export default TopBar