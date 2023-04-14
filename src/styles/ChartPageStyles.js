import styled from "styled-components";

const EntryWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #787878;

  .small-logo-header {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 5px;

    .server-title {
      font-weight: 700;
      font-size: 2.5em;
      cursor: pointer;
    }
  }
`;

export default EntryWrapper;
