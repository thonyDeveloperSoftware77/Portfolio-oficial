'use client'

import { motion } from 'framer-motion'
import { Card, CardBody, Button, Input, Textarea } from '@heroui/react'
import { Mail,  MapPin, Send, MessageCircle, Rocket, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    
    const { nombre, email, asunto, mensaje } = formData
    
    // Crear el cuerpo del email con formato
    const emailBody = `Hola Anthony,

Mi nombre es ${nombre || '[Nombre no proporcionado]'}.
${email ? `Mi email de contacto es: ${email}` : ''}

${mensaje || '[Sin mensaje]'}

Saludos,
${nombre || 'Usuario anónimo'}`

    // Crear el enlace mailto
    const mailtoLink = `mailto:thonydevelopersoftware@gmail.com?subject=${encodeURIComponent(asunto || 'Consulta desde portafolio')}&body=${encodeURIComponent(emailBody)}`
    
    // Abrir el cliente de email
    window.location.href = mailtoLink
  }
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "thonydevelopersoftware@gmail.com",
      href: "mailto:thonydevelopersoftware@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Quito, Ecuador",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const socialLinks = [
    {
      icon: ExternalLink,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:bg-gray-800"
    },
    {
      icon: ExternalLink,
      label: "LinkedIn",
      href: "https://linkedin.com/in/anthony-cochea-llll-lll",
      color: "hover:bg-blue-600"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mt-20 flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Hablemos de tu <span className="gradient-text bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">Proyecto</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Tienes una idea increíble? Me encantaría ayudarte a hacerla realidad. 
            Contactemos y creemos algo extraordinario juntos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              Información de Contacto
            </h3>
            
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={`contact-info-${info.label}`}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group"
                >
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardBody className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-gray-300 text-sm">{info.label}</p>
                          <a 
                            href={info.href}
                            className="text-white font-medium hover:text-blue-300 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              )
            })}

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Sígueme en:</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={`social-${social.label}`}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white transition-all duration-300 ${social.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Envíame un Mensaje</h3>
                
                <form className="space-y-6" onSubmit={handleSendEmail}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Nombre"
                      placeholder="Tu nombre"
                      variant="bordered"
                      value={formData.nombre}
                      onValueChange={(value) => handleInputChange('nombre', value)}
                      className="text-white"
                      classNames={{
                        input: "text-white",
                        label: "text-gray-300",
                        inputWrapper: "border-white/30 hover:border-white/50 focus-within:border-blue-400"
                      }}
                    />
                    <Input
                      label="Email"
                      placeholder="tu@email.com"
                      type="email"
                      variant="bordered"
                      value={formData.email}
                      onValueChange={(value) => handleInputChange('email', value)}
                      className="text-white"
                      classNames={{
                        input: "text-white",
                        label: "text-gray-300",
                        inputWrapper: "border-white/30 hover:border-white/50 focus-within:border-blue-400"
                      }}
                    />
                  </div>
                  
                  <Input
                    label="Asunto"
                    placeholder="¿De qué quieres hablar?"
                    variant="bordered"
                    value={formData.asunto}
                    onValueChange={(value) => handleInputChange('asunto', value)}
                    className="text-white"
                    classNames={{
                      input: "text-white",
                      label: "text-gray-300",
                      inputWrapper: "border-white/30 hover:border-white/50 focus-within:border-blue-400"
                    }}
                  />
                  
                  <Textarea
                    label="Mensaje"
                    placeholder="Cuéntame sobre tu proyecto..."
                    variant="bordered"
                    minRows={4}
                    value={formData.mensaje}
                    onValueChange={(value) => handleInputChange('mensaje', value)}
                    className="text-white"
                    classNames={{
                      input: "text-white",
                      label: "text-gray-300",
                      inputWrapper: "border-white/30 hover:border-white/50 focus-within:border-blue-400"
                    }}
                  />
                  
                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    startContent={<Send className="w-5 h-5" />}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Enviar Mensaje por Gmail
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <p className="text-gray-400">
            © 2025 Anthony Cochea. Desarrollado con React, Hero UI y Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
