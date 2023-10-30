import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [calculation, setCalculation] = useState("");

  const clearValue = () => {
    setInputValue("");
    setCalculation("");
  };
  const handleButtonClick = (value) => {
    setCalculation(calculation + value);
  };

  const handleAdd = () => {
    setInputValue("");
    setCalculation(calculation + "+");
  };
  const handleSub = () => {
    setInputValue("");
    setCalculation(calculation + "-");
  };
  const handleMultiple = () => {
    setInputValue("");
    setCalculation(calculation + "*");
  };
  const handleDivide = () => {
    setInputValue("");
    setCalculation(calculation + "/");
  };

  const handleEquals = () => {
    if (calculation) {
      try {
        const result = eval(calculation);
        setInputValue(result.toString());
        setCalculation("");
      } catch (error) {
        setInputValue("Error");
      }
    } else {
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg border h-[300px] w-[350px] rounded-lg">
        <input
          type="text"
          placeholder="0"
          value={calculation ? `${calculation}` : inputValue}
          readOnly
          className="p-4 w-full outline-none border text-right text-lg "
        />
        <div className="flex flex-wrap items-center justify-center">
          <button
            className="border w-16 h-10 mt-3 mx-2"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="border w-16 h-10 mt-3 mx-2"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="border w-16 h-10 mt-3 mx-2"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button className="border w-16 h-10 mt-3 mx-2" onClick={handleAdd}>
            +
          </button>
          <button
            className="border w-16 h-10 mt-3 mx-2"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="border w-16 h-10 mt-3 mx-2"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="border w-16 h-10 mt-3 mx-2"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button className="border w-16 h-10 mt-3 mx-2" onClick={handleSub}>
            -
          </button>
          <button
            className="border w-16 h-10 mt-3 mx-2"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="border w-16 h-10 mt-3 mx-2"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="border w-16 h-10 mt-3 mx-2"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className="border w-16 h-10 mt-3 mx-2"
            onClick={handleMultiple}
          >
            *
          </button>
          <button className="border w-16 h-10 mt-3 mx-2" onClick={clearValue}>
            c
          </button>
          <button
            className="border w-16 h-10 mt-3 mx-2"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="border w-16 h-10 mt-3 mx-2"
            onClick={() => handleEquals()}
          >
            =
          </button>
          <button className="border w-16 h-10 mt-3 mx-2" onClick={handleDivide}>
            /
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
