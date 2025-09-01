import { useState } from "react";

const HooksApi = () => {
  const [state, setState] = useState(null);

  const IncCounter = () => {
    setState(state + 1);
  };
  const DecCounter = () => {
    setState(state - 1);
  };
  return (
    <>
      <div>
        counter: <b>{state}</b>
        <div>
          <button onClick={DecCounter}>-</button>
          <button onClick={IncCounter}>+</button>
        </div>
      </div>
    </>
  );
};

export default HooksApi;
