import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./styles/email.css";
const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a1njsji",
        "template_oepbcjt",
        form.current,
        "MAQE_cAPPmYKBXCIX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Email;
