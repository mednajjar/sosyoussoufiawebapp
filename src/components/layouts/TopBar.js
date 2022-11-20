import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from '../../assets';
// import { Button } from '@mui/material';

const TopBar = (props) => {
    const location = useLocation();
    const [url, setUrl] = useState("")

    useEffect(() => {
        setUrl(location.pathname)
    }, [location.pathname])

    const navigationActive = ({ isActive }) => {
        return {
            color: isActive ? '#DFA543' : 'black'
        }
    }

    const backColor = () => {
        if (url !== "/") {
            return {
                background: '#fff'
            }

        } else {
            return {
                background: '#FEF9F2'
            }
        }
    }



    return (
        (["/", "/contact", "/about", "/privacy_policy"].includes(location.pathname) && (
            <div style={backColor()}>
                <header className="flex justify-between h-auto w-full px-5">
                    <NavLink to="/">
                        <img src={Logo} alt="logo" className='w-24 h-auto py-4 ml-4' />
                    </NavLink>
                    <div className='flex justify-around self-center text-white'>
                        <NavLink style={navigationActive} className='font-semibold text-lg no-underline mx-3' to="about">About</NavLink>
                        <NavLink style={navigationActive} className='font-semibold text-lg no-underline mx-3' to="contact">Contact</NavLink>
                    </div>
                </header>

            </div>
        )
        )


    )
}

export default TopBar
