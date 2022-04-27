import { useReducer, startTransition, useState } from "react";
import { ExpensiveNode } from "./ExpensiveNode";
import "./styles.css";

export default function App() {
  const [, forceRender] = useReducer((i) => i + 1, 0);
  const [concurrent, toggleConcurrent] = useState(false);
  return (
    <div className="App">
      <div className="panel">
        <div className="box">
          <button
            onClick={() => {
              concurrent ? startTransition(forceRender) : forceRender();
            }}
          >
            show position
          </button>
        </div>
        <div className="box">
          <label>enbale concurrency</label>
          <input
            type="checkbox"
            onChange={() => toggleConcurrent(!concurrent)}
          />
        </div>
      </div>
      <div className="display">
        <ExpensiveNode />
      </div>
    </div>
  );
}
