import {useContext} from "react";
import {ThemeContext} from "./ThemeProvider";

const Context = () => {
 const {theme, toggleTheme} = useContext(ThemeContext);
 
 const style = {
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default Context;