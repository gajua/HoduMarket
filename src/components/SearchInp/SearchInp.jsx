import React from "react";
import styled from "styled-components";

const SearchDiv = styled.div`
  input {
    width: 400px;
    height: 46px;
    border-radius: 50px;
    border: 2px solid #21bf48;
    padding: 13px 22px;
    outline: none;
  }
`;

export default function SearchInp() {
  return (
    <SearchDiv>
      <input type="search" placeholder="상품을 검색해보세요!" />
    </SearchDiv>
  );
}
