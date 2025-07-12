"use client";

import styles from "./styles/Greeting.module.css";
import React from "react";
import Typewriter from "./Typewriter";
import Button from "./Button";
import Link from "next/link";

const Greeting = () => {
  const scrollToSection = () => {
    const section = document.getElementsByClassName("collab")[0];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className={styles.affectBlock}>
        <h2 className={styles.tools}>
          <span className="scripted">Digital</span> Tools
        </h2>
        <h2 className={styles.impact}>
          Real <span className="scripted">Impact</span>
        </h2>
      </div>
      <div className={styles.typewriterBlock}>
        <Typewriter
          text="Helping teams, churches, and creators do more with custom code."
          speed={50}
          delay={3000}
        />
      </div>
      <div className={styles.buttonBlock}>
        <Link href={"/projects"}>
          <Button title={"My Work"} />
        </Link>
        <Button
          title={"Let's Talk"}
          style={{ backgroundColor: "var(--secondary)" }}
          onClick={scrollToSection}
        />
      </div>
    </>
  );
};

export default Greeting;
