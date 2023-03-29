import React from 'react';
import clientLogos from '../../../data/clientLogos'
const Clients = () => {
    return (
        <section className='clients-section'>
            <div className="clients-container">
                <h2>Tried and trusted by:</h2>
                <div className="clients-logos-container">
                    {
                        clientLogos.map(({index, clientLogo}) => {
                            return(
                                <img src={clientLogo} alt="" key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Clients;
