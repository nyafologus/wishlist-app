import React from "react";
import Wish from "./Wish";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export default function WishList({ wishes }) {
  return (
    <Paper>
      <List>
        {wishes.map(wish => (
          <>
            <ListItem>
              <ListItemText>
                <Wish content={wish.content} key={wish.id} done={wish.done} />
              </ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
