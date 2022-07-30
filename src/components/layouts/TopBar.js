import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from '../../assets';

const TopBar = (props) => {
    const location = useLocation();
    const [url, setUrl] = useState("")
    // const [isTrue, setIsTrue] = useState(false)
    // useEffect(() => {
    //     if (location.pathname === "/about" || location.pathname === "/contact") {
    //         setIsTrue(true)
    //     }
    // }, [isTrue])

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
                background: '#3396FF'
            }
        }
    }


    console.log('props :', url)

    return (
        <div style={backColor()}>
            <header className="flex justify-between h-auto w-full" style={{ width: "90%", margin: "0 auto" }}>
                <NavLink to="/">
                    <img src={Logo} alt="logo" className='w-24 h-auto py-4 ml-4' />
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
