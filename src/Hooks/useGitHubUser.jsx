import { useEffect, useState, useReducer } from "react";
import axios from "axios";
const initialState = {
  isLoading: true,
  data: null,
  isError: false,
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case "REQ_START":
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: null,
      };
    case "REQ_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "REQ_ERR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: null,
      };
    default:
      throw new Error("Unknown action");
  }
};

const useGitHubUser = (account) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  useEffect(() => {
    if (!account) return;

    const fetchUser = async () => {
      dispatch({ type: "REQ_START" });

      try {
        const access_token = import.meta.env.VITE_GITHUB_API;
        const response = await axios.get(
          `https://api.github.com/users/${account}`
          // {
          //   headers: {
          //     Authorization: `token ${access_token}`,
          //   },
          // }
        );

        dispatch({
          type: "REQ_SUCCESS",
          payload: response.data,
        });
      } catch (error) {
        console.error("Error fetching GitHub user:", error);
        dispatch({ type: "REQ_ERR" });
      }
    };

    fetchUser();
  }, [account]);

  return state;
};

export default useGitHubUser;
