import React from 'react'
import { ScreensApp, GooglePlay, Background } from '../../assets'
const HeaderHero = () => {
    return (
        <div className='flex flex-wrap justify-around items-center pt-6' style={{
            background: `url(${Background})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#3396FF',
            width: '100%',
            height: '70vh'
        }}>
            <div className='flex-table text-center'>
                <h1 className='text-3xl font-bold text-white'>SOS YOUSSOUFIA</h1>
                <div className='font-semibold mt-4 leading-9 text-xl p-3'>
                    <p>The First Version is Now available on Google Play</p>
                    <p>Find a Guard Pharmacy Location Using Map <br></br> and All Taxi Phone Numbers</p>
                </div>
                <div className='flex mt-3 justify-center'>
                    <a href="https://play.google.com/store/apps/details?id=com.sos.youssoufia" target="_blank" rel="noopener noreferrer">
                        <img src={GooglePlay} alt="google play" className='w-48 text-center' />
                    </a>
                </div>

            </div>
            <div className='mt-6'>
                <img src={ScreensApp} alt="app" style={{ width: "35vw", height: "auto" }} />
            </div>
        </div>
    )
}

export default HeaderHero