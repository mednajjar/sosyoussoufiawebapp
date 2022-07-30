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
        <div style={{ backgroundColor: '#3396FF' }}>
            <header className="flex justify-between h-auto w-full" style={{ width: "90%", margin: "0 auto" }}>
                <NavLink to="/">
                    <img src={Logo} alt="logo" srcset="" className='w-24 h-auto py-4 ml-4' />
                </NavLink>
                <div className='flex py-4 w-40 justify-around pt-6 self-center text-white'>
                    <NavLink style={navigationActive} className='font-semibold text-lg w-40 no-underline' to="about">About</NavLink>
                    <NavLink style={navigationActive} className='font-semibold text-lg w-40 no-underline' to="contact">Contact</NavLink>
                </div>
            </header>

        </div>

    )
}

export default TopBar
