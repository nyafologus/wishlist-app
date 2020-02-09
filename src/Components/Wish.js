import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function Wish({ content, done }) {
  return (
    <ListItem>
      <ListItemText>{content}</ListItemText>
    </ListItem>
  );
}
