import React from "react";
import "./Button.css";

const Button = ({ buttonName, extraClass, bgColor, ...props }) => {
  return (
    <button
      className={`btn create-group-btn ${extraClass ? extraClass : ""} ${
        bgColor ? "green" : ""
      }`}
      {...props}
    >
      {buttonName}
    </button>
  );
};

export default Button;
