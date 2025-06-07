import styles from "./About.module.css";
import { Link } from "react-router-dom";
import clsx from "clsx";

const About = () => {
  return (
    <div className={styles.aboutBlock}>
      <h2 className={styles.aboutMainHeader}>Hey, I'm Cameron</h2>
      <div className={styles.aboutHead}>
        <p>
          &emsp;I'm a full-stack web developer who blends creativity with
          practicality to build systems that solve real-world problems. I
          specialize in combining modern frontends (React) with robust backends
          (Flask) to create seamless, user friendly tools - from dynamic
          schedules to smart file work flows.
        </p>
        <p>
          &emsp;My current focus is{" "}
          <strong style={{ color: "var(--button)" }}>bluTape/</strong> a
          lightweight team coordination platform that connects shop technicians
          to back office and management teams to help transform chaotic product
          flow into organized, visible, and trackable data. Built for real teams
          with real needs. Zero fluff, maximum clarity.
        </p>
        <p>
          &emsp;Whether it's automating weekly schedules, handling uploads via
          Netlify functions and Dropbox, or designing clean, branded pamphlets,
          I build solutions that just work. I value speed, and simplicity, and
          systems that scale quietly behind the scenes.
        </p>
      </div>
      <div className={styles.aboutStack}>
        <h2 className={clsx("scripted", [styles.stackHeader])}>Tech Stack</h2>
        <div>
          <h4>Frontend</h4>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>Javascript (ES6+)</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div>
          <h4>Backend</h4>
          <ul>
            <li>Flask</li>
            <li>Python</li>
            <li>Flask-Session</li>
            <li>REST APIs</li>
            <li>MySQL</li>
            <li>Redis</li>
          </ul>
        </div>
        <div>
          <h4>DevOps</h4>
          <ul>
            <li>Netlify Functions</li>
            <li>Linode VPS</li>
            <li>Ubuntu</li>
            <li>NGINX</li>
            <li>Gunicorn</li>
          </ul>
        </div>
        <div>
          <h4>Integration Tools</h4>
          <ul>
            <li>Google Sheets API</li>
            <li>Google Docs API</li>
            <li>Dropbox SDK</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div>
          <h4>Design Tools</h4>
          <ul>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </div>
      </div>
      <h2 className={clsx("scripted", [styles.collabHeader])}>Let's Collab!</h2>
      <div className={styles.aboutCollab}>
        <p>
          If you're looking for someone who can connect the dots between design,
          data, and deployment -{" "}
          <Link
            className={clsx("scripted", [styles.contactLink])}
            to="/contact"
          >
            Let's talk!
          </Link>{" "}
          I'm open to collaborations, freelance projects, or just a good
          conversation about solving problems with code.
        </p>
      </div>
    </div>
  );
};

export default About;
