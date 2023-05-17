import React, { useState } from 'react';
import Card from './components/Card';
import cardsArr from './data-structures';
import { shuffleArray } from './utils.js';
import './styles/App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [key, setKey] = useState(0);
  const [cards, setCards] = useState(cardsArr);

  const resetGame = () => {
    setScore(0);
    setKey((prevKey) => prevKey + 1);
  };


  const handleCorrect = () => {
    const newCards = shuffleArray(cardsArr);
    setCards(newCards);
    setScore((prevScore) => prevScore + 1)
  };

  const handleIncorrect = () => {
    score > bestScore ? setBestScore(score) : setBestScore(bestScore);
    resetGame();
  };

  return (
    <div className='App'>
      <div className='header'>
        <div className='top-header'>
          <h1>Galactic Chronicles Memory Game</h1>
          <div className='score'>
            <div className='current-score'>Score: {score}</div>
            <div className='best-score'>Best Score: {bestScore}</div>
          </div>
        </div>
        <div className='tip'>
          Get points by clicking on an image but not more than once!
        </div>
      </div>
      <div className='game-area'>
        {cards.map((card) => (
          <Card
            name={card.name}
            url={card.url}
            key={card.name + key}
            handleCorrect={handleCorrect}
            handleIncorrect={handleIncorrect}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
