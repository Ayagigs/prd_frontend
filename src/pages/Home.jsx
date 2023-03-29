import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components'

const Home1 = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Home1;
