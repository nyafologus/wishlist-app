import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

export default function Wish({ content, done }) {
  return (
    <ListItem>
      <Checkbox checked={done} />
      <ListItemText>{content}</ListItemText>
    </ListItem>
  );
}
