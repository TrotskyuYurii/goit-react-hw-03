import css from "../ContactForm/ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const ContactForm = ({ onAddContact }) => {
  const FORM_INITIAL_VALUES = {
    userName: "",
    userNumber: "",
  };

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    // actions.resetForm();
  };

  return (
    <Formik 
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
    >
      <Form className={css.formFormik}>
        <label>
          <span>User name:</span>
          <br />
          <Field type="text" name="userName" placeholder="name" />
          <ErrorMessage component="p" name="userName" />
        </label>{" "}
        <br />
        <label>
          <span>User number:</span>
          <br />
          <Field type="number" name="userNumber" placeholder="0971234567" />
          <ErrorMessage component="p" name="userNumber" />
        </label>{" "}
        <br />
        <br />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
