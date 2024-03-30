import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../../components/MovieCard/MovieCard";
import { getFromFavorites } from "../../helper";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3em;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  flex-wrap: wrap;
`;

const FavoritePage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const tmp = getFromFavorites();
    setFavorites(tmp);
  }, []);

  console.log(favorites);

  return (
    <PageWrapper>
      <div></div>
      {favorites.map((data: number) => (
        <MovieCard id={data} />
      ))}
    </PageWrapper>
  );
};

export default FavoritePage;
