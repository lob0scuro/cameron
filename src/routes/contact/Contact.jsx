import styles from "./Contact.module.css";
import Button from "../../components/Button";

const Contact = () => {
  return (
    <form
      action="mailto:kamrin717@gmail.com"
      method="post"
      className={styles.contactForm}
    >
      <h1 className="scripted">Contact Me</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          placeholder="Send me a message!"
        ></textarea>
      </div>
      <Button title="Submit" isSecondary />
    </form>
  );
};

export default Contact;
