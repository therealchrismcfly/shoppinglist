import StyledSearchBar from "./StyledSearchBar";
import React from "react";
import { useState } from "react";

export default function AddItem({ onItem }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <StyledSearchBar
      onSubmit={(event) => {
        event.preventDefault();
        onItem(inputValue);
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
