import React from "react";

const Field = React.memo(({ name, onChange }) => {
  console.log("Field rendered with name:", name);

  return (
    <input
      type="number"
      name={name}
      min={2}
      max={60}
      onChange={onChange}
      placeholder="Enter..."
    />
  );
});

export default Field;
