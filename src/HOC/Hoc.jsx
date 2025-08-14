import React from "react";

const Hoc = (WrappedComponent) => {
  const format = (props) => {
    const bold = (string) => <strong>{string}</strong>;
    const italic = (string) => <em>{string}</em>;

    return <WrappedComponent {...props} bold={bold} italic={italic} />;
  };

  return format;
};
export default Hoc;
