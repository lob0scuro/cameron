import styles from "./Contact.module.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Button from "../../components/Button";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7logvna",
        "template_05imx95",
        form.current,
        "OQ5qenunjS238WBO5"
      )
      .then((result) => {
        alert("Message sent successfully");
        form.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
  };
  return (
    <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
      <h1 className="scripted">Contact Me</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          placeholder="Send me a message!"
          required
        ></textarea>
      </div>
      <Button title="Submit" isSecondary />
    </form>
  );
};

export default Contact;
