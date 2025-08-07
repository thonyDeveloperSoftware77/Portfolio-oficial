'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardBody, Button, Chip, Divider } from '@heroui/react'
import { Briefcase, ChevronDown, ChevronUp, Calendar, MapPin, Building } from 'lucide-react'

const ExperienceSection = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)

  const experiences = [
    {
      title: "Fullstack Developer",
      company: "Aqua Manager s.a.s",
      period: "2025 – Actualidad",
      location: "Ecuador",
      type: "Tiempo Completo",
      description: [
        "Desarrollo en React y React Native para aplicaciones web y móviles",
        "Integración completa con ERP iDempiere para gestión empresarial",
        "Implementación de módulos de reportería, producción, inventario y costos"
      ],
      details: [
        "PostgreSQL como motor de base de datos principal",
        "Desarrollo de mapas de trazabilidad de procesos productivos",
        "Implementación de funcionalidades offline con sincronización automática",
        "Optimización de consultas y rendimiento de aplicaciones"
      ],
      technologies: ["React", "React Native", "PostgreSQL", "iDempiere", "Node.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Fullstack Developer",
      company: "Shott App EC",
      period: "2024",
      location: "Ecuador",
      type: "Proyecto",
      description: [
        "Desarrollo de backend robusto con Nest.js y arquitectura escalable",
        "Creación de aplicación móvil nativa con React Native",
        "Desarrollo de aplicaciones administrativas con Next.js"
      ],
      details: [
        "Diseño e implementación de base de datos estructurada en PostgreSQL",
        "Sistema de notificaciones push en tiempo real",
        "Implementación de métricas analíticas y dashboard de administración"
      ],
      technologies: ["Nest.js", "React Native", "Next.js", "PostgreSQL", "TypeScript"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Fullstack Developer",
      company: "Kalfone",
      period: "2023 – 2024",
      location: "Ecuador",
      type: "Tiempo Completo",
      description: [
        "Plataforma innovadora de venta de celulares a crédito",
        "Backend de alto rendimiento desarrollado en Go con WebSockets",
        "Aplicación móvil nativa desarrollada en Kotlin"
      ],
      details: [
        "Sistema de bloqueo automático por impago integrado",
        "Desarrollo de servidor MDM para control remoto de dispositivos",
        "Despliegue en múltiples plataformas: Vercel, Render, Cloudflare",
        "Implementación de sistema de pagos y gestión de créditos"
      ],
      technologies: ["Go", "Kotlin", "WebSockets", "PostgreSQL", "Docker"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Fullstack Developer",
      company: "Audit Safe Consulting",
      period: "2022 – 2024",
      location: "Ecuador",
      type: "Tiempo Completo",
      description: [
        "Sistema de evaluación institucional para entes públicos",
        "Backend escalable con Node.js, Sequelize y Express",
        "Frontend moderno y responsivo con Next.js + React"
      ],
      details: [
        "Implementación de gráficos dinámicos y mapas de riesgo interactivos",
        "Integración con autenticación Google OAuth 2.0",
        "SQL Server como motor de datos con optimizaciones avanzadas",
        "Sistema de reportes automatizados y exportación de datos"
      ],
      technologies: ["Node.js", "Next.js", "SQL Server", "Sequelize", "Google OAuth"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Pasante de Desarrollo",
      company: "Produbanco",
      period: "2023",
      location: "Quito, Ecuador",
      type: "Pasantía",
      description: [
        "Desarrollo con arquitectura hexagonal y patrones de diseño",
        "Trabajo con base de datos SQL Server y procedimientos almacenados",
        "Frontend con Angular y backend en C# .NET"
      ],
      details: [],
      technologies: ["C#", "Angular", "SQL Server", ".NET", "Arquitectura Hexagonal"],
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const toggleExperience = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index)
  }

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Experiencia <span className="gradient-text">Profesional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 4 años construyendo soluciones tecnológicas innovadoras en diferentes industrias
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group overflow-hidden">
                <CardBody className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-full bg-gradient-to-r ${exp.color}`}>
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                            <div className="flex items-center gap-2">
                              <Building className="w-4 h-4 text-gray-500" />
                              <p className="text-lg text-gray-600 font-medium">{exp.company}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <Chip size="sm" color="primary" variant="flat">
                            {exp.type}
                          </Chip>
                        </div>
                      </div>

                      {exp.details.length > 0 && (
                        <Button
                          isIconOnly
                          variant="light"
                          size="sm"
                          onPress={() => toggleExperience(index)}
                          className="group-hover:bg-gray-100"
                        >
                          {expandedExperience === index ? 
                            <ChevronUp className="w-5 h-5" /> : 
                            <ChevronDown className="w-5 h-5" />
                          }
                        </Button>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                          <p className="text-gray-700">{desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, i) => (
                        <Chip key={i} size="sm" variant="flat" color="secondary">
                          {tech}
                        </Chip>
                      ))}
                    </div>

                    <AnimatePresence>
                      {expandedExperience === index && exp.details.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Divider className="my-4" />
                          <div className="space-y-2">
                            <p className="font-medium text-gray-700 mb-3">Logros y detalles técnicos:</p>
                            {exp.details.map((detail, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600">{detail}</p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
