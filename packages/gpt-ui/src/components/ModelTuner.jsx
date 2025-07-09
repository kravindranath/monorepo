import React, { useState } from "react";

const rowStyle = { display: "flex", flexDirection: "column", gap: "0.5rem" };

export default function ModelTuner({
  onChange,
  temperatureMin = 0,
  temperatureMax = 1,
  temperatureStep = 0.01,
  topPMin = 0,
  topPMax = 1,
  topPStep = 0.01,
  maxTokensMin = 1,
  maxTokensMax = 8192,
  maxTokensStep = 1,
}) {
  const [temperature, setTemperature] = useState(0.7);
  const [topP, setTopP] = useState(1.0);
  const [maxTokens, setMaxTokens] = useState(1024);

  useEffect(() => {
    onChange?.({ temperature, topP, maxTokens });
  }, [temperature, topP, maxTokens]);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        maxWidth: "400px",
      }}
    >
      <h3>GPT Model Tuner</h3>
      <br />
      <div style={rowStyle}>
        <label htmlFor="temperature">
          Temperature ({temperature.toFixed(2)})
        </label>
        <input
          id="temperature"
          type="range"
          min={temperatureMin}
          max={temperatureMax}
          step={temperatureStep}
          value={temperature}
          onChange={(e) => {
            setTemperature(parseFloat(e.target.value));
            handleChange();
          }}
        />
      </div>

      <div style={rowStyle}>
        <label htmlFor="topP">Top P ({topP.toFixed(2)})</label>
        <input
          id="topP"
          type="range"
          min={topPMin}
          max={topPMax}
          step={topPStep}
          value={topP}
          onChange={(e) => {
            setTopP(parseFloat(e.target.value));
            handleChange();
          }}
        />
      </div>

      <div style={rowStyle}>
        <label htmlFor="maxTokens">Max Tokens</label>
        <input
          id="maxTokens"
          type="number"
          value={maxTokens}
          min={maxTokensMin}
          max={maxTokensMax}
          step={maxTokensStep}
          onChange={(e) => {
            setMaxTokens(parseInt(e.target.value, 10));
            handleChange();
          }}
        />
      </div>
    </div>
  );
}
