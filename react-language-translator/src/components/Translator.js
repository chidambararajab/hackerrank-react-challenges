import React, { useState } from "react";

const Translator = ({ translations }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (e) => {
    const userInput = e.target.value;
    setInput(userInput);

    if (translations.has(userInput)) {
      setOutput(translations.get(userInput));
    } else {
      setOutput(""); // Clear output if no match found
    }
  };

  return (
    <React.Fragment>
      <div className="controls">
        <div className="input-container">
          <span>input:</span>
          <input
            type="text"
            className="text-input"
            data-testid="text-input"
            onChange={handleChange}
            value={input}
          />
        </div>
        <div className="input-container">
          <span>output:</span>
          <input
            type="text"
            className="text-output"
            data-testid="text-output"
            readOnly
            value={output}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Translator;
