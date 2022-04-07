import React, { useEffect, useState } from "react";
import { Route, useParams, useRouteMatch} from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import Deck from "./Deck";
import DeckScreenNav from "./deckScreenNav";

function DeckScreen() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);

  const deckId = useParams().deckId;
  const { url } = useRouteMatch();

  // Loading the deck
  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
      setCards(deckFromAPI.cards);
    }
    loadDeck();
  }, [deckId]);

  // If the deck is fetched, the nav bar and deck will display
  if (deck.name) {
    return (
      <div>
        <DeckScreenNav deckName={deck.name} />
        <Route path={url}>
          <Deck
            deckName={deck.name}
            deckDescription={deck.description}
            deckId={deckId}
            cards={cards}
            url={url}
          />
        </Route>
      </div>
    );
  }
  return "Loading. Please hold!";
}

export default DeckScreen;