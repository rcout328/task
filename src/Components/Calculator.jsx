import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

function Calculator() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (value) => {
    setCurrentOperand(currentOperand + value);
  };

  const handleOperatorClick = (op) => {
    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand(""); // Clear current operand for next number
  };

  const handleClearClick = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation(null);
  };

  const handleCalculate = () => {
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    let result = "";

    switch (operation) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "/":
        if (curr === 0) {
          result = "Error: Division by zero";
        } else {
          result = prev / curr;
        }
        break;
      default:
        result = "Error";
    }

    setCurrentOperand(result.toString());
    setPreviousOperand("");
    setOperation(null);
  };

  return (
    <div className="calculator">
      <Display value={currentOperand} />
      <div className="button-container">
        <Button onClick={() => handleNumberClick("7")}>7</Button>
        <Button onClick={() => handleNumberClick("8")}>8</Button>
        <Button onClick={() => handleNumberClick("9")}>9</Button>
        <Button onClick={() => handleOperatorClick("/")}>/</Button>
        <Button onClick={() => handleNumberClick("4")}>4</Button>
        <Button onClick={() => handleNumberClick("5")}>5</Button>
        <Button onClick={() => handleNumberClick("6")}>6</Button>
        <Button onClick={() => handleOperatorClick("*")}>*</Button>
        <Button onClick={() => handleNumberClick("1")}>1</Button>
        <Button onClick={() => handleNumberClick("2")}>2</Button>
        <Button onClick={() => handleNumberClick("3")}>3</Button>
        <Button onClick={() => handleOperatorClick("-")}>-</Button>
        <Button onClick={() => handleClearClick()}>C</Button>
        <Button onClick={() => handleNumberClick("0")}>0</Button>
        <Button onClick={() => handleNumberClick(".")}>.</Button>
        <Button onClick={handleCalculate}>=</Button>
        <Button onClick={() => handleOperatorClick("+")}>+</Button>
      </div>
    </div>
  );
}

export default Calculator;
