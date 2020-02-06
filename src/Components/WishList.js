import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function WishList({ wishes }) {
  return (
    <Paper>
      <List>
        {wishes.map(wish => (
          <ListItem key={wish.id}>
            <ListItemText>{wish.content}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
