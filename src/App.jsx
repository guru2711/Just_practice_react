import { useState } from "react";

import "./App.css";

import Hoc from "./HOC/Hoc";
import FormattedComponent from "./HOC/formatted";
import CryptoPrices from "./Faac/CryptoPrices";
import { PriceTable } from "./Faac/PriceTable";

function App() {
  const [count, setCount] = useState(0);
  const Enhanced = Hoc(FormattedComponent);
  return (
    <>
      hello
      <div>
        <Enhanced />
        <CryptoPrices limit={5}>
          {(props) => <PriceTable {...props} />}
        </CryptoPrices>
      </div>
    </>
  );
}

export default App;
