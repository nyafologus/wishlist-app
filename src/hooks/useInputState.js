import React, { useState } from "react";

export default initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = event => setValue(event.target.value);

  return [value, handleChange];
};
