'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@heroui/react'
import { Home, User, Code, Briefcase, GraduationCap, Mail } from 'lucide-react'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { id: 'hero', label: 'Inicio', icon: Home },
    { id: 'about', label: 'Acerca', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experiencia', icon: Briefcase },
    { id: 'education', label: 'Educación', icon: GraduationCap },
    { id: 'contact', label: 'Contacto', icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <Navbar 
        className="glass backdrop-blur-md bg-white/10 border-b border-white/20"
        maxWidth="full"
        height="70px"
      >
        <NavbarBrand>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl gradient-text"
          >
            AC
          </motion.div>
        </NavbarBrand>

        <NavbarContent className="hidden md:flex gap-4" justify="center">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavbarItem key={item.id}>
                <Button
                  variant={activeSection === item.id ? "solid" : "light"}
                  color={activeSection === item.id ? "primary" : "default"}
                  onPress={() => scrollToSection(item.id)}
                  startContent={<Icon className="w-4 h-4" />}
                  className={`transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                      : 'hover:bg-white/20 text-white'
                  }`}
                >
                  {item.label}
                </Button>
              </NavbarItem>
            )
          })}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as="a"
              href="mailto:thonydevelopersoftware@gmail.com"
              color="primary"
              variant="solid"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contáctame
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </motion.div>
  )
}

export default Navigation
