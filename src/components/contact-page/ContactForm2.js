import React from 'react'
import './styles.scss'

export default function ContactForm2() {
  return (
    <form method="POST" name="contact-form" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact-form" />
      <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="John Doe" className="input" maxlength="50" required/>
      <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Example@email.com" className="input" maxlength="50" required/>
      <label htmlFor="comments">Comments</label>
        <textarea name="comments" rows="5" placeholder="Let us know how we can help" class="input" maxlength="500" required></textarea>
      <label htmlFor="options">Where did you hear about us?</label>
      <div className="select">
        <select name="option" placeholder="Select an option" className="input" required>
          <option value="" disabled selected hidden>Select an option</option>
          <option value="option1">Youtube</option>
          <option value="option2">Instagram</option>
          <option value="option3">Discord</option>
          <option value="option4">LinkedIn</option>
          <option value="option5">Clutch.co</option>
          <option value="option6">Word of Mouth</option>
          <option value="option7">Other</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
