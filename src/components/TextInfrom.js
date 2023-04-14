import React from "react";
import InputWrapper from "../styles/UserInputStyles";

function TextInfrom({ Component, value }) {
  return (
    <InputWrapper>
      <div className="input-box">
        {Component && <Component width="20px" height="20px" />}
        <input type="text" defaultValue={value} disabled />
      </div>
    </InputWrapper>
  );
}

export default TextInfrom;
