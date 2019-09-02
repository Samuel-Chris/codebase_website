import React from 'react'
import './styles.scss'

export default function ContactForm2() {
  return (
    <form name="contact-form" data-netlify="true" data-netlify-recaptcha="true">
      <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="John Doe" className="input"/>
      <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Example@email.com" className="input"/>
      <label htmlFor="comments">Comments</label>
        <textarea name="comments" rows="5" placeholder="Let us know how we can help" class="input"></textarea>
      <label htmlFor="options">Where did you hear about us?</label>
      <div className="select">
        <select name="option" placeholder="Select an option" class="input">
          <option value="option0">Select an option</option>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
        </select>
      </div>
      <div data-netlify-recaptcha="true" class="captcha"></div>
      <button type="submit">Send</button>
    </form>
  )
}
