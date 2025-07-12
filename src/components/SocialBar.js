import styles from "./styles/SocialBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const SocialBar = () => {
  return (
    <div className={styles.socialBar}>
      <a href="https://www.facebook.com/cameron.lopez.191915/" target="_blank">
        <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} />
      </a>
      <a href="https://www.instagram.com/cameronlopez85/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
      </a>
      <a
        href="https://www.linkedin.com/in/cameron-lopez111991/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialIcon} />
      </a>
      <a href="https://github.com/lob0scuro" target="_blank">
        <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />
      </a>
      <a href="https://www.pinterest.com/kamrin717/" target="_blank">
        <FontAwesomeIcon icon={faPinterest} className={styles.socialIcon} />
      </a>
    </div>
  );
};

export default SocialBar;
