import React from "react";
import styled from "styled-components";
import "./App.css";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return <AppContainer>Hello world!</AppContainer>;
}

export default App;
