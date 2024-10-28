import React, { useState } from "react";

const TextEditor = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const appendInput = () => {
    setOutput([...output, input]);
    setInput("");
  };

  const resetInput = () => {
    setOutput(output.slice(0, -1));
  };

  return (
    <React.Fragment>
      <div className="controls">
        <input
          className="word-input"
          type="text"
          data-testid="word-input"
          onChange={handleChange}
          value={input}
        />
        <button
          data-testid="append-button"
          onClick={appendInput}
          disabled={!input}
        >
          Append
        </button>
        <button
          data-testid="undo-button"
          onClick={resetInput}
          disabled={output.length === 0}
        >
          Undo
        </button>
      </div>
      <div className="text-field" data-testid="text-field">
        {output.map((value, index) => (
          <text key={index}>{value} </text>
        ))}
      </div>
    </React.Fragment>
  );
};

export default TextEditor;
