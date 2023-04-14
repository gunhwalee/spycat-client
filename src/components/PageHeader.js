import React from "react";
import { Link } from "react-router-dom";

import Header from "../styles/PageHeaderStyles";
import logo from "../assets/img/logo.png";
import { SIZE } from "../assets/constants";

function PageHeader({ title, text }) {
  return (
    <Header>
      <div className="container">
        <Link to="/">
          <img
            alt="logo"
            src={logo}
            width={`${SIZE.PAGEHEADER_LOGO}px`}
            height={`${SIZE.PAGEHEADER_LOGO}px`}
          />
          <h1
            style={{
              fontSize: `${SIZE.PAGEHEADER_LOGO}px`,
              marginLeft: `${SIZE.MARGIN / 2}px`,
            }}
          >
            Spy Cat
          </h1>
        </Link>
      </div>
      <div className="container">
        <h1 className="title">{title}</h1>
      </div>
      <div className="container last">
        <h1 className="text">{text}</h1>
      </div>
    </Header>
  );
}

export default PageHeader;
