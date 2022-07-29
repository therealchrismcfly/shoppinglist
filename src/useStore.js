import create from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => {
  return {
    fetchedData: { results: [] },
    fetchSomething: async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        set({ fetchedData: data });
      } catch (error) {
        console.error(`mooooep: ${error}`);
      }
    },

    items: [
      //1. einfacher State (Initialwert von ursprünglich UseState)
      { id: nanoid(), name: "Zustand" },
      { id: nanoid(), name: "Jelly" },
    ],

    deleteItem: (id) => {
      set((state) => {
        return {
          items: state.items.filter((item) => item.id !== id),
        };
      });
    },

    addItem: (name) => {
      set((state) => {
        return {
          items: [...state.items, { id: nanoid(), name }],
        };
      });
    },
  };
});

export default useStore;
