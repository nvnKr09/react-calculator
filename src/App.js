import { useState } from "react";
import "./App.css";

function App() {
  // State for input values
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  // State for displaying status, message, and result
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  // Function to perform calculations based on the operation type
  function calculate(type) {
    // Parsing input values as floating-point numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Validation checks for empty input fields and non-numeric input
    if (num1.trim() === "") {
      setStatus("Error!");
      setMessage("Num1 Cannot Be Empty");
      setResult(null);
      return;
    }
    if (num2.trim() === "") {
      setStatus("Error!");
      setMessage("Num2 Cannot Be Empty");
      setResult(null);
      return;
    }
    if (isNaN(number1) || isNaN(number2)) {
      setStatus("Error!");
      setMessage("Please enter a valid Number");
      setResult(null);
      return;
    }
    // Validation check for division by zero
    if (type === "/" && number2 === 0) {
      setStatus("Error!");
      setMessage("Cannot divide by 0");
      setResult(null);
      return;
    }

    // Performing calculations based on the operation type
    switch (type) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "*":
        setResult(number1 * number2);
        break;
      case "/":
        setResult(number1 / number2);
        break;
      default:
        return;
    }

    // Setting success status and clearing messages
    setStatus("Success!");
    setMessage("");

    // Resetting input values
    setNum1("");
    setNum2("");
  }

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <input
        type="text"
        placeholder="Num 1"
        onChange={(e) => setNum1(e.target.value)}
        value={num1}
      />
      <input
        type="text"
        placeholder="Num 2"
        onChange={(e) => setNum2(e.target.value)}
        value={num2}
      />
      <div className="buttons-container">
        <button
          type="button"
          className="button"
          onClick={() => calculate("+")}
        >
          +
        </button>
        <button
          type="button"
          className="button"
          onClick={() => calculate("-")}
        >
          -
        </button>
        <button
          type="button"
          className="button"
          onClick={() => calculate("*")}
        >
          *
        </button>
        <button
          type="button"
          className="button"
          onClick={() => calculate("/")}
        >
          /
        </button>
      </div>
      <div className="message-container">
        {status && (
          <div>
            {status === "Error!" ? (
              <p className="error">{status}</p>
            ) : (
              <p className="success">{status}</p>
            )}
            {message ? <p>{message}</p> : <p>Result = {result}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
