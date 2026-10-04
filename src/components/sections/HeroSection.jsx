import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react'

const heroImage = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=90'

export default function HeroSection() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <img className="hero-image" src={heroImage} alt="A leafy school campus with open lawns and learning spaces" fetchPriority="high" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content shell mx-auto w-full">
        <p className="eyebrow hero-eyebrow"><MapPin size={14} /> DEHRADUN, UTTARAKHAND <span /> CBSE BOARDING &amp; DAY SCHOOL</p>
        <h1 id="hero-title">Tulas International School<span className="hero-period">.</span></h1>
        <p className="hero-statement">A place to grow into <em>what&apos;s next.</em></p>
        <p className="hero-copy">Strong learning, a welcoming campus, and room to discover the person you want to become.</p>
        <div className="hero-actions">
          <a className="button button-light cursor-target" href="#admissions">Explore admissions <ArrowUpRight size={18} /></a>
          <a className="hero-text-link cursor-target" href="#story">Get to know Tulas <ArrowDownRight size={17} /></a>
        </div>
        <div className="hero-footnote"><span className="hero-line" /> LEARN WELL. LIVE FULLY.</div>
      </div>
      <a className="hero-scroll cursor-target" href="#story" aria-label="Scroll to learn about Tulas"><ArrowDownRight size={18} /></a>
    </section>
  )
}