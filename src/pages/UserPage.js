import React from "react";

import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Key } from "../assets/img/key.svg";
import PageHeader from "../components/PageHeader";
import TextInfrom from "../components/TextInfrom";
import EntryWrapper from "../styles/UserPageStyles";

function UserPage() {
  return (
    <EntryWrapper>
      <PageHeader title="마이페이지" />
      <main>
        <section className="wrapper left">
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
        </section>
        <section className="wrapper right">
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
