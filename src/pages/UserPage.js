import React from "react";
import styled from "styled-components";

import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Key } from "../assets/img/key.svg";
import PageHeader from "../components/PageHeader";
import TextInfrom from "../components/TextInfrom";

const EntryWrapper = styled.div`
  width: 100%;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      width: 300px;
    }

    .sub-title {
      font-weight: 400;
      font-size: 1.5em;
    }

    .content {
      width: 100%;
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

function UserPage() {
  return (
    <EntryWrapper>
      <PageHeader />
      <main>
        <section>
          <header className="sub-title">유저정보</header>
          <hr />
          <article className="content">
            <TextInfrom Component={Id} value="이름" />
            <TextInfrom Component={Id} value="아이디@이메일" />
          </article>
        </section>
        <section>
          <header className="sub-title">API KEY</header> <hr />
          <article className="content btn">
            <TextInfrom
              Component={Key}
              value="API-KEY값이 들어갑니다요루 크크루핑퐁"
            />
            <button type="button">생성</button>
          </article>
        </section>
        <section>
          <header className="sub-title">서버목록</header> <hr />
          <article className="content btn">
            <div className="inform">
              <p className="name">My Test Server1</p>
              <p className="host">mytestserver1.com</p>
            </div>
            <button type="button">삭제</button>
          </article>
          <article className="content btn">
            <div className="inform">
              <p className="name">My Test Server1</p>
              <p className="host">mytestserver1.com</p>
            </div>
            <button type="button">삭제</button>
          </article>
        </section>
      </main>
    </EntryWrapper>
  );
}

export default UserPage;
