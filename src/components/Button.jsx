import styles from "./Button.module.css";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const Button = ({ title, to, isSecondary }) => {
  const navigate = useNavigate();

  return (
    <button
      className={clsx(styles.btn, isSecondary && styles.secondaryBtn)}
      onClick={() => navigate(to)}
    >
      {title}
    </button>
  );
};

export default Button;
