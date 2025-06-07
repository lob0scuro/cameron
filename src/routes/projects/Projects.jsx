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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              deleniti molestiae distinctio pariatur quae odio, magnam
              reiciendis dicta, velit, commodi cupiditate quisquam minima quis
              iusto!
            </p>
            <Link className={styles.learnMoreLink}>Learn more</Link>
          </div>
        </div>
        <div className={styles.tile}>
          <img className={styles.tileImage} src={IMAGES[3].image} alt="" />
          <div>
            <h3>Eastwood Legacy 2025</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              deleniti molestiae distinctio pariatur quae odio, magnam
              reiciendis dicta, velit, commodi cupiditate quisquam minima quis
              iusto!
            </p>
            <Link className={styles.learnMoreLink}>Learn more</Link>
          </div>
        </div>
        <div className={styles.tile}>
          <img className={styles.tileImage} src={IMAGES[5].image} alt="" />
          <div>
            <h3>Hill's A/C Repair</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              deleniti molestiae distinctio pariatur quae odio, magnam
              reiciendis dicta, velit, commodi cupiditate quisquam minima quis
              iusto!
            </p>
            <Link className={styles.learnMoreLink}>Learn more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
