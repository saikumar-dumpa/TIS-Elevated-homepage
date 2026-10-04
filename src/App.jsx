import SiteHeader from './components/layout/SiteHeader.jsx'
import SiteFooter from './components/layout/SiteFooter.jsx'
import MobileContactBar from './components/layout/MobileContactBar.jsx'
import ReadingProgress from './components/animation/ReadingProgress.jsx'
import CustomCursor from './components/animation/CustomCursor.jsx'
import useTheme from './hooks/useTheme.js'
import HeroSection from './components/sections/HeroSection.jsx'
import SchoolFactsSection from './components/sections/SchoolFactsSection.jsx'
import AboutSection from './components/sections/AboutSection.jsx'
import LearningSection from './components/sections/LearningSection.jsx'
import CampusSection from './components/sections/CampusSection.jsx'
import AdmissionsSection from './components/sections/AdmissionsSection.jsx'

// App component: assembles the full homepage and passes the current theme state to the header.
function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <ReadingProgress />
      <CustomCursor />
      <SiteHeader theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <HeroSection />
        <SchoolFactsSection />
        <AboutSection />
        <LearningSection />
        <CampusSection />
        <AdmissionsSection />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  )
}

export default App
