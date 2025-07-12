import styles from "./styles/Button.module.css";
import React from "react";
import clsx from "clsx";

const Button = ({ title, type = "button", secondary, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      className={secondary ? styles.secondaryBtn : styles.btn}
    >
      {title}
    </button>
  );
};

export default Button;
