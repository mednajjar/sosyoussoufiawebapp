// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import { Logo } from '../../assets';

// const TopBar = () => {
//     const navigationActive = ({ isActive }) => {
//         return {
//             color: isActive ? 'white' : 'black'
//         }
//     }
//     return (
//         <div style={{ backgroundColor: '#3396FF' }}>
//             <header className="flex justify-between h-auto w-full" style={{ width: "90%", margin: "0 auto" }}>
//                 <NavLink to="/">
//                     <img src={Logo} alt="logo" srcset="" className='w-24 h-auto py-4 ml-4' />
//                 </NavLink>
//                 <div className='flex py-4 mr-4 w-48 justify-around pt-6 text-white'>
//                     <NavLink style={navigationActive} className='font-semibold text-lg w-40' to="/">Home</NavLink>
//                     <NavLink style={navigationActive} className='font-semibold text-lg w-40' to="about">About</NavLink>
//                     <NavLink style={navigationActive} className='font-semibold text-lg w-40' to="contact">Contact</NavLink>
//                 </div>
//             </header>

//         </div>

//     )
// }

// export default TopBar

import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../assets';

const TopBar = (args) => {
    const navigationActive = ({ isActive }) => {
        return {
            color: isActive ? 'white' : 'black'
        }
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args} style={{ backgroundColor: '#3396FF' }} >
                <NavLink to="/">
                    <img src={Logo} alt="logo" srcset="" className='w-24 h-auto py-4 ml-4' />
                </NavLink>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" style={{ width: "95%", margin: "0 auto" }} navbar>
                        <NavItem>
                            <NavLink style={navigationActive} className='font-semibold text-lg w-40 no-underline' to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navigationActive} className='font-semibold text-lg w-40 no-underline' to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navigationActive} className='font-semibold text-lg w-40 no-underline' to="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default TopBar;