import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved ? JSON.parse(saved) : 0;
  });

  const [isDark, setIsDark] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme ? JSON.parse(savedTheme) : false;
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    document.body.className = isDark ? "dark" : "";
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <div className="container">
      <h1>React 89</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>

      <button onClick={() => setIsDark((prev) => !prev)}>Toggle Theme</button>
    </div>
  );
}

export default App;
