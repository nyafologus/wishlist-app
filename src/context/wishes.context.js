import React, { createContext } from "react";
import useWishesState from "../hooks/useWishesState";
import uuid from "uuid/v4";

const defaultWishes = [
  {
    id: uuid(),
    content: "Audio-Technica ATH-M50x Headphones",
    done: false,
    link:
      "https://www.audio-technica.com/cms/headphones/99aff89488ddd6b1/index.html"
  },
  {
    id: uuid(),
    content: "Celeste Mountain on Steam",
    done: false,
    link: "https://store.steampowered.com/app/504230/Celeste/"
  }
];

export const WishesContext = createContext();
// provider calls our custom hook to set up the initial wishes object
export function WishesProvider(props) {
  const { wishes, addWish, deleteWish, toggleWish, editWish } = useWishesState(
    defaultWishes
  );
  return (
    //   return a provider wrapper
    <WishesContext.Provider
      // pass the wishes object as a value so any children can consume it
      value={(wishes, addWish, deleteWish, toggleWish, editWish)}
    >
      {props.children}
    </WishesContext.Provider>
  );
}
