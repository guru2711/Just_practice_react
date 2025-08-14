import { useState } from "react";

import "./App.css";

import Hoc from "./HOC/Hoc";
import FormattedComponent from "./HOC/formatted";

function App() {
  const [count, setCount] = useState(0);
  const Enhanced = Hoc(FormattedComponent);
  return (
    <>
      hello
      <div>
        <Enhanced />
      </div>
    </>
  );
}

export default App;
