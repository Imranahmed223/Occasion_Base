import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <>
      <div className={`${props.className}`}>
        <button className={`button ${props.className}`} >
          {props.children}
        </button>
      </div>
    </>
  );
};

export default Button;
