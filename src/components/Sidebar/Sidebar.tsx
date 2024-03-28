import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/img/Group.svg";
import arrowRight from "../../assets/img/arrow-right.svg";

import codeSandbox from "../../assets/img/sideBar/codesandbox.svg";
import heart from "../../assets/img/sideBar/heart.svg";
import grid from "../../assets/img/sideBar/grid.svg";
import user from "../../assets/img/sideBar/users.svg";
import trending from "../../assets/img/sideBar/trending-up.svg";
import Tag from "../Tags/Tag";
import { useSelector } from "react-redux";
import { Genre } from "../../shared/Types";
import { useGetGenresQuery } from "../../store/services/tmdbApi";

interface SidebarProps {
  // Добавьте здесь необходимые пропсы, если они есть
}

const Sidebar = (props: SidebarProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("All Dapplets");

  const { userGenres } = useSelector((state: any) => state.movie);
  const { data: genresData } = useGetGenresQuery({});

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  if (!genresData || !genresData.genres) {
    return null;
  }

  return (
    <SideBarWrapper collapsed={isSidebarCollapsed}>
      <SideBarTop>
        <div>
          <LogoContainer>
            <img src={logo} alt="logo" onClick={() => toggleSidebar()} />
          </LogoContainer>
          {!isSidebarCollapsed && <Title>Dapplets Project.</Title>}
        </div>

        {!isSidebarCollapsed && (
          <img
            style={{ cursor: "pointer" }}
            src={arrowRight}
            alt="arrow-right"
            onClick={toggleSidebar}
          />
        )}
      </SideBarTop>
      {!isSidebarCollapsed ? (
        <>
          <SideBarMenu>
            <SideBarMenuItem
              active={activeMenuItem === "All Dapplets"}
              onClick={() => handleMenuItemClick("All Dapplets")}
            >
              <Icon src={codeSandbox} alt="CodeSandbox" />
              All Movies
            </SideBarMenuItem>
            <SideBarMenuItem
              active={activeMenuItem === "Editor's Choice"}
              onClick={() => handleMenuItemClick("Editor's Choice")}
            >
              <Icon src={heart} alt="Heart" />
              Favorite
            </SideBarMenuItem>
            <SideBarMenuItem
              active={activeMenuItem === "Essential Dappleets"}
              onClick={() => handleMenuItemClick("Essential Dappleets")}
            >
              <Icon src={grid} alt="Grid" />
              Essential Dappleets
            </SideBarMenuItem>
            <SideBarMenuItem
              active={activeMenuItem === "Social Networks"}
              onClick={() => handleMenuItemClick("Social Networks")}
            >
              <Icon src={user} alt="User" />
              Social Networks
            </SideBarMenuItem>
            <SideBarMenuItem
              active={activeMenuItem === "Financial Dapplets"}
              onClick={() => handleMenuItemClick("Financial Dapplets")}
            >
              <Icon src={trending} alt="Trending" />
              Financial Dapplets
            </SideBarMenuItem>
          </SideBarMenu>
          <Header style={{ width: "80%", margin: "0 auto" }}>My lists</Header>
          <UserListWrapper>
            <p>TOP-10 Twitter Dapplets</p>
            <p>TOP-10 Twitter Dapplets (Me)</p>
            <p>TOP-10 Twitter Dapplets (Me)</p>
          </UserListWrapper>
          <Header style={{ width: "80%", margin: "0 auto" }}>My tags</Header>
          <UserTags>
            {/* {userGenres.map((data: Genre) => (
              <Tag text={data.name} />
            ))} */}
            {userGenres.map((genreId: number) => {
              const genre = genresData.genres.find(
                (genre: Genre) => genre.id === genreId
              );
              return genre ? <Tag key={genre.id} text={genre.name} /> : null;
            })}
          </UserTags>
        </>
      ) : (
        <SideBarMenu>
          <SideBarMenuItem
            active={activeMenuItem === "All Dapplets"}
            onClick={() => handleMenuItemClick("All Dapplets")}
          >
            <Icon src={codeSandbox} alt="CodeSandbox" />
          </SideBarMenuItem>
          <SideBarMenuItem
            active={activeMenuItem === "Editor's Choice"}
            onClick={() => handleMenuItemClick("Editor's Choice")}
          >
            <Icon src={heart} alt="Heart" />
          </SideBarMenuItem>
          <SideBarMenuItem
            active={activeMenuItem === "Essential Dappleets"}
            onClick={() => handleMenuItemClick("Essential Dappleets")}
          >
            <Icon src={grid} alt="Grid" />
          </SideBarMenuItem>
          <SideBarMenuItem
            active={activeMenuItem === "Social Networks"}
            onClick={() => handleMenuItemClick("Social Networks")}
          >
            <Icon src={user} alt="User" />
          </SideBarMenuItem>
          <SideBarMenuItem
            active={activeMenuItem === "Financial Dapplets"}
            onClick={() => handleMenuItemClick("Financial Dapplets")}
          >
            <Icon src={trending} alt="Trending" />
          </SideBarMenuItem>
        </SideBarMenu>
      )}
    </SideBarWrapper>
  );
};

interface SideBarWrapperProps {
  collapsed: boolean;
}

interface SideBarMenuItemProps {
  active: boolean;
}

const SideBarWrapper = styled.div<SideBarWrapperProps>`
  display: ${(props) => (props.collapsed ? "flex" : "none")};
  flex-direction: column;
  gap: 1em;
  width: ${(props) =>
    props.collapsed
      ? "98px"
      : "270px"}; // Ширина сайдбара при свернутом и развернутом состоянии
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
  transition: width 0.5s ease;

  /* Применяем размытие к заднему фону */
  backdrop-filter: blur(10px);

  @media (min-width: 768px) {
    display: flex;
  }
`;

const SideBarTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 1em;
  }
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 900;
`;

const LogoContainer = styled.div`
  border: 2px solid #2a2a2a;
  border-radius: 9999px;
  padding: 0;
`;

const SideBarMenu = styled.ul`
  margin-top: 1em;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

const SideBarMenuItem = styled.li<SideBarMenuItemProps>`
  height: 2em;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1em;
  border-right: 3px solid
    ${(props) => (props.active ? "#0085FF" : "transparent")};
  padding: 0 2.5em;
`;

const Icon = styled.img`
  width: 24px; /* Размер иконки можете настроить по вашему усмотрению */
`;

const Header = styled.h3`
  font-size: 16px;
  font-weight: 600;
`;

const UserListWrapper = styled.div`
  margin-top: 0;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserTags = styled.div`
  width: 80%;
  margin: 0 auto; /* добавьте эту строку */
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

export default Sidebar;
