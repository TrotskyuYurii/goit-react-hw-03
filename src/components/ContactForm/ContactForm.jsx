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
    actions.resetForm();
  };

  const mailBoxSchema = Yup.object().shape({
    userNumber: Yup.string()
      .required("Number is required!")
      .max(30, `Number must be less than 30 characters!`)
      .min(3, "Number must be more than 3 characters!"),
    userName: Yup.string()
      .required("User name is required!")
      .max(30, `Username must be less than 30 characters!`)
      .min(3, "Username must be more than 3 characters!"),
  });

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={mailBoxSchema}
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
