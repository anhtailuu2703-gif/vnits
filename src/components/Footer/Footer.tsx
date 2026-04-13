import React, { useRef, useState } from "react";
import styles from "./Footer.module.css";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_abc123",    // Thay bằng Service ID của bạn
        "template_xyz456",   // Thay bằng Template ID của bạn
        formRef.current,
        "user_123456"        // Thay bằng Public Key của bạn
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          formRef.current?.reset();
        },
        () => {
          setSuccess("Failed to send message. Try again.");
        }
      );
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        {/* Cột 1: thông tin công ty + bản đồ */}
        <div className={styles.colInfo}>
          <h3>ITS - IT & Security Solution Provider</h3>
          <p>
            <FaMapMarkerAlt className={styles.icon} /> 1 Nguyễn Thông, Quận 3, TP. HCM
          </p>
          <p>
            <FaPhoneAlt className={styles.icon} /> Hotline: 0765081898
          </p>
          <p>
            <FaEnvelope className={styles.icon} /> Email: info@vnits.net
          </p>

          <div className={styles.map}>
            <iframe
              title="VNITS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3772359200807!2d106.6746015748049!3d10.782392289366696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0f89ff5d91%3A0x430a31ef6a3a4ef4!2zMSBOZ3V54buFbiBUaMO0bmcsIFN0cmVldCBOaGnDqnUgTOG7mWMsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1775814299670!5m2!1svi!2s"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Cột 2: form liên hệ */}
        <div className={styles.colForm} id="contact">
          <h3>Liên hệ</h3>
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
            <button type="submit">Send Message</button>
          </form>
          {success && <p className={styles.success}>{success}</p>}
        </div>
      </div>

      <div className={styles.bottom}>
        Copyright © ITS Solution 2023.
      </div>
    </footer>
  );
};

export default Footer;