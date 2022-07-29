import StyledSearchBar from "./StyledSearchBar";
import React from "react";
import { useState } from "react";
import useStore from "../useStore.js";

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
            setInputValue(event.target.value);
          }}
        ></input>
      </label>
    </StyledSearchBar>
  );
}
