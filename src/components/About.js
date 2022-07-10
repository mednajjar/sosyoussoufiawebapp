import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>About</h1>
                <Link to="/">HOME</Link>
            </header>
        </div>
    )
}

export default About