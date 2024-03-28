import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux"; // Update with your slice file name

import searchIcon from "../../assets/img/mainTable/search.svg";
import arrowDown from "../../assets/img/mainTable/arrowDown.svg";
import {
  updateSearchTerm,
  updateSortBy,
} from "../../store/features/moviesSlice";
import { sortOptions } from "../../shared/Types";

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
  border: 2px solid #ffffff;
  /* background-color: #ffffff; */

  border-radius: 10px;
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
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setInputValue(value);
    dispatch(updateSearchTerm(value));
  };

  const handleSortChange = (event: any) => {
    const { value } = event.target;
    dispatch(updateSortBy(value));
  };

  return (
    <SearchBarWrapper>
      <SearchInput
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Select onChange={handleSortChange}>
        {sortOptions.map((data, i) => (
          <option key={i} value={data.value}>
            {data.title}
          </option> // добавил ключ для каждого элемента списка
        ))}
      </Select>
    </SearchBarWrapper>
  );
};

export default SearchBar;
