import React from 'react'
import { P404 } from '../../assets'
const NotFound = () => {
  return (
    <div style={{ background: '#F6F6F6' }} className='grid font-semibold text-lg text-center max-w-7xl mx-auto mt-10 rounded-full h-full items-center justify-center p-5'>
      <p style={{ color: '#459350' }}>Oop's! Page Not Found</p>
      <img src={P404} alt="page-not-found" className='rounded-full' />
    </div>
  )
}

export default NotFound