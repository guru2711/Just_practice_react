import { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      if (state.count > 0) {
        return { count: state.count - 1 };
      } else {
        return { count: 0 };
      }
    default:
      throw new Error("Unknown action");
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
    </>
  );
};

export default Counter;
