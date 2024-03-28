import React from "react";
import styled from "styled-components";
import clouds from "../../assets/img/header/clouds.svg";
import settings from "../../assets/img/header/settings.svg";

const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 56px;
  background: linear-gradient(
    rgba(227, 220, 255, 0.2),
    rgba(185, 251, 255, 0.2)
  );
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  gap: 0.5em;
`;

const Image = styled.img``;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Box>
          <img src={clouds} alt="clouds" />
          <p>
            Extension state: <span style={{ color: "green" }}>Active</span>
          </p>
        </Box>
        <Box>
          <img src={settings} alt="setting-img" style={{ cursor: "pointer" }} />
          <p>Settings</p>
        </Box>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
