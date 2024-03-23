import React from "react";
import styled from "styled-components";
import hamburger from "../../assets/img/mainTable/hamburger.svg";
import cpmpanyImage from "../../assets/img/mainTable/companyImage.png";
import Tag from "../Tags/Tag";

const TableItemWrapper = styled.div`
  margin-top: 2em;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1em;
  justify-content: space-between;
`;

const HamburgerImage = styled.img`
  width: 18px;
`;

const CompanyImage = styled.img`
  width: 50px;
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

const Tags = styled.div`
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

const TableItem = () => {
  return (
    <TableItemWrapper>
      <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
        <HamburgerImage src={hamburger} alt="hamburger" />
        <CompanyImage src={cpmpanyImage} alt="company image" />
        <MainInfo>
          <h3>Ethereum Contracts Example</h3>
          <p>0xC12......E3836</p>
        </MainInfo>
      </div>

      <DescriptionWrapper>
        <Description>Feature adds tweets to Ethereum contract</Description>
      </DescriptionWrapper>
      <p style={{ fontSize: "14px", color: "#BBBBBB" }}>debra.holt</p>
      <Tags>
        <Tag text="Social Media Finances" />
        <Tag text="Twitter" />
        <Tag text="Twitter" />
        <Tag text="Twitter" />
      </Tags>
      <Button>Install</Button>
    </TableItemWrapper>
  );
};

export default TableItem;
