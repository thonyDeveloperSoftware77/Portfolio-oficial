'use client'

import { motion } from 'framer-motion'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection'
import EducationSection from './sections/EducationSection'
import ContactSection from './sections/ContactSection'
import ParticlesBackground from './ParticlesBackground'
import Navigation from './Navigation'
import SEO from './SEO'

const Portfolio = () => {
  return (
    <div className="relative min-h-screen">
      <SEO />
      <ParticlesBackground />
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </motion.div>
    </div>
  )
}

export default Portfolio
