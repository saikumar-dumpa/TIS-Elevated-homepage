import { ArrowUpRight, BookOpen } from 'lucide-react'
import ScrollReveal from '../animation/ScrollReveal.jsx'

// AboutSection tells the story of the school and the values behind the learning experience.
export default function AboutSection() {
  return (
    <section className="story-section section-pad" id="story">
      <div className="story-grid shell mx-auto grid w-full">
        <ScrollReveal className="story-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> A SCHOOL FOR THE WHOLE PERSON</p>
          <h2>Big ideas.<br /><em>Good people.</em><br />A wider world.</h2>
          <p className="body-copy">At Tulas, academic ambition and everyday discovery belong together. Students learn, make friends, try new things, and build the independence to take their next step with confidence.</p>
          <a className="text-link cursor-target" href="#learning">Find your place at Tulas <ArrowUpRight size={17} /></a>
        </ScrollReveal>
        <ScrollReveal className="story-visual" delay={0.1}>
          <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=85" alt="A welcoming school building set among green trees" loading="lazy" />
          <div className="story-caption"><span>01 / THE CAMPUS</span><span>Dhoolkot, Dehradun</span></div>
          <div className="story-stamp"><BookOpen size={22} /><span>LEARN<br />WITH PURPOSE</span></div>
        </ScrollReveal>
      </div>
    </section>
  )
}