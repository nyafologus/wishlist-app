import React from "react";
import value from "../hooks/useInputState";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";

export default function WishForm() {
  const [value, handleChange] = useInputState("");

  return (
    <Paper>
      <TextField value={value} onChange={handleChange} />
    </Paper>
  );
}
