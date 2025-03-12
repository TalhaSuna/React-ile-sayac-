import React from "react";
import Counter from "./Counter";

function App() {
  const default_value = 5;
  return (
    <div>
      <Counter number={default_value} />
    </div>
  );
}

export default App;
