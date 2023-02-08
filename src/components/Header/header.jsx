import React from "react";
import styled from "styled-components";
import SearchInp from "../SearchInp/SearchInp";

const LogoImg = styled.img`
  width: 124px;
  height: 38px;
  margin: 0 30px;
`;
const HomeHeader = styled.header`
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 22px 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    display: flex;
  }
`;

const HeaderNav = styled.nav`
  ul {
    display: flex;
    gap: 26px;
    li {
      width: 56px;
      height: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img{
        margin-bottom: 5px;
      }
      span {
        font-size: 12px;
        color: #767676;
      }
    }
  }
`;

export default function Header() {
  return (
    <HomeHeader>
      <div>
        <h1>
          <LogoImg src="assets/Logo-hodu.png" alt="호두마켓 로고" />
        </h1>
        <SearchInp />
      </div>
      <HeaderNav>
        <ul>
          <li>
            <img src="assets/icon-shopping-cart.svg" alt="장바구니" />
            <span>장바구니</span>
          </li>
          <li>
            <img src="assets/icon-user.svg" alt="로그인" />
            <span>로그인</span>
          </li>
        </ul>
      </HeaderNav>
    </HomeHeader>
  );
}
