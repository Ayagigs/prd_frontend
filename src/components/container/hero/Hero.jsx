import React from 'react';
import heroChatImg from '../../../assets/img/tab-2.svg'
import heroDashboardImg from '../../../assets/img/chart-2.svg'
import heroUserProfileImg from '../../../assets/img/Frame 165.svg'
import heroGraphImg from '../../../assets/img/chart-4.svg'
import { Link } from 'react-router-dom';
//import HeroDashboard from './HeroDashboard';
import herodashboard from '../../../assets/img/landing-image-1.png'


const Hero = () => {

    return (
        <section className='hero-section'>
            <img src={heroDashboardImg} alt="" className="heroDashboardImg" />
            <img src={heroChatImg} alt="" className='heroChatImg'/>
            <header className='hero-heading'>
                <h1>The best performance management system</h1>
                <h3>We assist businesses scale positive, and increase employee engagement, output, and retention.</h3>
            </header>
            <div className="hero-links-container">
                <Link className="get-started-link" to={'/register'}>Get started</Link>
                <Link className='login-link' to={'/demo'}>Request a demo</Link>
            </div>
            <img src={heroUserProfileImg} alt="" className="heroUserProfileImg" />
            <img src={heroGraphImg} alt="" className="heroGraphImg" />
            <img src={herodashboard} alt="" className="hero-dashboard-img"/>
        </section>

    );
}

export default Hero;
