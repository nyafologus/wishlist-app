import React from "react";
import Paper from "@material-ui/core/Paper";

export default function WishList() {
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
    </Paper>
  );
}
