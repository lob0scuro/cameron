"use client";

import Button from "./Button";
import styles from "./styles/ContactForm.module.css";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className={styles.contactForm}>
      <div className={styles.nameInput}>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>
      <div className={styles.emailInput}>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
        />
      </div>
      <div className={styles.messageInput}>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Send me a message!"
        ></textarea>
      </div>
      <Button title={"Submit"} type="input" secondary />
    </form>
  );
};

export default ContactForm;
