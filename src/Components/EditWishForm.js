import React from "react";
import useInputState from "../hooks/useInputState";
import TextField from "@material-ui/core/TextField";

export default function EditWishForm({
  content,
  id,
  editWish,
  toggleIsEditing
}) {
  const [value, handleChange, reset] = useInputState(content);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        editWish(id, value);
        reset();
        toggleIsEditing();
      }}
      style={{ marginLeft: "3rem", width: "80%" }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        fullWidth
        autoFocus
      />
    </form>
  );
}
