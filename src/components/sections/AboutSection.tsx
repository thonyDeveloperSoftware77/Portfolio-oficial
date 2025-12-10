"use client";

import { motion } from "framer-motion";
import { Card, CardBody, Chip } from "@heroui/react";
import {
  Code,
  Zap,
  Target,
  Users,
  Award,
  Lightbulb,
  Rocket,
  Shield,
} from "lucide-react";

const AboutSection = () => {
  const specialties = [
    {
      icon: Code,
      title: "Desarrollo Full-Stack",
      description:
        "Soluciones completas desde frontend hasta backend con las mejores prácticas",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Arquitectura Moderna",
      description:
        "Diseño de sistemas escalables y mantenibles con tecnologías de vanguardia",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Enfoque en Resultados",
      description:
        "Entrega eficiente de productos que generan valor real para el negocio",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Shield,
      title: "Seguridad & Calidad",
      description:
        "Implementación de mejores prácticas de seguridad y código limpio",
      color: "from-orange-500 to-red-500",
    },
  ];

  const qualities = [
    "Responsable",
    "Trabajo en equipo",
    "Sed de aprendizaje",
    "Disciplinado",
    "Perfeccionista",
    "Creativo",
    "Innovador",
    "Proactivo",
  ];

  return (
    <section id="about" className="p-y-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soy un desarrollador apasionado por crear soluciones tecnológicas
            que marquen la diferencia. Con más de 3 años de experiencia, me
            especializo en transformar ideas complejas en aplicaciones elegantes
            y funcionales.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-3xl transition-all duration-300">
              <CardBody className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Mi Filosofía
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Creo firmemente en el poder de la tecnología para resolver
                  problemas reales. Mi enfoque se centra en entender las
                  necesidades del usuario y traducirlas en soluciones técnicas
                  elegantes y eficientes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">
                      Calidad sobre cantidad
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Innovación constante</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Rocket className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Resultados medibles</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50">
                    <CardBody className="p-6">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-r ${specialty.color} group-hover:scale-110 transition-transform duration-300 mb-4 w-fit`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {specialty.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {specialty.description}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl border-0 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
            <CardBody className="p-8 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Mis Cualidades
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {qualities.map((quality, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Chip
                        variant="flat"
                        className="bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-all duration-300 cursor-default"
                      >
                        {quality}
                      </Chip>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
