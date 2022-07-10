import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>SOS YOUSSOUFIA APP</h1>
                <Link to="privacy_policy">PRIVACY POLICY</Link>
                <Link to="about">ABOUT ME!</Link>
            </header>
        </div>
    )
}

export default Home