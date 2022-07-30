import AddItem from "./components/AddItem";
import StyledShoppingItem from "./components/StyledShoppingItem";
import StyledSuggestionItem from "./components/StyledSuggestionItem";
import React from "react";
import useStore from "./useStore";
import "./App.css";

function App() {
  const items = useStore((state) => state.items);
  const deleteItem = useStore((state) => state.deleteItem);
  const fetchedData = useStore((state) => state.fetchedData);
  const addItem = useStore((state) => state.addItem); //useStore

  return (
    <div className="wrapper">
      <h1>Einkaufsliste</h1>

      <ul className="shoppinglist">
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
      <ul className="shoppinglist">
        {fetchedData.data.map((data) => {
          return (
            <StyledSuggestionItem
              key={data._id}
              onClick={() => {
                addItem(data.name.en);
              }}
            >
              {data.name.en}
            </StyledSuggestionItem>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
