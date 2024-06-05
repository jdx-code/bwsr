import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = (props) => {
  const navigate = useNavigate("");
  useEffect(() => {
    !props.isUserLogin && navigate("/");
  }, [props]);
  return <div>Homepage</div>;
};

export default Homepage;
