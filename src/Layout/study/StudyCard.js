import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";

function StudyCard({ cards, currentCard, setCurrentCard, deckId }) {
  const [cardCount, setCardCount] = useState(1);
  const [isFrontOfCard, setIsFrontOfCard] = useState(true);
  const history = useHistory();
  const { url } = useRouteMatch();

//Handles next  button click
  const NextCardHandler = () => {
    // Tracking which is being viewed
    if (cardCount < cards.length) {
      setCurrentCard(cards[cardCount]);
      setIsFrontOfCard((currentSide) => !currentSide);
      setCardCount((currentCount) => currentCount + 1);
    } else {
      // Once the deck is ended, prompt with window confirm for either a restart of the deck or return to homepage.
      if (
        window.confirm(
          "Would you like to restart this study set? Clicking cancel will return you to the home page."
        )
      ) {
        setIsFrontOfCard((currentSide) => !currentSide);
        setCurrentCard(cards[0]);
        setCardCount(1);
        history.push(url);
      } else {
        history.push("/");
      }
    }
  };

  const flipCardHandler = () => {
    setIsFrontOfCard((currentSide) => !currentSide);
  };

  // If less than 3 cards, prompt adding additional cards
  if (cards.length < 3) {
    return (
      <div>
        <h2>Not enough cards.</h2>
        <p>
          You need at least 3 cards to have a valuable study session. There are only {cards.length} cards in
          this deck. Please add more and try again.
        </p>
        <button
      type="button"
      className="btn btn-primary"
      onClick={() => history.push(`/decks/${deckId}/cards/new`)}
    >
      <span className="oi oi-plus" /> Add Cards
    </button>
      </div>
    );
  }

  // Front of card + flip button
  if (isFrontOfCard) {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Card {cardCount} of {cards.length}
          </h5>
          <p className="card-text">{currentCard.front}</p>
          <button type="button" className="btn btn-secondary mr-2" onClick={flipCardHandler}>
      Flip
    </button>
        </div>
      </div>
    );
  }
  // back of card + flip + next button
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Card {cardCount} of {cards.length}
        </h5>
        <p className="card-text">{currentCard.back}</p>
        <button type="button" className="btn btn-secondary mr-2" onClick={flipCardHandler}>
      Flip
    </button>
    <button type="button" className="btn btn-primary" onClick={NextCardHandler}>
      Next
    </button>
      </div>
    </div>
  );
}


export default StudyCard;
