import React, { useEffect, useState } from "react";
import styled from "styled-components";
import hamburger from "../../assets/img/mainTable/hamburger.svg";
import Tag from "../Tags/Tag";
import { Genre, Movie } from "../../shared/Types";
import {
  addToFavorites,
  getFromFavorites,
  removeFromFavorites,
} from "../../helper";

interface TableItemProps {
  movies: Movie;
  genres: Genre[];
}

const TableItem = (props: TableItemProps) => {
  const { movies, genres } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFromFavorites();
    if (favorites.includes(movies.id)) {
      setIsFavorite(true);
    }
  }, []);

  const handleFavoriteToggle = (id: number) => {
    if (isFavorite) {
      removeFromFavorites(id);
      setIsFavorite(false);
    } else {
      addToFavorites(id);
      setIsFavorite(true);
    }
  };

  return (
    <TableItemWrapper>
      <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
        {/* <HamburgerImage src={hamburger} alt="hamburger" /> */}
        <CompanyImage
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          alt="company image"
        />
        <MainInfo>
          <h3>{movies.original_title}</h3>
          <p>{movies.vote_average}</p>
        </MainInfo>
      </div>

      <DescriptionWrapper>
        <Description>
          {movies.overview && movies.overview.length > 100
            ? movies.overview.substring(0, 97) + "..."
            : movies.overview}
        </Description>
      </DescriptionWrapper>
      <p style={{ fontSize: "14px", color: "#BBBBBB" }}>
        {movies.release_date}
      </p>
      <Genres>
        {movies.genre_ids.map((genreId: number) => {
          const genre = genres.find((genre: Genre) => genre.id === genreId);
          return genre ? <Tag key={genre.id} text={genre.name} /> : null;
        })}
      </Genres>
      <Button onClick={() => handleFavoriteToggle(movies.id)}>
        {isFavorite ? "Remove from favorite" : "Add to favorite"}
      </Button>
    </TableItemWrapper>
  );
};

const TableItemWrapper = styled.div`
  margin-top: 2em;
  width: 95%;
  display: flex;
  align-items: center;
  gap: 1em;
  justify-content: space-between;
  background-color: linear-gradient(
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  border: 3px solid white;
  border-radius: 20px;
  padding: 1em 0.5em 1em 0.5em;
`;

const HamburgerImage = styled.img`
  width: 18px;
`;

const CompanyImage = styled.img`
  width: 5em;
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 12px;
    color: #999999;
  }
`;

const DescriptionWrapper = styled.div`
  width: 15em;
`;

const Description = styled.p`
  font-size: 16px;
  color: #565555;
`;

const Genres = styled.div`
  /* width: 80%; */
  width: 15em;
  margin: 0 auto; /* добавьте эту строку */
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const Button = styled.button`
  background-color: #0085ff;
  color: #ffffff;
  border-radius: 25px;
  border: none;
  min-width: 5em;
  padding: 0.5em 1em 0.5em 1em;
  text-transform: uppercase;
`;

export default TableItem;
