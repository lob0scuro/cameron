import styles from "./styles/TechBar.module.css";
import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faLinux,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const TechBar = () => {
  return (
    <div className={styles.stackIcons}>
      <FontAwesomeIcon icon={faPython} />
      <FontAwesomeIcon icon={faJs} />
      <FontAwesomeIcon icon={faDatabase} />
      <FontAwesomeIcon icon={faHtml5} />
      <FontAwesomeIcon icon={faCss3Alt} />
      <FontAwesomeIcon icon={faReact} />
      <FontAwesomeIcon icon={faLinux} />
    </div>
  );
};

export default TechBar;
