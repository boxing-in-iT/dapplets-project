import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import MainTable from "./components/MainTable/MainTable";
import SettingsSidebar from "./components/SettingsSidebar/SettingsSidebar";
import Header from "./components/Header/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import FavoritePage from "./pages/FavoritePage/FavoritePage";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <MainTable /> },
      { path: "/favorite", element: <FavoritePage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
