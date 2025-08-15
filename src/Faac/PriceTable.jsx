export const PriceTable = ({ isLoading, items, fetchPrices }) => {
  if (isLoading) {
    return <p>Prices are being loaded. Please wait.</p>;
  }

  if (!items || items.length === 0) {
    return (
      <p>
        No data available. <button onClick={fetchPrices}>Try again!</button>
      </p>
    );
  }

  return (
    <table>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>
              {item.name} ({item.symbol})
            </td>
            <td>EUR {item.current_price}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="2">
            <button onClick={fetchPrices}>Reload</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
