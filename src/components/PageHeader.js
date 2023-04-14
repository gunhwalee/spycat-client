import React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 60px;
  padding: 10px;
  border-radius: 5px;

  .title {
    font-weight: 700;
    font-size: 25px;
    text-align: center;
  }

  .text {
    font-weight: 400;
    font-size: 15px;
    text-align: right;
  }
`;

function PageHeader() {
  return (
    <Header>
      <h1 className="title">Title</h1>
      <h2 className="text">text</h2>
    </Header>
  );
}

export default PageHeader;
