import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EntryWrapper = styled.div`
  & li {
    cursor: pointer;
  }

  .servername {
    font-size: 18px;
    padding-bottom: 15px;
  }

  .dropdown {
    margin-bottom: 15px;
    margin-left: 10px;

    & li {
      margin-bottom: 10px;
    }
  }
`;

function Serverlist({ name, id }) {
  const [showDrop, setShowDrop] = useState(false);

  const mouseEvent = bool => {
    setShowDrop(bool);
  };

  return (
    <EntryWrapper
      onMouseEnter={() => mouseEvent(true)}
      onMouseLeave={() => mouseEvent(false)}
    >
      <li className="servername">{name}</li>
      {showDrop && (
        <ul className="dropdown">
          <Link to={`/${id}/traffics`}>
            <li>트래픽</li>
          </Link>
          <Link to={`/${id}/errors`}>
            <li>에러</li>
          </Link>
          <li>삭제하기</li>
        </ul>
      )}
    </EntryWrapper>
  );
}

export default Serverlist;
