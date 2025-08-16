import { useState, useEffect } from "react";

const MouseTracker = ({ renderProp }) => {
  const [state, setState] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setState({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return renderProp(state);
};

export default MouseTracker;
