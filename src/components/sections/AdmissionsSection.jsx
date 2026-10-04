import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import EnquiryForm from '../ui/EnquiryForm.jsx'
import ScrollReveal from '../animation/ScrollReveal.jsx'

// AdmissionsSection promotes the admissions process and includes the enquiry form.
export default function AdmissionsSection() {
  return (
    <section className="admissions-section section-pad" id="admissions">
      <div className="admissions-grid shell mx-auto grid w-full">
        <ScrollReveal className="admissions-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> YOUR NEXT CHAPTER</p>
          <h2>Come see what<br />could <em>begin here.</em></h2>
          <p>Talk with our admissions team, ask your questions, and find out whether Tulas is the right fit for your family.</p>
          <div className="contact-details">
            <a href="tel:+919837983791" className="contact-detail cursor-target"><Phone size={17} /> +91 98379 83791</a>
            <a href="https://maps.google.com/?q=Tulas+International+School+Dehradun" target="_blank" rel="noreferrer" className="contact-detail cursor-target"><MapPin size={17} /> Dhoolkot, Dehradun</a>
          </div>
          <a className="admissions-direct cursor-target" href="https://admission.tis.edu.in" target="_blank" rel="noreferrer">Visit the admissions portal <ArrowUpRight size={17} /></a>
        </ScrollReveal>
        <ScrollReveal className="enquiry-panel" delay={0.1}>
          <div className="enquiry-heading"><div><p className="eyebrow">LET&apos;S TALK</p><h3>Make an enquiry</h3></div><ArrowUpRight size={22} /></div>
          <EnquiryForm />
        </ScrollReveal>
      </div>
    </section>
  )
}