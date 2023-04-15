import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import { COLORS, SIZE } from "../assets/constants";

const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  main {
    display: flex;
    flex-direction: column;
    margin: ${SIZE.MARGIN * 2}px ${SIZE.MARGIN * 10}px;

    nav {
      display: flex;
      justify-content: flex-start;
      margin: ${SIZE.MARGIN}px 0px;

      button {
        border: none;
        background-color: transparent;
        width: 120px;
        height: 40px;
        font-size: ${SIZE.FONT_BUTTON}px;
        cursor: pointer;
      }
    }

    .error-box {
      border: 1px solid gray;
      border-radius: ${SIZE.BORDER}px;
      padding: ${SIZE.PADDING * 2}px;
      margin: ${SIZE.MARGIN * 4}px 0px;

      hr {
        background-color: red;
      }

      .title {
        font-weight: 400;
        font-size: ${SIZE.FONT_TITLE}px;
        margin-bottom: ${SIZE.MARGIN}px;
      }

      .message {
        font-size: ${SIZE.FONT_REGULAR}px;
        margin-bottom: ${SIZE.MARGIN}px;
      }

      .details {
        display: flex;
        color: ${COLORS.GRAY};
        font-size: ${SIZE.FONT_SMALL}px;

        .time {
          margin-right: ${SIZE.MARGIN / 2}px;
        }
      }
    }

    .error-box:hover {
      background-color: ${COLORS.LOGIN};
      cursor: pointer;

      .details {
        color: ${COLORS.WHITE};
      }
    }
  }
`;

function ErrorListPage() {
  return (
    <EntryWrapper>
      <PageHeader title="에러 목록" />
      <main>
        <nav>
          <button type="button">All 17</button>
          <button type="button">Type Error 3</button>
        </nav>
        <section>
          <hr />
          <article className="error-box">
            <div className="title">에러이름</div>
            <div className="message">에러 메세지</div>
            <div className="details">
              <div className="time">에러 시간</div>
              <div className="host">| 서버 주소</div>
            </div>
          </article>
          <article className="error-box">
            <h1>에러이름</h1>
            <h2>에러 메세지</h2>
            <h3>에러 시간</h3>
          </article>
        </section>
      </main>
    </EntryWrapper>
  );
}

export default ErrorListPage;
