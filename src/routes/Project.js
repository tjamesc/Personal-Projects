import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';

function Project() {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading='My Hobbies' text="(What I do when I'm not doing computer science)" />
        <PricingCard />
        <Footer />
    </div>
  )
}

export default Project