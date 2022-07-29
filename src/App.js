import AddItem from "./components/AddItem";
import StyledShoppingItem from "./components/StyledShoppingItem";
import StyledMain from "./components/StyledMain";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = useState([
    { id: nanoid(), name: "Peanutbutter" },
    { id: nanoid(), name: "Jelly" },
  ]);

  function handleItems(name) {
    setItems([...items, { id: nanoid(), name }]);
  }

  return (
    <StyledMain>
      <h1>Einkaufsliste</h1>
      <ul>
        {items.map((item) => {
          console.log(item.name);
          return (
            <StyledShoppingItem
              key={item._id}
              onClick={() => {
                setItems(
                  items.filter((item_) => {
                    return item_.id !== item.id;
                  })
                );
              }}
            >
              {item.name}
            </StyledShoppingItem>
          );
        })}
      </ul>
      <h2>Was willst du einkaufen?</h2>
      <AddItem onItem={handleItems} />
    </StyledMain>
  );
}

export default App;
