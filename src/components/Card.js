import React, { useState } from 'react';

function Card({ name, url, handleCorrect, handleIncorrect }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks((prevClicks) => prevClicks + 1);
    
    if (clicks === 0) {
      handleCorrect();
    } else {
      handleIncorrect();
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
