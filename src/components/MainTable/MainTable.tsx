import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import TableItem from "./TableItem";

const MainTableWrapper = styled.div`
  width: 1100px;

  background: linear-gradient(
    rgba(185, 251, 255, 0.2),
    rgba(227, 220, 255, 0.2)
  );
  padding: 2em;
  border-radius: 15px;
`;

const TableContent = styled.div`
  min-height: 25vh;
  max-height: 50vh;
  overflow-y: auto;
`;

const MainTable = () => {
  return (
    <MainTableWrapper>
      <SearchBar />
      <hr
        style={{
          marginTop: "1.5em",
          height: "3px",
          background: "#FFFFFF",
          border: "none",
        }}
      />
      <TableContent>
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
      </TableContent>
    </MainTableWrapper>
  );
};

export default MainTable;
