import React from "react";
import styled from "styled-components";
import SearchInp from "../SearchInp/SearchInp";

const LogoImg = styled.img`
  width: 124px;
  height: 38px;
  border: 1px solid #000;
  margin: 0 30px;
`;
const HomeHeader = styled.header`
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <HomeHeader>
      <h1>
        <LogoImg src="" alt="호두마켓 로고" />
      </h1>
      <SearchInp />
      <div></div>
    </HomeHeader>
  );
}
