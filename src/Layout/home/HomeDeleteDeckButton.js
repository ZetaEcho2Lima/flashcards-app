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
    <button type="button" class="btn btn-danger" onClick={handleTrashClick}>
      {/*Triggering a refresh makes sure it doesnt display anymore*/}
      <a href="/" class="text-white">
        <span class="oi oi-trash" />
      </a>
    </button>
  );
}

export default HomeDeleteDeckButton;
