import React, { Component } from 'react'
import { withFormik, Form, Field } from 'formik';
import './styles.scss'

export const ContactForm = ({values, handleChange}) => {
    return (
      <Form name="contact form" data-netlify="true" data-netlify-recaptcha="true" method="POST" data-netlify-honeypot="bot-field">
          <input type="hidden" name="contact-form" value="contact" />
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" placeholder="John Doe" className="input"/>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" placeholder="Example@email.com" className="input"/>
          <label htmlFor="comments">Comments</label>
          <Field component="textarea" rows="5" name="comments" placeholder="Let us know how we can help." className="input"/>
          <label htmlFor="option">Where did you hear about us?</label>
          <div className="select">
          <Field component="select" name="option" placeholder="Select an option" className="input"> 
            <option value="option0">Select an option</option>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
          </Field>
          </div>
          <div data-netlify-recaptcha="true" className="captcha"></div>
          <button type="submit">Send</button>
      </Form>
    );
  };
  
export const ContactFormEnhanced = withFormik({
    mapPropsToValues({ name, email, comments, option }) { 
        return {
            name: '',
            email: '',
            comments: '',
            option: 'Select an option'
        }
    },
  
    // Custom sync validation
    validate: values => {
      const errors = {};
  
      if (!values.name) {
        errors.name = 'Required';
      }
      if (!values.email) {
        errors.email = 'Required';
      }
      if (!values.comments) {
        errors.comments = 'Required';
      }
      if (!values.option) {
        errors.option = 'Required';
      }
  
      return errors;
    },
  
    handleSubmit: (values) => {
        console.log(values)
    },
  
    displayName: 'ContactForm',
  })(ContactForm);