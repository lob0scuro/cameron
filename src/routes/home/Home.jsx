import styles from "./Home.module.css";
import aboutStyles from "../about/About.module.css";
import Button from "../../components/Button";
import clsx from "clsx";
import Typewriter from "../../components/Typewriter";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className={styles.homeBlock}>
        <h2>
          <span>
            <span
              className={clsx("scripted", [styles.digitalSpan])}
              style={{ fontSize: "5.5rem" }}
            >
              Digital
            </span>{" "}
            Tools.
          </span>{" "}
          <span>
            Real{" "}
            <span
              className={clsx("scripted", [styles.impactSpan])}
              style={{ fontSize: "5.5rem" }}
            >
              Impact
            </span>
            .
          </span>
        </h2>
        <div>
          <Typewriter
            text="Helping teams, churches, and creators do more with custom code."
            speed={50}
            delay={1800}
          />
        </div>
        <div className={styles.homeButtonBlock}>
          <Button title="My Work" to="/projects" />
          <Button title="Let's Talk" to="/contact" />
        </div>
      </div>
      <div className={clsx(styles.aboutSection)}>
        <h2 className={aboutStyles.aboutMainHeader}>Hey, I'm Cameron</h2>
        <div className={aboutStyles.aboutHead}>
          <p>
            &emsp;I'm a full-stack web developer who blends creativity with
            practicality to build systems that solve real-world problems. I
            specialize in combining modern frontends (React) with robust
            backends (Flask) to create seamless, user friendly tools - from
            dynamic schedules to smart file work flows.
          </p>
          <p>
            &emsp;My current focus is{" "}
            <strong style={{ color: "var(--button)" }}>bluTape/</strong> a
            lightweight team coordination platform that connects shop
            technicians to back office and management teams to help transform
            chaotic product flow into organized, visible, and trackable data.
            Built for real teams with real needs. Zero fluff, maximum clarity.
          </p>
          <p>
            &emsp;Whether it's automating weekly schedules, handling uploads via
            Netlify functions and Dropbox, or designing clean, branded
            pamphlets, I build solutions that just work. I value speed, and
            simplicity, and systems that scale quietly behind the scenes.
          </p>
        </div>
        <div className={aboutStyles.aboutStack}>
          <h2 className={clsx("scripted", [aboutStyles.stackHeader])}>
            Tech Stack
          </h2>
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
        <h2 className={clsx("scripted", [aboutStyles.collabHeader])}>
          Let's Collab!
        </h2>
        <div className={aboutStyles.aboutCollab}>
          <p>
            If you're looking for someone who can connect the dots between
            design, data, and deployment -{" "}
            <Link
              className={clsx("scripted", [aboutStyles.contactLink])}
              to="/contact"
            >
              Let's talk!
            </Link>{" "}
            I'm open to collaborations, freelance projects, or just a good
            conversation about solving problems with code.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
