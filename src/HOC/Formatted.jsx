import React from "react";

const FormattedComponent = ({ bold, italic }) => {
  return (
    <div>
      This text is {bold("bold")} and {italic("italic")}.
    </div>
  );
};

export default FormattedComponent;
