import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import TableItem from "./TableItem";
import {
  useGetGenresQuery,
  useGetMovieByNameQuery,
  useGetMoviesQuery,
} from "../../store/services/tmdbApi";
import { useSelector } from "react-redux";
import { Movie } from "../../shared/Types";

const MainTableWrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 5em;
  width: 85%;

  background: linear-gradient(
    rgba(185, 251, 255, 0.2),
    rgba(227, 220, 255, 0.2)
  );
  padding: 2em;
  border-radius: 15px;
  backdrop-filter: blur(10px);
`;

const TableContent = styled.div`
  min-height: 25vh;
  max-height: 75vh;
  /* max-height: 125vh; */
  overflow-y: auto;
`;

const MainTable = () => {
  const { searchTerm, sortBy } = useSelector((state: any) => state.movie);

  const { data: movies, isFetching, isError } = useGetMoviesQuery(sortBy);
  const { data: genresData } = useGetGenresQuery({});
  const {
    data: moviesByName,
    isFetching: loading,
    isError: error,
  } = useGetMovieByNameQuery(searchTerm);

  // Проверяем, что movies не равно undefined и movies.results не равно undefined
  if (!movies || !movies.results) {
    return null;
  }

  if (!genresData || !genresData.genres) {
    return null;
  }

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
        {searchTerm === ""
          ? movies.results.map((data: Movie) => (
              <TableItem
                key={data.id}
                movies={data}
                genres={genresData.genres}
              />
            ))
          : moviesByName.results.map((data: Movie) => (
              <TableItem
                key={data.id}
                movies={data}
                genres={genresData.genres}
              />
            ))}
      </TableContent>
    </MainTableWrapper>
  );
};

export default MainTable;
