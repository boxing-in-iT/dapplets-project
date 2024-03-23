import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";

const Page = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background-color: blue;
`;

function App() {
  return (
    <Page>
      <Sidebar />
      <Content></Content>
    </Page>
  );
}

export default App;
