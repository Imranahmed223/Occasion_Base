import React from "react";
import "./HeadingPrimary.scss";

const HeadingPrimary = (props) => {
  return (
    <>
      <div className>
        <h1>{props.children}</h1>
      </div>
    </>
  );
};

export default HeadingPrimary;
