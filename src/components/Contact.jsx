import React from "react";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <>
      <section id="contact" className={styles.contact}>
        <p className="mono_para green">04. What&apos;s Next?</p>
        <p className="title">Get In Touch</p>
        <p className="para shrink pad_b">
          Although I&apos;m currently looking for any opportunities, my inbox is
          always open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <button className="button">Say Hello!</button>
        <p className="mono_para">Developed By Ashfaque Ahmed</p>
      </section>
    </>
  );
};

export default Contact;
