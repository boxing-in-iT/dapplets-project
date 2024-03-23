import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import MainTable from "./components/MainTable/MainTable";

const Page = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Page>
      <Sidebar />
      <Content>
        <MainTable />
      </Content>
    </Page>
  );
}

export default App;
