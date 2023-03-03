import React from 'react';
import { Link } from 'react-router-dom';
import usesData from '../../../data/usesData'

const Uses = () => {
    
    return (
        <section className='uses-section'>
            {
                usesData.map(({index, use, details, image, itemclass}) => {
                    return(
                        <div className='use-wrapper' key={index}>
                            {
                                (index % 2 === 0) ? (<div className='use-container' key={index}>
                                    <div className='use'>
                                        <div>
                                            <h3>{use}</h3>
                                            <p>{details}</p>
                                        </div>
                                        <Link to={'/'} className='demo-link'>Request a demo</Link>
                                    </div>
                                    <div className='use-image-container'>
                                        <img src={image} alt="" />
                                        <div className={itemclass}></div>
                                    </div>
                                </div>) : (<div className='use-container' key={index}>
                                    <div className='use-image-container'>
                                        <img src={image} alt="" />
                                        <div className={itemclass}></div>
                                    </div>
                                    <div className='use'>
                                        <div>
                                            <h3>{use}</h3>
                                            <p>{details}</p>
                                        </div>
                                        <Link to={'/'} className='demo-link'>Request a demo</Link>
                                    </div>
                                </div>)
                            }
                        </div>   
                    )
                })
            }
        </section>
    );
}

export default Uses;
