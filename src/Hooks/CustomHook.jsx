import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const CustomHook = (account) => {
  const [accountData, setAccountData] = useState({});
  useEffect(() => {
    if (!account) {
      return;
    }

    const fetchUser = async () => {
      try {
        const access_token = import.meta.env.VITE_GITHUB_API;
        const response = await axios.get(
          `https://api.github.com/users/${account}`
          //   {
          //     headers: {
          //       Authorization: `token ${access_token}`,
          //     },
          //   }
        );
        console.log(response);
        setAccountData(response.data);
      } catch (error) {
        console.error("Error fetching GitHub user:", error);
      }
    };

    fetchUser();
  }, [account]);

  return accountData;
};

export default CustomHook;
