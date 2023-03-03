import React from 'react';
import Clients from '../container/clients/Clients';
import CTA from '../container/cta/CTA';
import Database from '../container/database/Database';
import Features from '../container/features/Features';
import Hero from '../container/hero/Hero';
import Testimonies from '../container/testimonies/Testimonies';
import Uses from '../container/uses/Uses';

const MainContent = () => {
    return (
        <main>
            <Hero />
            <Clients />
            <Uses />
            <Database />
            <Features />
            <Testimonies />
            <CTA />
        </main>
    );
}

export default MainContent;
