import styles from "./styles/About.module.css";
import React from "react";
import SocialBar from "./SocialBar";

const About = () => {
  return (
    <>
      <h1 className={styles.aboutHeader}>Hey, I'm Cameron</h1>
      <div className={styles.aboutTextBlock}>
        <p>
          I&apos;m a full-stack web developer who blends creativity with
          practicality to build systems that solve real-world problems. I
          specialize in combining modern frontends (React) with robust backends
          (Flask) to create seamless, user friendly tools - from dynamic
          schedules to smart file work flows.
        </p>
        <p>
          If I&apos;m not working on projects, you can usually find me hanging
          out with my daughter, helping out at my church or finding a way to get
          active. I like to swim, run and do weight training. I&apos;m all about
          building relationships, nourishing the soul and strengthening the
          body. One of the lifelong struggles I enjoy taking head on is finding
          the work-life balance and building others up as we all push this
          boulder up our hill.
        </p>
        <p>
          Whether it&apos;s automating weekly schedules, handling uploads via
          Netlify functions and Dropbox, or designing clean, branded pamphlets,
          I build solutions that just work. I value speed, and simplicity, and
          systems that scale quietly behind the scenes.
        </p>
        <div className={styles.aboutSocialMedia}>
          <p>Follow me on social media</p>
          <p>Let's connect!</p>
          <br />
          <SocialBar />
        </div>
      </div>
    </>
  );
};

export default About;
