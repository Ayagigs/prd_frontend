import React from 'react';
import viewLogo from '../../../assets/img/Frame 3.svg'
import bigchainLogo from '../../../assets/img/image 1.svg'

const Database = () => {
    return (
        <section className='database-section'>
            <div className='database-container'>
                <div className='database-use-text'>
                    <h2>Your database is safe with us</h2>
                    <p>View makes use of BigchainDB. BigchainDB is a scalable, decentralized database for large-scale applications, used by tesla, porshe etc</p>
                </div>
                <div className='database-images-container'>
                    <img src={viewLogo} alt="" />
                    <span>is built on</span>
                    <img src={bigchainLogo} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Database;
