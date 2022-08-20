import React, { useRef } from "react";
import emailjs, { send } from "emailjs-com";
import { validateEmailForm } from "../utilis/validateEmailForm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Col, Button, Label, FormGroup } from "reactstrap";
import "./styles/email.css";
const Email = ({ setShow }) => {
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
    <div className="emailForm">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validateEmailForm}
      >
        <Form>
          <Field type="username" name="name" placeholder="Your name" />

          <Field type="email" name="email" placeholder="Your email" />

          <Field as="textarea" name="message" placeholder="Your  message" />

          <button type="submit">Send </button>
          <button
            onClick={() => {
              setShow(false);
            }}
            className="closeBtn"
          >
            close
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Email;
