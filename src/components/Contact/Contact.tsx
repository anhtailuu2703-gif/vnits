import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Liên hệ</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" rows={5} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;