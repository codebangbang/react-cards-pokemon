import React from "react";
import { useAxios } from "./hooks.js/useAxios";
import PlayingCard from "./PlayingCard";
import { formatCard } from "./helpers";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, clearData] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
        <button onClick={clearData}>Clear the table!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
