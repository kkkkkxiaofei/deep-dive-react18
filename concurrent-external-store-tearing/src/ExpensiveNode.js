// This component is to be used as a large computing for
// simulating expensive rednering
import { useRef, useEffect } from "react";

const useMouse = () => {
  const x = useRef(0);
  useEffect(() => {
    const callback = (e) => {
      console.log("mousemove");
      x.current = e.clientX;
    };
    window.addEventListener("mousemove", callback);
    return () => {
      console.log("unmount");
      window.removeEventListener("mousemove", callback);
    };
  }, []);
  return x.current;
};

export const Node = ({ name }) => {
  const x = useMouse();
  const rgb = parseInt(x) % 255;

  console.log(`rednering node`);

  const start = performance.now();
  while (performance.now() - start < 1) {}

  const color = `rgb(${rgb}, ${rgb}, ${rgb})`;
  console.log(color);
  return <div style={{ color }}>{`${name}(x: ${x})`}</div>;
};

export const ExpensiveNode = () => {
  console.log("rednering ExpensiveNode");
  return (
    <div>
      {Array(25)
        .fill()
        .map((val, index) => (
          <Node name={`Node${index}`} />
        ))}
    </div>
  );
};
