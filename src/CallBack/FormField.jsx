import { useState } from "react";
import Field from "./Field";
import { useCallback } from "react";

const FormField = () => {
  const [state, setState] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setState((state) => ({
      ...state,
      name: value,
    }));
  }, []);

  return (
    <>
      {state.name}
      <Field name={"state"} onChange={handleChange} />
    </>
  );
};

export default FormField;
