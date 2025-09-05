import { useState, useCallback } from "react";
import Field from "./Field";
import FibonacciNumber from "../Memo/Fib";

const FormField = () => {
  const [state, setState] = useState({ name: "" });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  return (
    <>
      <Field name="name" onChange={handleChange} />
      <FibonacciNumber value={state.name} />
    </>
  );
};

export default FormField;
