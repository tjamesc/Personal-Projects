import './PricingCardStyles.css';
import React from 'react';

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- #1 -</h3>
                <span className='bar'></span>
                <p className='btc'>Trivia</p>
                <p>- UNC Academic Team -</p>
                <p>Go to tournaments in NC, SC, VA to compete in trivia</p>
                <p>- Jeopardy Enthusiast -</p>
                <p>- I would win 84.3% of games on TV -</p>
            </div>
            <div className='card'>
                <h3>- #2 -</h3>
                <span className='bar'></span>
                <p className='btc'>Video Games</p>
                <p>- Semi-Competitive Brawl Stars Player -</p>
                <p>- 25,000 Trophies -</p>
                <p>- Clash of Clans Town Hall 12 -</p>
                <p>- Finished Dark Souls -</p>
            </div>
            <div className='card'>
                <h3>- #3 -</h3>
                <span className='bar'></span>
                <p className='btc'>Sports</p>
                <p>Intramural Volleyball Team Captain</p>
                <p>- 1 WIN, 5 LOSSES -</p>
                <p>Slight enjoyer of sports gambling</p>
                <p>- Made $10 on the NHL -</p>
            </div>
        </div>
    </div>
  )
}

export default PricingCard