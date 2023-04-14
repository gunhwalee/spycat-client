import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EntryWrapper = styled.div`
  & li {
    cursor: pointer;
  }

  .servername {
    font-size: 20px;
    padding-bottom: 20px;
  }

  .dropdown {
    margin-bottom: 15px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: first baseline;

    & li {
      margin-bottom: 10px;
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
