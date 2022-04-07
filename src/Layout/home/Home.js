import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { listDecks } from "../../utils/api/index";
import HomeDeleteDeckButton from "./HomeDeleteDeckButton";

function Home() {
  const [decks, setDecks] = useState([]);
  const history = useHistory();
  
  // This loads the decks from the API
  useEffect(() => {
    async function loadDecks() {
      const response = listDecks();
      const decksFromAPI = await response;
      setDecks(decksFromAPI);
    }
    loadDecks();
  }, []);

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary mb-2 btn-lg"
        onClick={() => history.push("/decks/new")}
      >
        <span className="oi oi-plus" /> Create Deck
      </button>
      {/* Card for each deck and buttons*/}
      {decks.map((deck, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{deck.name}</h5>
                <h6 className="card-subtitle text-muted">
                  {deck.cards.length} cards
                </h6>
              </div>
              <p className="card-text">{deck.description}</p>
              <div className="d-flex">
                <div className="mr-auto">
                  <button
                    type="button"
                    className="btn btn-secondary mr-2"
                    onClick={() => history.push(`/decks/${deck.id}`)}
                  >
                    <span className="oi oi-eye" /> View
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={() => history.push(`/decks/${deck.id}/study`)}
                  >
                    <span className="oi oi-book" /> Study
                  </button>
                </div>
                <div>
                <HomeDeleteDeckButton deck={deck} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
