import styles from "./styles/Navbar.module.css";
import React from "react";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.myName}>Cameron Lopez</h1>
    </header>
  );
};

export default Navbar;
