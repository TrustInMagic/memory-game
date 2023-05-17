import React, { useState } from 'react';
import cardsArr from '../data-structures';
import { shuffleArray } from '../utils';

function Card({ name, url, setScore, setGameOver, setCards }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    if (clicks === 0) {
      const newCards = shuffleArray(cardsArr);

      setCards(newCards);
      setScore((prevScore) => prevScore + 1);
      setClicks((prevClicks) => prevClicks + 1);
    } else {
      const newCards = shuffleArray(cardsArr);
      setCards(newCards);
      setGameOver(true);
    }
  };

  return (
    <div className='card' onClick={handleClick}>
      <img src={url} alt='' />
      <div className='card-name'>{name}</div>
    </div>
  );
}

export default Card;
