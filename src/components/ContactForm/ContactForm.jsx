import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "En az 3 karakter olmalıdır")
    .max(50, "En fazla 50 karakter olmalıdır")
    .required("Zorunludur"),
  number: Yup.string()
    .min(3, "En az 3 karakter olmalıdır")
    .max(15, "En fazla 15 karakter olmalıdır")
    .required("Zorunludur"),
});

export default function ContactForm({ addContact }) {
  const nameId = useId();
  const numberId = useId();

  const initialValues = { name: "", number: "" };

  const onSubmit = (values, actions) => {
    addContact({ ...values, id: nanoid() });
    actions.resetForm();
  };
  return (
    <div className={css.contactForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={css.form}>
          <div className={css.name}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId} />
          </div>
          <div className={css.number}>
            <label htmlFor={numberId}>Number</label>
            <Field type="text" name="number" id={numberId} />
          </div>
          <button type="submit">Gönder</button>
        </Form>
      </Formik>
    </div>
  );
}
