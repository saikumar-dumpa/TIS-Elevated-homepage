import { ArrowUpRight } from 'lucide-react'

const currentYear = new Date().getFullYear()

// SiteFooter renders the final footer section and uses the current year automatically.
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell mx-auto">
        <a className="wordmark footer-wordmark cursor-target" href="#home" aria-label="Tulas International School home">
          <span className="wordmark-name">TULAS</span><span className="wordmark-subtitle">INTERNATIONAL SCHOOL</span>
        </a>
        <p className="footer-line">Learning for a world<br />of possibility.</p>
        <div className="footer-links">
          <a className="cursor-target" href="#story">Our story</a>
          <a className="cursor-target" href="#learning">The Tulas experience</a>
          <a className="cursor-target" href="#campus-life">Campus life</a>
          <a className="cursor-target" href="mailto:info@tis.edu.in">info@tis.edu.in</a>
        </div>
        <a className="footer-top cursor-target" href="#home">Back to top <ArrowUpRight size={16} /></a>
      </div>
      <div className="footer-bottom shell mx-auto">
        <span>Copyright {currentYear} Tulas International School</span>
        <span>Dehradun, Uttarakhand, India</span>
        <span>CBSE | Boarding &amp; Day School</span>
      </div>
    </footer>
  )
}