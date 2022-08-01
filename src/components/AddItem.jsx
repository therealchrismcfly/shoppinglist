import StyledSearchBar from "./StyledSearchBar";
import React, { useEffect } from "react";
import { useState } from "react";
import useStore from "../useStore.js";
import { search } from "fast-fuzzy";

export default function AddItem() {
  const [inputValue, setInputValue] = useState("");
  const addItem = useStore((state) => state.addItem); //useStore
  const fetchSomething = useStore((state) => state.fetchSomething);
  const fetchedData = useStore((state) => state.fetchedData);
  const setSuggestions = useStore((state) => state.setSuggestions);

  /*Daten aus API ziehen*/
  useEffect(() => {
    fetchSomething("https://fetch-me.vercel.app/api/shopping/items");
  }, [fetchSomething]);

  useEffect(() => {
    const results = search(inputValue, fetchedData.data, {
      keySelector: (data) => data.name.en,
    });
    setSuggestions(results);
  }, [fetchedData, inputValue, setSuggestions]);

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
