/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Key } from "../assets/img/key.svg";
import PageHeader from "../components/PageHeader";
import TextInfrom from "../components/TextInfrom";
import EntryWrapper from "../styles/UserPageStyles";

function UserPage() {
  const { name, id, apikey, servers } = useSelector(state => state.user);
  const [serverArray, setServerArray] = useState(null);

  useEffect(() => {
    const contents = servers.map(element => {
      return (
        <article className="content btn" key={element.url}>
          <div>
            <p className="name">{element.serverName}</p>
            <p>{element.url}</p>
          </div>
        </article>
      );
    });

    setServerArray(contents);
  }, [servers]);

  return (
    <EntryWrapper>
      <PageHeader title="마이페이지" text="" />
      <main>
        <section className="wrapper left">
          <section>
            <header className="sub-title">유저정보</header>
            <hr />
            <article className="content">
              <TextInfrom Component={Id} value={name} />
              <TextInfrom Component={Id} value={id} />
            </article>
          </section>
          <section>
            <header className="sub-title">API KEY</header> <hr />
            <article className="content btn">
              <TextInfrom Component={Key} value={apikey} />
            </article>
          </section>
        </section>
        <section className="wrapper right">
          <header className="sub-title">서버목록</header> <hr />
          {serverArray}
        </section>
      </main>
    </EntryWrapper>
  );
}

export default UserPage;
