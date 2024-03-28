import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import MainTable from "../components/MainTable/MainTable";
import SettingsSidebar from "../components/SettingsSidebar/SettingsSidebar";
import { Outlet } from "react-router-dom";

const Page = styled.div`
  position: relative;
  display: flex;
  /* background-color: white; */
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  return (
    <div>
      <Page>
        <Sidebar />
        <Content>
          <Header />
          {/* <MainTable /> */}
          <Outlet />
        </Content>
        <SettingsSidebar />
      </Page>
    </div>
  );
};

export default Main;
