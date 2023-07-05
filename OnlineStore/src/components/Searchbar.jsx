import React from "react";
import { Formik, Form, Field } from "formik";

const Searchbar = () => {
  return (
    <div>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values.search);
          setSubmitting(false);
          values.search = "";
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <Field
                type="text"
                name="search"
                placeholder="Search for products"
              />
              <button type="submit" disabled={isSubmitting}>
                Search
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Searchbar;
