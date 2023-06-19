import React, { useState, useEffect } from "react";
import Card from "./card";

function GameBoard() {
  const [deck, setDeck] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [canFlip, setCanFlip] = useState(true);
  const [scores, setScores] = useState([0, 0]);
  const [winner, setWinner] = useState(null);

  const cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const generateDeck = () => {
    let deck = cards.concat(cards);
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };

  const startNewGame = () => {
    let newDeck = generateDeck();
    setDeck(newDeck);
    setMatchedCards([]);
    setFlippedCards([]);
    setCurrentPlayer(1);
    setScores([0, 0]);
    setCanFlip(true);
    setWinner(null);
  };

  useEffect(() => {
    startNewGame();
  }, []);

  const flipCard = (index) => {
    if (!canFlip) return;
    setFlippedCards((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setCanFlip(false);
      const [firstCardIndex, secondCardIndex] = flippedCards;
      if (deck[firstCardIndex] === deck[secondCardIndex]) {
        setMatchedCards((prev) => [...prev, firstCardIndex, secondCardIndex]);
        setScores((prev) => {
          let newScores = [...prev];
          newScores[currentPlayer - 1] += 1;
          return newScores;
        });
        setFlippedCards([]);
        // Don't switch players if a pair has been found
        setCanFlip(true);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setCurrentPlayer(currentPlayer === 1 ? 2 : 1); // Only switch players if a pair has not been found
          setCanFlip(true);
        }, 1000);
      }
    }
  }, [flippedCards, deck, currentPlayer]);

  useEffect(() => {
    if (deck.length > 0 && matchedCards.length === deck.length) {
      setWinner(scores[0] > scores[1] ? 1 : 2);
    }
  }, [matchedCards, deck, scores]);

  return (
    <div className="game-board">
      <div className="header">
        <h2 className="title">Memory</h2>
        <button onClick={startNewGame}>New Game</button>
        <p>Current Player: {currentPlayer}</p>
        <p>
          Score - Player 1: {scores[0]}, Player 2: {scores[1]}
        </p>
      </div>
      {deck.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          isFlipped={
            flippedCards.includes(index) || matchedCards.includes(index)
          }
          selectCard={flipCard}
        />
      ))}
      {winner && <div className="winner">Player {winner} Wins!</div>}
    </div>
  );
}

export default GameBoard;
