import React from "react";
import EditWishForm from "./EditWishForm";
import useToggleState from "../hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

export default function Wish({
  content,
  done,
  id,
  toggleWish,
  deleteWish,
  editWish
}) {
  const [isEditing, toggleIsEditing] = useToggleState(false);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditWishForm
          content={content}
          editWish={editWish}
          id={id}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  checked={done}
                  onClick={() => toggleWish(id)}
                />
              }
            />
          </FormGroup>
          <ListItemText style={{ textDecoration: done && "line-through" }}>
            {content}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="edit" onClick={() => toggleIsEditing()}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => deleteWish(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
