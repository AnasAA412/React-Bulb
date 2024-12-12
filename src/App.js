import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

const App = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="container">
      <div>
        <RoundedDiv design={isOn ? "TurnOn" : "TurnOff"}></RoundedDiv>
        <button className="btn" onClick={() => setIsOn(!isOn)}>
          {isOn ? "Turn Off" : "Turn On"}
        </button>
        <h2>React Bulb</h2>
      </div>
    </div>
  );
};

const RoundedDiv = styled.div`
  height: 220px;
  width: 140px;
  border-radius: 60px;

  ${(props) => {
    switch (props.design) {
      case "TurnOff":
        return `background-color: gray;`;
      case "TurnOn":
        return `background-color: red;`;
    }
  }}
`;

export default App;
