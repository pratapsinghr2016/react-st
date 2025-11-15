import { useState } from "react";
import "./styles/calc-styles.css";
const BUTTONS = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "+",
  "-",
  "*",
  "/",
  "C",
  ".",
  "=",
];

const CalculatorApp = () => {
  const [inputChange, setInputChange] = useState("");

  const onClickHandler = (char) => {
    if (char === "=") {
      console.log("do calculculation");
      const response = eval(inputChange);
      setInputChange(response);
    } else if (char === "C") {
      setInputChange("");
    } else {
      setInputChange((prev) => (prev += char));
    }
  };

  return (
    <div className="container">
      <input
        value={inputChange}
        onChange={(e) => setInputChange(e.target.value)}
        className="input"
        type="text"
        name="calc-input"
        id="calc-input"
      />
      <div className="button-container">
        {BUTTONS.map((item) => (
          <button
            onClick={() => onClickHandler(item)}
            id={item}
            className="buttons"
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorApp;
