import styles from "./styles/Footer.module.css";
import React from "react";
import SocialBar from "./SocialBar";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h4>Cameron Lopez</h4>
      <div className={styles.roles}>
        <p>Web Developer</p>
        <p>|</p>
        <p>Database Designer</p>
        <p>|</p>
        <p>Problem Solver</p>
      </div>
      <SocialBar />
    </footer>
  );
};

export default Footer;
