'use client'

import { motion } from 'framer-motion'
import { Card, CardBody, Chip } from '@heroui/react'
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy } from 'lucide-react'

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="gradient-text">Educación</span>
          </h2>
          <p className="text-xl text-gray-600">
            Formación académica sólida en ingeniería de software
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-3xl transition-all duration-300 overflow-hidden">
            <CardBody className="p-8">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl relative">
                    <GraduationCap className="w-12 h-12 text-white" />
                    <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1">
                      <Trophy className="w-4 h-4 text-yellow-800" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Ingeniería de Software
                    </h3>
                    <p className="text-xl text-gray-600 font-medium mb-3">
                      Universidad de las Américas (UDLA)
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>2021 – 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Quito, Ecuador</span>
                      </div>
                      <Chip color="success" variant="flat" startContent={<Award className="w-4 h-4" />}>
                        Graduado
                      </Chip>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Áreas de Especialización:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Desarrollo de Software",
                          "Arquitectura de Sistemas",
                          "Bases de Datos",
                          "Ingeniería Web",
                          "Metodologías Ágiles",
                          "Gestión de Proyectos"
                        ].map((area, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Chip variant="flat" color="primary">
                              {area}
                            </Chip>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Competencias Desarrolladas:</h4>
                      <ul className="space-y-3 text-gray-600">
                        {[
                          "Análisis y diseño de sistemas de software complejos",
                          "Implementación de patrones de diseño y arquitecturas escalables",
                          "Gestión de proyectos de software con metodologías ágiles",
                          "Desarrollo full-stack con tecnologías modernas"
                        ].map((competencia, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              index === 0 ? 'bg-blue-500' :
                              index === 1 ? 'bg-purple-500' :
                              index === 2 ? 'bg-green-500' : 'bg-orange-500'
                            }`}></div>
                            <span>{competencia}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
            <CardBody className="p-6 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3">Aprendizaje Continuo</h3>
                <p className="text-white/90">
                  Comprometido con la actualización constante en tecnologías emergentes 
                  y mejores prácticas de desarrollo de software
                </p>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default EducationSection
