import React, { useRef } from "react";
import emailjs, { send } from "emailjs-com";
import { validateEmailForm } from "../utilis/validateEmailForm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Col, Button, Label, FormGroup } from "reactstrap";
import "./styles/email.css";
const Email = ({ setShow, setPopSuc, setPopFail }) => {
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
          setPopSuc(true);
        },
        (error) => {
          setPopFail(true);
        }
      );
  }

  const onSubmit = (values, { resetForm }) => {
    SendEmail(values);

    resetForm();
    setShow(false);
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
