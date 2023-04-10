import './AboutContentStyles.css';
import React from 'react';
// import Img2 from '../assets/img-2.jpeg';
// import Img3 from '../assets/img-3.jpeg';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>More about me:</h1>
            <p>I'm a sophomore majoring in Computer Science with a minor in data science and neuroscience. I am part of App Team and TechX.</p>
        </div>
        {/* <div className='right'>
            <div className='img-container'>
                <div className='img-stack-top'>
                    <img src={Img2} className ='img' alt='true' />
                </div>
                <div className='img-stack-bottom'>
                    <img src={Img3} className ='img' alt='true' />
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default AboutContent