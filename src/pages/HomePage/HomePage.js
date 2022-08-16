import React from 'react';
import './homepage.scss'
import MainGlobe from '../../components/MainGlobe/MainGlobe';
import Navbar from '../../components/Navbar/Navbar'

function HomePage() {


    return (
        <div className="main">
            <div className="wrapper">
                <MainGlobe />
                <Navbar />
            </div>
        </div>
    );
}

export default HomePage;