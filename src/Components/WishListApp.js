import React, { useState } from "react";
import WishList from "./WishList";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function WishListApp() {
  const initialWishes = [
    {
      id: 1,
      content: "Audio-Technica ATH-M50x Headphones",
      done: false,
      link:
        "https://www.audio-technica.com/cms/headphones/99aff89488ddd6b1/index.html"
    },
    {
      id: 2,
      content: "Celseste Mountain on Steam",
      done: false,
      link: "https://store.steampowered.com/app/504230/Celeste/"
    },

    {
      id: 3,
      content: "Dreamland Alaskan Husky Faux Fur Heated Throw",
      done: false,
      link:
        "http://www.dreamlandworld.com/products/relaxwell-faux-fur-heated-throw/"
    },
    {
      id: 4,
      content: "House of Leaves",
      done: true,
      link:
        "https://www.barnesandnoble.com/w/house-of-leaves-mark-z-danielewski/1103027816#/"
    }
  ];

  const [wishes, setWishes] = useState(initialWishes);

  return (
    <Paper
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(to right top, #d1bebc, #d2c0c1, #c5b0ba, #b2a3b6, #9798b2, #768faa)",
        padding: 0,
        margin: 0
      }}
      elevation={0}
    >
      {/* use Paper Component as a reusable container to provide us with a background color */}
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        {/* AppBar, Toolbar, and Typography Components are from the material-ui docs */}
        <Toolbar>
          <Typography color="inherit">Wishes</Typography>
        </Toolbar>
      </AppBar>
      <WishList wishes={wishes} />
    </Paper>
  );
}