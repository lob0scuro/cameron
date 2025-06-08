import styles from "./Projects.module.css";
import { IMAGES } from "../../utils/images";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className={styles.projectBlock}>
      <h1>Projects</h1>
      <div className={styles.projectTiles}>
        <div className={styles.tile}>
          <img className={styles.tileImage} src={IMAGES[2].image} alt="" />
          <div>
            <h3>bluTape/</h3>
            <p>
              bluTape is a full-stack CRUD application designed to streamline
              inventory management and improve communication between shop
              technicians and office staff. The front end is built with React,
              the back end with Flask, and it uses MySQL for data storage. The
              app is deployed on a Linode server using NGINX and Gunicorn.
            </p>
            <Link className={styles.learnMoreLink}>Learn more</Link>
          </div>
        </div>
        <div className={styles.tile}>
          <img className={styles.tileImage} src={IMAGES[3].image} alt="" />
          <div>
            <h3>Eastwood Legacy 2025</h3>
            <p>
              A lightweight web app built with raw HTML, CSS, and vanilla
              JavaScript. The form uploads user-submitted images directly to
              Dropbox using its API, integrated via the Node.js SDK and deployed
              as a Netlify serverless function. Designed to support Eastwood
              Pentecostal Church’s 75th anniversary, the app enabled seamless
              photo collection for a commemorative presentation.
            </p>
            <Link className={styles.learnMoreLink}>Learn more</Link>
          </div>
        </div>
        <div className={styles.tile}>
          <img className={styles.tileImage} src={IMAGES[5].image} alt="" />
          <div>
            <h3>Hill's A/C Repair</h3>
            <p>
              A clean, responsive landing page built with React for a local
              residential HVAC company. This project focused on layout, design
              consistency, and user experience, aiming to deliver a professional
              web presence that builds trust and encourages customer inquiries.
            </p>
            <Link className={styles.learnMoreLink}>Learn more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
