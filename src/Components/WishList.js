import React from "react";
import Wish from "./Wish";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

export default function WishList({ wishes, deleteWish }) {
  return (
    <Paper>
      <List>
        {wishes.map(wish => (
          <>
            <Wish
              id={wish.id}
              content={wish.content}
              done={wish.done}
              deleteWish={deleteWish}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
