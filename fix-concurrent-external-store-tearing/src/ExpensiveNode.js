// This component is to be used as a large computing for
// simulating expensive rednering
import { useState, startTransition } from "react";
import { useSelector } from "./store";

export const Text = ({ logEnabled = false, className }) => {
  const { x, y } = useSelector((state) => state);

  logEnabled && console.log("rendering <Text />");

  const start = performance.now();
  while (performance.now() - start < 2) {}

  const backgroundColor = `rgb(${x % 255}, ${y % 255}, 255)`;

  return (
    <div
      className={className}
      style={{ backgroundColor }}
    >{`(${x}, ${y})`}</div>
  );
};

export const ExpensiveNode = () => {
  const [toggle, setToggle] = useState(false);
  const [concurrent, setConcurrent] = useState(true);
  console.log("rednering <ExpensiveNode />");

  return (
    <div className="container">
      <div className="panel">
        <div className="box">
          <button
            onClick={() => {
              concurrent
                ? startTransition(() => setToggle(!toggle))
                : setToggle(!toggle);
            }}
          >
            toggle
          </button>
        </div>
        <div className="box">
          <label>enbale concurrency</label>
          <input
            type="checkbox"
            checked={concurrent}
            onChange={() => setConcurrent(!concurrent)}
          />
        </div>
      </div>
      <div className="display">
        <div className="table">
          {toggle &&
            Array(100)
              .fill()
              .map((val, index) => (
                <Text logEnabled className="cell" key={index} />
              ))}
        </div>
      </div>
    </div>
  );
};
