import React from "react";
import InputWrapper from "../styles/UserInputStyles";

function UserTextInput({
  Component,
  id,
  placeholder,
  inputHandler,
  setFocus,
  focus,
  rule,
}) {
  return (
    <InputWrapper>
      <div className="input-box">
        {Component && <Component width="20px" height="20px" />}
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          onChange={inputHandler}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />
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

export default UserTextInput;
