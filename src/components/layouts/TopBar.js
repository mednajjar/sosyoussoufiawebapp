import React from 'react'
import { NavLink } from 'react-router-dom';
import { Logo } from '../../assets';

const TopBar = () => {
    const navigationActive = ({ isActive }) => {
        return {
            color: isActive ? 'white' : 'black'
        }
    }
    return (
        <header className="flex justify-between h-auto w-full" style={{ backgroundColor: '#3396FF' }}>
            <NavLink to="/">
                <img src={Logo} alt="logo" srcset="" className='w-24 h-auto py-4 ml-4' />
            </NavLink>
            <div className='flex py-4 mr-4 w-48 justify-around pt-6 text-white'>
                <NavLink style={navigationActive} className='font-semibold text-lg w-40' to="/">Home</NavLink>
                <NavLink style={navigationActive} className='font-semibold text-lg w-40' to="about">About</NavLink>
                <NavLink style={navigationActive} className='font-semibold text-lg w-40' to="contact">Contact</NavLink>
            </div>
        </header>
    )
}

export default TopBar