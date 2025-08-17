import { useState } from "react";

import "./App.css";
import "./cursor.css";

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

        <MouseTracker
          renderProp={({ x, y }) => (
            <h1>
              The mouse position is ({x}, {y})
              <div
                className="cursor-dot"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                }}
              />
            </h1>
          )}
        />
      </div>
    </>
  );
}

export default App;
