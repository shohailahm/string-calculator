import React, { useState } from "react";
import "./App.css"; // Import the CSS file
import { add } from "./stringCalculator";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="title">String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers separated by comma or newline"
        className="input-box"
      />
      <button onClick={handleCalculate} className="calculate-button">
        Calculate
      </button>
      {error && <div className="error-message">{error}</div>}
      {result !== null && (
        <div className="result-message">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
}

export default App;
