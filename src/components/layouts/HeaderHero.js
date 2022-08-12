import React from 'react'
import { ScreensApp, GooglePlay, Background } from '../../assets'
const HeaderHero = () => {
    return (
        <div className='flex flex-wrap justify-around items-center pt-6' style={{
            background: `url(${Background})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#FEF9F2',
            width: '100%',
            height: '70vh'
        }}>
            <div className='flex-table text-center'>
                <h1 className='text-3xl font-bold'><span style={{ color: '#DFA543' }}>SOS YOUSSOUFIA</span></h1>
                <div className='font-semibold mt-4 leading-9 text-xl p-3'>
                    <p>The First Version is Now available on Google Play</p>
                    <p>Find a Pharmacy on Duty Location Using Map, and all Taxi Phone Numbers</p>
                </div>
                <div className='flex mt-3 justify-center'>
                    <a href="https://play.google.com/store/apps/details?id=com.sos.youssoufia" target="_blank" rel="noopener noreferrer">
                        <img src={GooglePlay} alt="google play" className='w-48 text-center rounded-2xl shadow-2xl' />
                    </a>
                </div>

            </div>
            <div className='mt-6'>
                <img src={ScreensApp} alt="app" style={{ width: "40vw", height: "auto" }} />
            </div>
        </div>
    )
}

export default HeaderHero