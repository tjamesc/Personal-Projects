import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

function About() {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading='About Me' text='(What I do when I am doing computer science)'/>
        <AboutContent />
        <Footer />
    </div>
  )
}

export default About