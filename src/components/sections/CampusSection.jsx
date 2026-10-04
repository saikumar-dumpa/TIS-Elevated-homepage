import { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Heart, Users } from 'lucide-react'
import { campusStories } from '../../data/homepage.js'
import ScrollReveal from '../animation/ScrollReveal.jsx'

// CampusSection cycles through the campus stories and shows a selected student-life highlight.
export default function CampusSection() {
  const [activeStory, setActiveStory] = useState(0)
  const story = campusStories[activeStory]

  // changeStory moves through the campus story list in either direction and loops back around.
  const changeStory = (direction) => {
    setActiveStory((currentStory) => (currentStory + direction + campusStories.length) % campusStories.length)
  }

  return (
    <section className="campus-section section-pad" id="campus-life">
      <div className="campus-topline shell mx-auto">
        <ScrollReveal>
          <p className="eyebrow"><span className="eyebrow-mark" /> LIFE ON CAMPUS</p>
          <h2>Good days add up.</h2>
        </ScrollReveal>
        <div className="campus-controls" aria-label="Campus story controls">
          <button className="round-control cursor-target" type="button" onClick={() => changeStory(-1)} aria-label="Previous campus story"><ArrowLeft size={19} /></button>
          <span className="story-count">0{activeStory + 1} <span>/</span> 0{campusStories.length}</span>
          <button className="round-control cursor-target" type="button" onClick={() => changeStory(1)} aria-label="Next campus story"><ArrowRight size={19} /></button>
        </div>
      </div>
      <div className="campus-feature shell mx-auto">
        <ScrollReveal className="campus-image-wrap">
          <img key={story.image} className="campus-image" src={story.image} alt={story.alt} loading="lazy" />
          <span className="campus-image-tag"><Heart size={14} /> {story.category}</span>
        </ScrollReveal>
        <ScrollReveal className="campus-story-copy" delay={0.08}>
          <p className="eyebrow">A CAMPUS WITH MANY CHAPTERS</p>
          <h3>{story.title}</h3>
          <p>{story.description}</p>
          <a className="text-link cursor-target" href="#admissions">See where you could go <ArrowUpRight size={17} /></a>
          <div className="campus-symbol" aria-hidden="true"><Users size={31} /><span>ROOM TO<br />GROW TOGETHER</span></div>
        </ScrollReveal>
      </div>
    </section>
  )
}