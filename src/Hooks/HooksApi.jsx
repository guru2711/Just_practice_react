import { useState, useEffect } from "react";
import CustomHook from "./CustomHook";

const HooksApi = () => {
  const [state, setState] = useState(null);
  const [account, setAccount] = useState("");
  const accountData = CustomHook(account);

  const IncCounter = () => {
    setState(state + 1);
  };
  const DecCounter = () => {
    setState(state - 1);
  };

  useEffect(() => {
    document.title = state;

    return () => {
      document.title = "Learn";
    };
  }, [state]);
  return (
    <>
      <div>
        counter: <b>{state}</b>
        <input onChange={(e) => setAccount(e.target.value)} />
        <div>
          <button onClick={DecCounter}>-</button>
          <button onClick={IncCounter}>+</button>
        </div>
        <div>
          {!account ? (
            <p>Please provide a GitHub username</p>
          ) : (
            <p>
              GitHub user {accountData.name} ({accountData.login}) has{" "}
              {accountData.public_repos} public repositories.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default HooksApi;
