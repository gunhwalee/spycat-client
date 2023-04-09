import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Auth(SpecificComponent, option) {
  const { id } = useSelector(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      if (option) {
        navigate("/login");
      }
    } else if (!option) {
      navigate("/");
    }
  }, []);

  return <SpecificComponent />;
}

export default Auth;
