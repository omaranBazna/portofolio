import React, { useRef } from "react";
import emailjs, { send } from "emailjs-com";
import { validateEmailForm } from "../utilis/validateEmailForm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles/email.css";
const Email = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  function SendEmail(object) {
    emailjs
      .send("service_a1njsji", "template_oepbcjt", object, "MAQE_cAPPmYKBXCIX")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const onSubmit = (values, actions) => {
    setTimeout(() => {
      SendEmail(values);
      actions.setSubmitting(false);
    }, 1000);
  };
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
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validateEmailForm}
      >
        <Form>
          <Field type="username" name="name" />
          <Field type="email" name="email" />
          <Field as="textarea" name="message" />
          <button type="submit">Send </button>
        </Form>
      </Formik>
    </>
  );
};

export default Email;
