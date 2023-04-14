import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SIZE } from "../assets/constants";

const EntryWrapper = styled.div`
  & li {
    cursor: pointer;
  }

  .servername {
    font-size: ${SIZE.FONT_BUTTON}px;
    padding-bottom: ${SIZE.PADDING * 2}px;
  }

  .dropdown {
    margin-bottom: ${SIZE.MARGIN * 2}px;
    margin-left: ${SIZE.MARGIN}px;
    display: flex;
    flex-direction: column;
    align-items: first baseline;

    & li {
      margin-bottom: ${SIZE.MARGIN}px;
    }
  }
`;

function ServerName({ name, id }) {
  const [showDrop, setShowDrop] = useState(false);
  const navigate = useNavigate();

  const mouseEvent = bool => {
    setShowDrop(bool);
  };

  const clickHandler = () => {};

  const showTraffic = () => {
    navigate(`/${id}/traffics`);
  };

  return (
    <EntryWrapper
      onMouseEnter={() => mouseEvent(true)}
      onMouseLeave={() => mouseEvent(false)}
    >
      <li className="servername">{name}</li>
      {showDrop && (
        <ul className="dropdown">
          <button type="button" onClick={showTraffic}>
            <li>트래픽</li>
          </button>
          <button type="button" onClick={showTraffic}>
            <li>에러</li>
          </button>
          <button type="button" onClick={clickHandler}>
            <li>삭제하기</li>
          </button>
        </ul>
      )}
    </EntryWrapper>
  );
}

export default ServerName;
