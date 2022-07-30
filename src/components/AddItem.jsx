import StyledSearchBar from "./StyledSearchBar";
import React from "react";
import { useState } from "react";
import useStore from "../useStore.js";
/* import { search } from 'fast-fuzzy'; */

export default function AddItem() {
  const [inputValue, setInputValue] = useState("");
  const addItem = useStore((state) => state.addItem); //useStore
  return (
    <StyledSearchBar
      onSubmit={(event) => {
        event.preventDefault();
        addItem(inputValue);
      }}
    >
      <label htmlFor="inputItem">
        <input
          type="text"
          id="inputItem"
          placeholder="Tippe um zu suchen..."
          required
          value={inputValue}
          onChange={(event) => {
            //hier könnte fuzzy passieren
            setInputValue(event.target.value);
          }}
          /*   onChange={(event) => {
            setInputValue(search(event.target.value)) 
          }} */
        ></input>
      </label>
    </StyledSearchBar>
  );
}

/* const {search} = require("fast-fuzzy");

//pass in a keySelector to search for objects
search(
    "abc",   INPUTVALUE
    [{name: "def"}, {name: "bcd"}, {name: "cde"}, {name: "abc"}],
    {keySelector: (obj) => obj.name},
);
//returns [{name: "abc"}, {name: "bcd"}] */
