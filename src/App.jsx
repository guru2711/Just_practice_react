import { useState } from "react";

import "./App.css";

import Hoc from "./HOC/Hoc";
import FormattedComponent from "./HOC/formatted";
import CryptoPrices from "./Faac/CryptoPrices";
import { PriceTable } from "./Faac/PriceTable";
import MouseTracker from "./RenderProps/RenderProps";

function App() {
  const [count, setCount] = useState(0);
  const Enhanced = Hoc(FormattedComponent);
  return (
    <>
      hello
      <div>
        <Enhanced />
        {/* <CryptoPrices limit={5}>
          {(props) => <PriceTable {...props} />}
        </CryptoPrices> */}
        <MouseTracker
          renderProp={({ x, y }) => (
            <h1>
              The mouse position is ({x}, {y})
            </h1>
          )}
        />
      </div>
    </>
  );
}

export default App;
