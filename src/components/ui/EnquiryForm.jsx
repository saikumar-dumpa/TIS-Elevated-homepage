import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

// EnquiryForm collects a parent enquiry and opens a prefilled email draft for the admissions team.
export default function EnquiryForm() {
  const [status, setStatus] = useState('')

  // handleSubmit builds a prefilled mailto link and opens the user's email app for the enquiry.
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const countryCode = formData.get('countryCode')
    const body = [
      `Name: ${name}`,
      `Email: ${email || 'Not provided'}`,
      `Phone: ${countryCode} ${phone}`,
    ].join('\n')
    const mailto = `mailto:info@tis.edu.in?subject=${encodeURIComponent('TIS admissions enquiry')}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setStatus('Your email app should open with this enquiry. Send the draft to reach the admissions team.')
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <label>
        <span>Parent or guardian name</span>
        <input autoComplete="name" name="name" placeholder="Your full name" required />
      </label>
      <label>
        <span>Email address <em>optional</em></span>
        <input autoComplete="email" name="email" placeholder="you@example.com" type="email" />
      </label>
      <div className="phone-fields">
        <label className="country-code">
          <span>Code</span>
          <select name="countryCode" aria-label="Country calling code">
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+971">+971</option>
          </select>
        </label>
        <label className="phone-number">
          <span>Phone number</span>
          <input autoComplete="tel-national" inputMode="tel" name="phone" placeholder="Your phone number" required />
        </label>
      </div>
      <button className="button button-light cursor-target form-submit" type="submit">
        Send an enquiry <ArrowUpRight size={18} />
      </button>
      <p className="form-note" aria-live="polite">
        {status || 'Your details stay in your email app; this demo does not store personal information.'}
      </p>
      <a className="admissions-phone cursor-target" href="tel:+919837983791">
        <Check size={15} /> Prefer to talk? Call +91 98379 83791
      </a>
    </form>
  )
}