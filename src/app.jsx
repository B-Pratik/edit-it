import { useEffect, useRef } from 'preact/hooks'
import Toolkit from "./components/Toolkit"

export function App() {
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
}
