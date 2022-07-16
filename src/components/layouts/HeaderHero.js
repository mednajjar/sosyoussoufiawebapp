import React from 'react'
import { Link } from 'react-router-dom'
import { ScreensApp, GooglePlay } from '../../assets'
const HeaderHero = () => {
    return (
        <div className='flex flex-wrap justify-around mt-7 items-center absolute w-full'>
            <div className='flex-table text-center'>
                <h1 className='text-3xl font-bold text-green-500'>SOS YOUSSOUFIA APP</h1>
                <div className='font-semibold mt-4 leading-9 text-xl p-3'>
                    <p>The First Version is Now availble on Play Store</p>
                    <p>Find a Pharmacy Guard Location Using a Map <br></br> and Taxi Information Call</p>
                </div>
                <div className='flex mt-3 justify-center'>
                    <Link to="!#">
                        <img src={GooglePlay} alt="" srcset="" className='w-48 text-center' />
                    </Link>
                </div>

            </div>
            <div className='mt-6'>
                <img src={ScreensApp} alt="app" srcset="" style={{ width: "35vw", height: "auto" }} />
            </div>
        </div>
    )
}

export default HeaderHero