import { useState, useEffect } from "react";
import useGitHubUser from "./useGitHubUser";

const HooksApi = () => {
  const [account, setAccount] = useState("");
  const { isLoading, data, isError } = useGitHubUser(account);

  return (
    <div>
      <input
        placeholder="Enter GitHub username"
        onChange={(e) => setAccount(e.target.value.trim())}
      />
      <div>
        {!account && <p>Please provide a GitHub username</p>}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching user. Please try again.</p>}
        {data && (
          <p>
            GitHub user {data.name} ({data.login}) has {data.public_repos}{" "}
            public repositories.
          </p>
        )}
      </div>
    </div>
  );
};

export default HooksApi;
