import { schoolFacts } from '../../data/homepage.js'
import ScrollReveal from '../animation/ScrollReveal.jsx'

// SchoolFactsSection displays big statistics that summarize the school campus and support system.
export default function SchoolFactsSection() {
  return (
    <section className="fact-strip" aria-label="Tulas campus highlights">
      <div className="fact-grid shell mx-auto grid w-full">
        {schoolFacts.map((fact) => (
          <ScrollReveal className="fact-item" key={fact.label}>
            <p className="fact-value">{fact.value}</p>
            <p className="fact-label">{fact.label}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}