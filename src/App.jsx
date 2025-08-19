import { useState,useContext } from "react";

import "./App.css";
import "./cursor.css";

import Hoc from "./HOC/Hoc";
import FormattedComponent from "./HOC/formatted";
import CryptoPrices from "./Faac/CryptoPrices";
import { PriceTable } from "./Faac/PriceTable";
import MouseTracker from "./RenderProps/RenderProps";
import {ThemeContext} from "./ContextApi/ThemeProvider";
import Context from "./ContextApi/Context";

function App() {
  const [count, setCount] = useState(0);
  const Enhanced = Hoc(FormattedComponent);
  const {theme, toggleTheme} = useContext(ThemeContext);

  const style = {
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center",
    border:"none",
  };


  return (
    <>
      <div style={style}>
   
      hello
      
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>{theme == "dark"? "🌚":"🌙"}</button>
   
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
