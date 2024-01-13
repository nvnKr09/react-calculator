import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  function calculate(type) {

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1)) {
      setStatus("Error!");
      setMessage("Num1 Cannot Be Empty");
      setResult(null);
      return;
    }
    if (isNaN(number2)) {
      setStatus("Error!");
      setMessage("Num2 Cannot Be Empty");
      setResult(null);
      return;
    }

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
    setStatus("Success!");
    setMessage("");

    // resetting input values
    setNum1("");
    setNum2("");
  }

  return (
    <div className="App">
      <div className="calculator-container">
        <h1>React Calculator</h1>
        <input
          type="number"
          placeholder="Num 1"
          onChange={(e) => setNum1(e.target.value)}
          value={num1}
        />
        <input
          type="number"
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
        <div className="message-conainer">
          {status && (
            <div>
              {status === "Error!" ? (<p className="error">{status}</p>) : (<p className="success">{status}</p>)}
              {message ? (<p>{message}</p>) : (<p>Result - {result}</p>)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
