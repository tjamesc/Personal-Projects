import './HeroImgStyles.css';
import React from 'react';
import IntroImg from '../assets/img-2.jpeg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImg' />
        </div>
        <div className='content'>
            <p>UNC Chapel Hill</p>
            <h1>Thomas Carriero</h1>
            <div>
                <Link to='/project' className='btn'>My Hobbies</Link>
                <Link to='/about' className='btn btn-light'>About Me</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;