import React, { Fragment } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./home/Home";
import Study from "./study/Study"
import AddCard from "./card/add/AddCard";
import EditCard from "./card/edit/EditCard";
import DeckScreen from "./deck/DeckScreen";
import CreateDeck from "./deck/create/CreateDeck";
import EditDeck from "./deck/edit/EditDeck";
import { Switch, Route } from "react-router-dom";


function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>        
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>          
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>           
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId">
            <DeckScreen />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
