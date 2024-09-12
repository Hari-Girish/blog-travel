import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import AboutSection from '../AboutSection';
import Cards from '../Cards';

function AboutMe() {
    return (
        <>
            <AboutSection />
            <Cards />
            <Footer />
        </>
    );
}

export default AboutMe;