import { campusPillars } from '../../data/homepage.js'
import ScrollReveal from '../animation/ScrollReveal.jsx'

// LearningSection displays the main campus learning pillars and student experience highlights.
export default function LearningSection() {
  return (
    <section className="learning-section section-pad" id="learning">
      <div className="section-heading shell mx-auto">
        <ScrollReveal>
          <p className="eyebrow"><span className="eyebrow-mark" /> THE TULAS EXPERIENCE</p>
          <h2>More ways to become <em>more you.</em></h2>
        </ScrollReveal>
        <p className="body-copy">Learning continues in every conversation, practice, performance, and new friendship.</p>
      </div>
      <div className="pillar-grid shell mx-auto grid w-full">
        {campusPillars.map((pillar, index) => (
          <ScrollReveal className={`pillar-card pillar-card-${index + 1}`} delay={index * 0.08} key={pillar.number}>
            <div className="pillar-image-wrap">
              <img src={pillar.image} alt={pillar.alt} loading="lazy" />
              <span className="pillar-number">{pillar.number}</span>
            </div>
            <div className="pillar-copy">
              <p className="eyebrow">{pillar.tag}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}