import styles from "./styles/Collab.module.css";
import clsx from "clsx";
import React from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Collab = () => {
  return (
    <>
      <div className={styles.collabBlock1}>
        <h1 className={clsx("scripted", styles.collabHeader)}>
          Let&apos;s Collab!
        </h1>
        <p className={styles.collabTextBlock}>
          If you&apos;re looking for someone who can connect the dots between
          design, data, and deployment -{" "}
          <span className={styles.scriptThis}>
            Let&apos;s talk!&nbsp;&nbsp;
          </span>{" "}
          I&apos;m open to collaborations, freelance projects, or just a good
          conversation about solving problems with code.
        </p>
      </div>
      <ContactForm />
    </>
  );
};

export default Collab;
