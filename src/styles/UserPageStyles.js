import styled from "styled-components";

const EntryWrapper = styled.div`
  width: 100%;

  main {
    display: flex;
    justify-content: space-evenly;
    height: calc(100% - 60px);

    .wrapper {
      width: 45%;
    }

    .left {
      display: flex;
      flex-direction: column;

      > section {
        flex: 1;
      }
    }

    .sub-title {
      font-weight: 400;
      font-size: 1.5em;
    }

    .content {
      border: 1px solid gray;
      border-radius: 10px;
      padding: 20px;
      margin: 20px 0;
    }

    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        width: 40px;
        height: 25px;
      }
    }

    .name {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
    }
  }
`;

export default EntryWrapper;
