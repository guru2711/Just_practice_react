import React from "react";

const Field = React.memo(({ name, onChange }) => {
  console.log("name");
  return (
    <>
      <input onChange={onChange} placeholder="Type..." />
    </>
  );
});

export default Field;
