import AddItem from "./components/AddItem";
import StyledShoppingItem from "./components/StyledShoppingItem";
import StyledMain from "./components/StyledMain";
import React from "react";
import useStore from "./useStore";

function App() {
  const items = useStore((state) => state.items);
  const deleteItem = useStore((state) => state.deleteItem);
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
    </StyledMain>
  );
}

export default App;
