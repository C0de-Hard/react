import { useState } from "react";
export default function fn() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <span className="count">{count}</span>
      <button className="btn" onClick={() => setCount(count+1)}>Increment</button>
    </div>
  );
}
