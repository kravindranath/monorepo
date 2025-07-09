import React, { useState } from "react";

export default function ModelTuner({ onChange }) {
  const [temperature, setTemperature] = useState(0.7);
  const [topP, setTopP] = useState(1.0);
  const [maxTokens, setMaxTokens] = useState(1024);

  const handleChange = () => {
    onChange?.({ temperature, topP, maxTokens });
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        fontFamily: "sans-serif",
      }}
    >
      <h3>GPT Model Tuner</h3>

      <label>
        Temperature ({temperature.toFixed(2)})
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={temperature}
          onChange={(e) => {
            setTemperature(parseFloat(e.target.value));
            handleChange();
          }}
        />
      </label>

      <br />
      <br />

      <label>
        Top P ({topP.toFixed(2)})
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={topP}
          onChange={(e) => {
            setTopP(parseFloat(e.target.value));
            handleChange();
          }}
        />
      </label>

      <br />
      <br />

      <label>
        Max Tokens
        <input
          type="number"
          value={maxTokens}
          min="1"
          max="8192"
          onChange={(e) => {
            setMaxTokens(parseInt(e.target.value, 10));
            handleChange();
          }}
        />
      </label>
    </div>
  );
}
