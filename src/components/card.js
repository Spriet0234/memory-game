import React from "react";

function Card({ card, index, isFlipped, selectCard }) {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={() => !isFlipped && selectCard(index)}
    >
      <div className="inner">
        <div className="front">
          <div className="content">{card}</div>
        </div>
        <div className="back">
          <div className="content">?</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
