import React from 'react';
import { Formik } from 'formik';
import InputGroup from './InputGroup';

export default {
  title: 'molecules/InputGroup',
  component: InputGroup,
};

export const Default = (args) => (
  <Formik
    initialValues={{ email: '' }}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}
  >
    {({ values, handleChange, handleBlur }) => (
      <InputGroup
        {...args}
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
    )}
  </Formik>
);
