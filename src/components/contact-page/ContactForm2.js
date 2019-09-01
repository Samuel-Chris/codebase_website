import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Select from 'react-select';

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    topics: Yup.string()
  }),
  mapPropsToValues: props => ({
    email: '',
    name: '',
    topics: [],
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const payload = {
      ...values,
      topics: values.topics.map(t => t.value),
    };
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'MyForm',
});

const MyForm = props => {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" placeholder="John Doe" type="email" value={values.name} onChange={handleChange} onBlur={handleBlur} className="input"/>

      <label htmlFor="email" style={{ display: 'block' }}>Email</label>
      <input id="email" placeholder="Enter your email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className="input"/>
      {errors.email &&
        touched.email && (
          <div style={{ color: 'red', marginTop: '.1rem' }}>{errors.email}</div>
        )}

      <label htmlFor="comments">Comments</label>
      <Field component="textarea" rows="5" name="comments" placeholder="Let us know how we can help." className="input"/>

      <MySelect value={values.topics} onChange={setFieldValue} onBlur={setFieldTouched} error={errors.topics} touched={touched.topics} />
      <button type="submit" disabled={isSubmitting}>Submit</button>

    </Form>
  );
};

const options = [
  { value: 'Food', label: 'Food' },
  { value: 'Being Fabulous', label: 'Being Fabulous' },
  { value: 'Ken Wheeler', label: 'Ken Wheeler' },
  { value: 'ReasonML', label: 'ReasonML' },
  { value: 'Unicorns', label: 'Unicorns' },
  { value: 'Kittens', label: 'Kittens' },
];

class MySelect extends React.Component {
  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange('topics', value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur('topics', true);
  };

  render() {
    return (
      <div>
        <label htmlFor="color">Where did you hear about us?</label>
        <Select
          id="option"
          placeholder="Select an option"
          options={options}
          isSearchable={false}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
        {!!this.props.error &&
          this.props.touched && (
            <div style={{ color: 'red', marginTop: '.1rem' }}>{this.props.error}</div>
          )}
      </div>
    );
  }
}

export const MyEnhancedForm = formikEnhancer(MyForm);
