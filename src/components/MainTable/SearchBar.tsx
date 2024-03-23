import React from "react";
import styled from "styled-components";
import searchIcon from "../../assets/img/mainTable/search.svg";
import arrowDown from "../../assets/img/mainTable/arrowDown.svg";

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
`;

const SearchInput = styled.input`
  position: relative;
  flex: 1;
  padding: 1em;
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding-left: 40px; /* Adjust based on your desired icon offset */
  background: url(${searchIcon}) no-repeat;
  background-position: 10px center; /* Adjust the offset from the left edge */
  background-size: 15px 15px; /* Set the size of the image */
`;

const Select = styled.select`
  width: 15em;
  padding: 1em;
  border: 1px solid #ffffff;
  border-radius: 15px;
`;

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchInput placeholder="Search" />
      <Select>
        <option>Release date</option>
      </Select>
      <Select>
        <option>Descending</option>
      </Select>
    </SearchBarWrapper>
  );
};

export default SearchBar;
