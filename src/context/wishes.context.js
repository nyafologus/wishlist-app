import React, { createContext } from "react";

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
