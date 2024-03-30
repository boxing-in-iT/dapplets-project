import React from "react";
import styled from "styled-components";
import { useGetMovieByIdQuery } from "../../store/services/tmdbApi";

const CardWrapper = styled.div`
  width: 15em;
  height: 20em;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5em;

  cursor: pointer;
  overflow-y: hidden;
  gap: 0.5em;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  img {
    width: 10em;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

interface MovieCardProps {
  id: number;
}

const MovieCard = (props: MovieCardProps) => {
  const { id } = props;

  const { data, isFetching, isError } = useGetMovieByIdQuery(id);

  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <CardWrapper>
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
      <div>{data.title}</div>
      <Wrapper>
        <p>{data.release_date}</p>
        <p>{data.vote_average}</p>
      </Wrapper>
      <p>{data.overview}</p>
    </CardWrapper>
  );
};

export default MovieCard;
