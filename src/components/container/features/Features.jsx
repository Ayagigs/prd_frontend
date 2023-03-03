import React from 'react';
import { Link } from 'react-router-dom';
import features from '../../../data/features';
import arrowright from '../../../assets/img/arrowright.svg'
import next from '../../../assets/img/Frame 154.svg'
import previous from '../../../assets/img/Frame 153.svg'

const Features = () => {
    return (
        <section className='features-section'>
            <header className='features-heading'>
                <h2 className='features'>Packed with amazing features just like you</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Morbi tellus metus turpis feugiat nec. Pellentesque dui scelerisque ut sit. Vulputate aliquet duis etiam in egestas auctor eu. Mi nisi vel parturient mattis.</p>
            </header>
            <div className='features-container'>
                {
                    features.map(({index, image, feature}) => {
                        return(
                            <div className="feature" key={index}>
                                <div>
                                    <img src={image} alt="" className='feature-icon'/>
                                    <h3>{feature}</h3>
                                </div>
                                <Link>
                                    <span>Learn more</span>
                                    <img src={arrowright} alt="" />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className='carousel-btn-container'> 
                <img src={previous} alt="" />
                <img src={next} alt="" />                
            </div>
        </section>
    );
}

export default Features;
