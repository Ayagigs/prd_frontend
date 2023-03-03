import React from 'react';
import next from '../../../assets/img/Frame 154.svg'
import previous from '../../../assets/img/Frame 153.svg'
import testimonies from '../../../data/testimonies';

const Testimonies = () => {
    return (
        <section className='testimonies-section'>
            <h2>We’ve worked with <span>5000+ </span> companies, read what our users say</h2>
            <div className='testimony-wrapper'>
                <button className='carousel-btn'>
                    <img src={previous} alt="" />
                </button>
                {
                    testimonies.map(({index, name, profilephoto, title, username, socialmedialogo, testimony}) => {
                        return(
                            <div className="testimony-container" key={index}>
                                <header>
                                    <div className='userinfo-container'>
                                        <div className='profilephoto-container'>
                                            <img src={profilephoto} alt="" />
                                        </div>
                                        <div className='userinfo'>
                                            <h3>{name}</h3>
                                            <p>{title}</p>
                                            <h6>{username}</h6>
                                        </div>
                                    </div>
                                    <div className='social-logo-container'>
                                        <img src={socialmedialogo} alt="" />
                                    </div>
                                </header>  
                                <p className='testimony'>
                                    {testimony}
                                </p>
                            </div>
                        )
                    })
                }
                <button className='carousel-btn'>
                    <img src={next} alt="" />
                </button>
            </div>
        </section>
    );
}

export default Testimonies;
