import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";
import { CardOnDeck } from "./CardOnDeck";

// Display the deck and the buttons to interact
function Deck({ deckName, deckDescription, deckId, cards, url }) {
  const history = useHistory();
  
  // Delete button will prompt user - if okay, removed
  // and is no longer visible on the Home screen
  const handleTrashClick = () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(deckId).then(() => history.push("/"));
    }
  };


  return (
    <div>
      <h1>{deckName}</h1>
      <p>{deckDescription}</p>

      <div className="d-flex mb-4">
        <div className="mr-auto">
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={() => history.push(`/decks/${deckId}/edit`)}
          >
            <span className="oi oi-pencil" /> Edit
          </button>
          <button
            type="button"
            className="btn btn-primary mr-2"
            onClick={() => history.push(`/decks/${deckId}/study`)}
          >
            <span className="oi oi-book" /> Study
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.push(`/decks/${deckId}/cards/new`)}
          >
            <span className="oi oi-plus" /> Add Cards
          </button>
        </div>

        <div>
        <button type="button" className="btn btn-danger" onClick={handleTrashClick}>
      <span className="oi oi-trash" />
    </button>
        </div>
      </div>
      <div>
        <h2>Cards</h2>
        {/* Renders the cards in the deck and the edit card and delete card buttons */}
        <CardOnDeck cards={cards} deckId={deckId} url={url} />
      </div>
    </div>
  )
}

export default Deck;
