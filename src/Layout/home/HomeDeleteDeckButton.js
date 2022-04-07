import React from "react";
import { deleteDeck } from "../../utils/api/index";

function HomeDeleteDeckButton({ deck }) {
  const handleTrashClick = () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(deck.id);
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={handleTrashClick}>
      {/*Triggering a refresh makes sure it doesnt display anymore*/}
      <a href="/" className="text-white">
        <span className="oi oi-trash" />
      </a>
    </button>
  );
}

export default HomeDeleteDeckButton;
