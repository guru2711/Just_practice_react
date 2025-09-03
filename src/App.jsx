import { useState, useContext, useRef } from "react";

import "./App.css";
import "./cursor.css";

import Hoc from "./HOC/Hoc";
import FormattedComponent from "./HOC/formatted";
import CryptoPrices from "./Faac/CryptoPrices";
import { PriceTable } from "./Faac/PriceTable";
import MouseTracker from "./RenderProps/RenderProps";
import CustomInput from "./CustomInput/CustomInput";
import { ThemeContext } from "./ContextApi/ThemeProvider";
import RenderPortal from "./Portal/RenderPortal";
import Modal from "./Portal/Modal";
import HooksApi from "./Hooks/HooksApi";
import Counter from "./Reducer/Reducer";
import FormField from "./CallBack/FormField";

function App() {
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef();
  const Enhanced = Hoc(FormattedComponent);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px",
    textAlign: "center",
    border: "none",
  };
  const handleSubmit = () => {
    const value = inputRef.current.value;
    console.log(value);
    if (!value) {
      inputRef.current.focus();
    } else {
      alert(value);
    }
  };
  return (
    <>
      <div style={style}>
        hello
        <button onClick={() => setIsModalOpen(true)}>open</button>
        <h1>{theme.toUpperCase()} MODE</h1>
        <button onClick={toggleTheme}>{theme == "dark" ? "🌚" : "🌙"}</button>
        <Enhanced />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
          <CustomInput
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit </button>
          <div>{input}</div>
          <RenderPortal />
        </Modal>
        {/* <HooksApi /> */}
        <FormField />
        <Counter />
      </div>
    </>
  );
}

export default App;
