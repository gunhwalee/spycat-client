import React from "react";
import InputWrapper from "../styles/UserInputStyles";

import { ReactComponent as Eye } from "../assets/img/eye.svg";
import { ReactComponent as EyeSlash } from "../assets/img/eye-slash.svg";

function UserSecretInput({
  Component,
  id,
  placeholder,
  inputHandler,
  setFocus,
  focus,
  rule,
  pwHandler,
  showPw,
}) {
  return (
    <InputWrapper>
      <div className="input-box">
        {Component && <Component width="20px" height="20px" />}
        <input
          type={showPw ? "text" : "password"}
          id={id}
          placeholder={placeholder}
          onChange={inputHandler}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />
        <button type="button" onClick={pwHandler} className="pwBtn">
          {showPw ? (
            <Eye width="20px" height="20px" />
          ) : (
            <EyeSlash width="20px" height="20px" />
          )}
        </button>
      </div>
      <div
        className="rule"
        style={{ visibility: focus ? "visible" : "hidden" }}
      >
        {rule}
      </div>
    </InputWrapper>
  );
}

export default UserSecretInput;
