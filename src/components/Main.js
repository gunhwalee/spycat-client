import React from "react";
import { useSelector } from "react-redux";

function Main() {
  const name = useSelector(state => state.user.name);

  console.log(name);

  return <div>Welcome~ This is Spy Cat</div>;
}

export default Main;
