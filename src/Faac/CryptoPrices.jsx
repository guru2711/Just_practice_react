import { useState, useEffect } from "react";

const CryptoPrices = ({ limit, children }) => {
  const [data, setData] = useState({
    items: [],
    isLoading: false,
  });
  const [error, setError] = useState(null);

  const { items, isLoading } = data;

  useEffect(() => {
    console.log("useEffect ran");
    fetchPrices();
  }, [limit]);

  const fetchPrices = async () => {
    try {
      setData((prev) => ({ ...prev, isLoading: true }));

      const response = await fetch(
        `https://ed-4887612577415168.educative.run:3000/api/v3/coins/markets?vs_currency=eur&per_page=${limit}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log("Fetched data:", json);

      setData({ items: json, isLoading: false });
      setError(null);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
      setData((prev) => ({ ...prev, isLoading: false }));
    }
  };

  console.log("CryptoPrices rendered with", { isLoading, items, error });

  if (error) return <div>Error: {error}</div>;

  if (typeof children !== "function") {
    return <div>Children is not a function!</div>; // helpful for debug
  }

  return children({
    isLoading,
    items,
    fetchPrices,
  });
};

export default CryptoPrices;
