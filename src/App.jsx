import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-600 text-orange-100 text-center w-full text-3xl">
        Hello React Router
      </h1>
    </>
  );
}

export default App;
