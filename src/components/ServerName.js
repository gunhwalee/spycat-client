import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SIZE, COLORS } from "../assets/constants";

const ServerList = styled.li`
  font-size: ${SIZE.FONT_BUTTON}px;
  padding-bottom: ${SIZE.PADDING * 2}px;
`;

const DropDown = styled.ul`
  margin-bottom: ${SIZE.MARGIN * 2}px;
  margin-left: ${SIZE.MARGIN}px;
  display: flex;
  flex-direction: column;
  align-items: first baseline;
`;

const List = styled.li`
  margin-bottom: ${SIZE.MARGIN}px;
  cursor: pointer;
`;

const Button = styled.button`
  font-size: ${SIZE.FONT_SMALL}px;
  color: ${COLORS.WHITE};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

function ServerName({ name, id }) {
  const [showDrop, setShowDrop] = useState(false);

  const mouseEvent = bool => {
    setShowDrop(bool);
  };

  const clickHandler = () => {};

  return (
    <div
      onMouseEnter={() => mouseEvent(true)}
      onMouseLeave={() => mouseEvent(false)}
    >
      <ServerList>{name}</ServerList>
      {showDrop && (
        <DropDown>
          <Link to={`/${id}/traffics`}>
            <List>트래픽 차트</List>
          </Link>
          <Link to={`/${id}/errors`}>
            <List>에러 차트</List>
          </Link>
          <Link to={`/${id}/errorlists`}>
            <List>에러 목록</List>
          </Link>
          <Button type="button" onClick={clickHandler}>
            <List>삭제하기</List>
          </Button>
        </DropDown>
      )}
    </div>
  );
}

export default ServerName;
