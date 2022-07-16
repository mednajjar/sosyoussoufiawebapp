import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='text-center'>
            <p>copyright © 2022 All Right Reserved - Created By <Link to="about" >MOHAMMED NAJJAR</Link></p>
        </footer>
    )
}

export default Footer