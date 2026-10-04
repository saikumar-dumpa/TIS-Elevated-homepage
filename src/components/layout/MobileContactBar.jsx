import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'

// MobileContactBar keeps quick contact actions available at the bottom of smaller screens.
export default function MobileContactBar() {
  return (
    <div className="mobile-contact-bar" aria-label="Contact Tulas International School">
      <a className="cursor-target" href="#admissions">Enquire now <ArrowUpRight size={16} /></a>
      <a className="mobile-phone cursor-target" href="tel:+919837983791" aria-label="Call Tulas International School"><Phone size={19} /></a>
      <a className="mobile-whatsapp cursor-target" href="https://wa.me/919837983791" target="_blank" rel="noreferrer" aria-label="Message Tulas International School on WhatsApp"><MessageCircle size={19} /></a>
    </div>
  )
}