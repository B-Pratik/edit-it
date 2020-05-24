import "./style.css";

import { useRef, useEffect } from "preact/hooks";
import Toolkit from "./components/Toolkit";

const App = () => {
  const canvas = useRef(null);
  const ctx = useRef(null);

  useEffect(() => {
    ctx.current = canvas.current.getContext("2d");
  }, []);

  return (
    <>
      <Toolkit canvas={canvas} context={ctx} />
      <div class="container">
        <canvas ref={canvas} />
      </div>
    </>
  );
};

export default App;
