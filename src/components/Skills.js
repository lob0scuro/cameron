import styles from "./styles/Skills.module.css";
import clsx from "clsx";
import React from "react";
import TechBar from "./TechBar";

const Skills = () => {
  return (
    <>
      <h1 className={clsx("scripted", styles.skillsHeader)}>Tech Stack</h1>
      <div className={styles.skillsStack}>
        <ul className={styles.frontend}>
          <h3>Frontend</h3>
          <li>React</li>
          <li>NextJS</li>
          <li>Vite</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript (ES6+)</li>
        </ul>
        <ul className={styles.backend}>
          <h3>Backend</h3>
          <li>Python</li>
          <li>Flask</li>
          <li>Flask-Session</li>
          <li>REST APIs</li>
          <li>MySQL</li>
          <li>Redis</li>
        </ul>
        <ul className={styles.devops}>
          <h3>DevOps</h3>
          <li>Netlify Functions</li>
          <li>Linode VPS</li>
          <li>Ubuntu</li>
          <li>NGNIX</li>
          <li>Gunicorn</li>
        </ul>
        <ul className={styles.integration}>
          <h3>Integration</h3>
          <li>Git</li>
          <li>GitHub</li>
          <li>Google Sheets API</li>
          <li>Dropbox API</li>
          <li>Stripe API</li>
        </ul>
        <ul className={styles.design}>
          <h3>Design</h3>
          <li>Figma</li>
          <li>Canva</li>
        </ul>
      </div>
      <br />
      <br />
      <TechBar />
      <br />
    </>
  );
};

export default Skills;
