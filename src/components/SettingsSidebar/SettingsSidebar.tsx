import React, { useState } from "react";
import styled from "styled-components";

import arrowRight from "../../assets/img/arrow-right.svg";
import Tag from "../Tags/Tag";
import { useGetGenresQuery } from "../../store/services/tmdbApi";
import { Genre } from "../../shared/Types";

const SettingsSidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { data: genresData } = useGetGenresQuery({});

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  if (!genresData || !genresData.genres) {
    return null;
  }

  return (
    <SideBarWrapper isCollapsed={isSidebarCollapsed}>
      <SideBarTop>
        <ArrowRightImage src={arrowRight} onClick={toggleSidebar} />
        <h2>Daplet settings</h2>
      </SideBarTop>
      <CreateListWrapper>
        <FormTitle>Create new list</FormTitle>
        <InputWrapper>
          <FormInput type="text" placeholder="List Name" />
          <Button>Create</Button>
        </InputWrapper>
      </CreateListWrapper>
      <CreateListWrapper>
        <FormTitle>New tag</FormTitle>
        <InputWrapper>
          <FormInput type="text" placeholder="Tag name" />
          <Button>Create</Button>
        </InputWrapper>
      </CreateListWrapper>
      <Header>Genres</Header>
      <UserTags>
        {/* {movies.genre_ids.map((genreId: number) => {
          const genre = genres.find((genre: Genre) => genre.id === genreId);
          return genre ? <Tag key={genre.id} text={genre.name} /> : null;
        })} */}
        {genresData.genres.map((data: Genre) => (
          <Tag text={data.name} id={data.id} />
        ))}
      </UserTags>
    </SideBarWrapper>
  );
};

interface SideBarWrapperProps {
  isCollapsed: boolean;
}

interface SideBarMenuItemProps {
  active: boolean;
}

const SideBarWrapper = styled.div<SideBarWrapperProps>`
  display: ${(props) =>
    props.isCollapsed ? "none" : "flex"}; // изменено условие отображения
  flex-direction: column;
  gap: 1em;
  /* width: 320px; */
  width: ${(props) => (props.isCollapsed ? "0px" : "270px")};
  background: linear-gradient(
    rgba(227, 220, 255, 0.2),
    rgba(185, 251, 255, 0.2)
  );
  opacity: 1;
  overflow-y: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  transition: width 1s ease;
  backdrop-filter: blur(20px);
`;

const SideBarTop = styled.div`
  margin-top: 1.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5em;
  /* justify-content: space-around;
  align-items: center; */
  h2 {
    text-transform: uppercase;
    font-size: 24px;
  }
`;

const ArrowRightImage = styled.img`
  rotate: 180deg;
  width: 16px;
`;

const CreateListWrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const FormTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #999999;
`;

const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 1em;
`;

const FormInput = styled.input`
  flex: 1;
  border-radius: 10px;
  border: none;
  padding: 1em;
`;

const Button = styled.button`
  background-color: #0085ff;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  min-width: 5em;
  padding: 0.5em 1em 0.5em 1em;
  text-transform: uppercase;
`;

const Header = styled.h3`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
`;

const UserTags = styled.div`
  width: 100%;
  margin: 0 auto; /* добавьте эту строку */
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

export default SettingsSidebar;
