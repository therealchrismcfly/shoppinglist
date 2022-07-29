import AddItem from "./components/AddItem";
import StyledShoppingItem from "./components/StyledShoppingItem";
import StyledMain from "./components/StyledMain";
import StyledSuggestionItem from "./components/StyledSuggestionItem";
import React, { useEffect } from "react";
import useStore from "./useStore";

function App() {
  const items = useStore((state) => state.items);
  const deleteItem = useStore((state) => state.deleteItem);
  const fetchSomething = useStore((state) => state.fetchSomething);
  const fetchedData = useStore((state) => state.fetchedData);

  /*Daten aus API ziehen*/
  useEffect(() => {
    fetchSomething("https://fetch-me.vercel.app/api/shopping/items");
  }, [fetchSomething]);

  return (
    <StyledMain>
      <h1>Einkaufsliste</h1>
      <ul>
        {items.map((item) => {
          console.log(item.name);
          return (
            <StyledShoppingItem
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              {item.name}
            </StyledShoppingItem>
          );
        })}
      </ul>
      <h2>Was willst du einkaufen?</h2>
      <AddItem />
      <ul>
        {fetchedData.data.map((data) => {
          return (
            <StyledSuggestionItem key={data._id}>
              {data.name.de}
            </StyledSuggestionItem>
          );
        })}
      </ul>
    </StyledMain>
  );
}

export default App;
