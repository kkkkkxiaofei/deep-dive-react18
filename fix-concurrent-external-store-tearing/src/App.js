import { useEffect } from "react";
import { ExpensiveNode } from "./ExpensiveNode";
import { store } from "./store";
import "./styles.css";

export default function App() {
  // assuming there are multiple tasks
  // starting to update external store simultaneously
  // once <App /> has been mounted, that's why I'm using
  // mouseevent here
  useEffect(() => {
    const callback = (e) => {
      console.log("mousemove event");
      store.dispatch((state) => ({ ...state, x: e.clientX, y: e.clientY }));
    };

    window.document.addEventListener("mousemove", callback);
    return () => window.document.removeEventListener("mousemove", callback);
  }, []);

  console.log("rendring <App />");

  return (
    <div className="App">
      <ExpensiveNode />
    </div>
  );
}
