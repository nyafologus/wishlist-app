import React from "react";
import Wish from "./Wish";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

export default function WishList({ wishes, toggleWish, deleteWish, editWish }) {
  return (
    <Paper>
      <List>
        {wishes.map((wish, index) => (
          <div key={wish.id}>
            <Wish
              {...wish}
              toggleWish={toggleWish}
              deleteWish={deleteWish}
              editWish={editWish}
            />
            {/* only render a Divider if the index of
            this individual wish is not the last one */}
            {index < wishes.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Paper>
  );
}
