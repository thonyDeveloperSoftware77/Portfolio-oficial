'use client'

import { motion } from 'framer-motion'
import { Card, CardBody, Chip, Button } from '@heroui/react'
import { Code, Smartphone, Server, Database, Cloud, Monitor, Cpu, Shield, BarChart3, MessageSquare, Download } from 'lucide-react'
import html2canvas from 'html2canvas'
import { useRef } from 'react'
import { 
  NestIcon, 
  JavascriptIcon, 
  TypeScriptIcon, 
  GoIcon, 
  KotlinIcon, 
  CSharpIcon, 
  ReactIcon, 
  NextJsIcon, 
  AngularIcon, 
  NodejsIcon, 
  PostgreSQLIcon, 
  SqlServerIcon, 
  MongoDbIcon, 
  DockerIcon, 
  KubernetesIcon, 
  VercelIcon,
  FlutterIcon,
  KeycloakIcon,
  ClerkIcon,
  KongIcon,
  FirebaseAuthIcon,
  IstioIcon,
  TraefikIcon,
  OpenIDConnectIcon,
  GrafamaIcon,
  PrometheusIcon,
  JaeguerIcon,
  LokiIcon,
  RabbitMqIcon,
  KafkaIcon,
  CamelIcon,
  SocketIOIcon,
  RedisIcon,
  NATSIcon,
  GRPCIcon,
  FIrebaseIcon,
  TailwindIcon,
  DotNetCOREIcon,
  HonoIcon,
  GithubActionsIcon,
  AntdIcon,
  FigmaIcon
} from '../../assets/icons/icons';

type SkillColor = "primary" | "secondary" | "success" | "warning" | "danger" | "default" | undefined;

type Skill = {
  name: string;
  icon: React.ElementType;
  color: SkillColor;
};

type SkillCategory = {
  icon: React.ElementType;
  title: string;
  color: string;
  skills: Skill[];
};

const SkillsSection = () => {
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const downloadCardAsImage = async (categoryTitle: string) => {
    const cardElement = cardRefs.current[categoryTitle]
    if (!cardElement) return

    try {
      // Configuración para alta calidad
      const canvas = await html2canvas(cardElement, {
        scale: 3, // Aumentar la escala para mayor resolución
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: cardElement.offsetWidth,
        height: cardElement.offsetHeight,
        windowWidth: cardElement.offsetWidth,
        windowHeight: cardElement.offsetHeight,
        logging: false,
        imageTimeout: 0,
        removeContainer: true,
        foreignObjectRendering: true,
        onclone: (clonedDoc) => {
          // Asegurar que los estilos se mantengan en el clon
          const clonedCard = clonedDoc.querySelector(`[data-card="${categoryTitle}"]`) as HTMLElement
          if (clonedCard) {
            clonedCard.style.transform = 'none'
            clonedCard.style.transition = 'none'
            clonedCard.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }
        }
      })

      // Crear enlace de descarga
      const link = document.createElement('a')
      link.download = `skills-${categoryTitle.toLowerCase().replace(/\s+/g, '-')}-anthony-cochea.png`
      link.href = canvas.toDataURL('image/png', 1.0)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error al generar la imagen:', error)
    }
  }

  const skillCategories: SkillCategory[] = [
    {
      icon: Code,
      title: "Lenguajes",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", icon: JavascriptIcon, color: "primary" },
        { name: "TypeScript", icon: TypeScriptIcon, color: "primary" },
        { name: "Go", icon: GoIcon, color: "secondary" },
        { name: "Kotlin", icon: KotlinIcon, color: "success" },
        { name: "C#", icon: CSharpIcon, color: "warning" },
      ]
    },
    {
      icon: Monitor,
      title: "Frontend",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", icon: ReactIcon, color: "primary" },
        { name: "Next.js", icon: NextJsIcon, color: "secondary" },
        { name: "Angular", icon: AngularIcon, color: "success" },
        { name: "TailwindCSS", icon: TailwindIcon, color: "warning" },
        { name: "Antd", icon: AntdIcon, color: "default" },
        { name: "Figma", icon: FigmaIcon, color: "primary" }, 
      ]
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js", icon: NodejsIcon, color: "success" },
        { name: "Nest.js", icon: NestIcon, color: "primary" },
        { name: "Hono", icon: HonoIcon, color: "secondary" },
        { name: "Go", icon: GoIcon, color: "warning" },
        { name: ".Net Core", icon: DotNetCOREIcon, color: "danger" }
      ]
    },
    {
      icon: Smartphone,
      title: "Móvil",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React Native", icon: ReactIcon, color: "primary" },
        { name: "Kotlin", icon: KotlinIcon, color: "success" },
        { name: "Flutter", icon: FlutterIcon, color: "warning" }
      ]
    },
    {
      icon: Database,
      title: "Bases de Datos",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "PostgreSQL", icon: PostgreSQLIcon, color: "primary" },
        { name: "SQL Server", icon: SqlServerIcon, color: "secondary" },
        { name: "MongoDB", icon: MongoDbIcon, color: "success" },
        { name: "Firebase DB", icon: FIrebaseIcon, color: "warning" }
      ]
    },  
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Docker", icon: DockerIcon, color: "primary" },
        { name: "Kubernetes", icon: KubernetesIcon, color: "secondary" },
        { name: "GitHub Actions", icon: GithubActionsIcon, color: "success" },
        { name: "Vercel", icon: VercelIcon, color: "warning" }
      ]
    },
    {
      icon: Shield,
      title: "Autenticación & API Gateway",
      color: "from-red-500 to-pink-500",
      skills: [
        { name: "Keycloak", icon: KeycloakIcon, color: "primary" },
        { name: "Clerk", icon: ClerkIcon, color: "secondary" },
        { name: "Kong", icon: KongIcon, color: "success" },
        { name: "Traefik", icon: TraefikIcon, color: "danger" },
        { name: "OpenID Connect", icon: OpenIDConnectIcon, color: "secondary" },
        { name: "Firebase Auth", icon: FirebaseAuthIcon, color: "success" },
        { name: "Istio", icon: IstioIcon, color: "warning" }
      ]
    },
    {
      icon: BarChart3,
      title: "Observabilidad",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Grafana", icon: GrafamaIcon, color: "primary" },
        { name: "Prometheus", icon: PrometheusIcon, color: "secondary" },
        { name: "Loki", icon: LokiIcon, color: "success" },
        { name: "Jaeger", icon: JaeguerIcon, color: "warning" }
      ]
    },
    {
      icon: MessageSquare,
      title: "Integración y Mensajería",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "RabbitMQ", icon: RabbitMqIcon, color: "primary" },
        { name: "Kafka", icon: KafkaIcon, color: "secondary" },
        { name: "NATS", icon: NATSIcon, color: "success" },
        { name: "gRPC", icon: GRPCIcon, color: "warning" },
        { name: "Socket.IO", icon: SocketIOIcon, color: "danger" },
        { name: "Apache Camel", icon: CamelIcon, color: "success" },
        { name: "Redis Pub/Sub", icon: RedisIcon, color: "warning" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Stack <span className="gradient-text">Tecnológico</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dominio de tecnologías modernas para crear soluciones robustas y escalables
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={`skill-category-${category.title}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  ref={(el) => cardRefs.current[category.title] = el}
                  data-card={category.title}
                  className="relative"
                >
                  <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group hover:scale-105">
                    <CardBody className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                        </div>
                        <Button
                          isIconOnly
                          variant="flat"
                          color="primary"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
                          onClick={() => downloadCardAsImage(category.title)}
                          title={`Descargar ${category.title} como imagen`}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => {
                          const SkillIcon = skill.icon
                          return (
                            <motion.div
                              key={`${category.title}-${skill.name}-${skillIndex}`}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                              viewport={{ once: true }}
                            >
                              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group/skill">
                                <div className="w-8 h-8 flex items-center justify-center">
                                  <SkillIcon className="w-full h-full" />
                                </div>
                                <span className="text-gray-700 font-medium flex-1">{skill.name}</span>
                                <Chip
                                  size="sm"
                                  color={skill.color}
                                  variant="flat"
                                  className="opacity-80 group-hover/skill:opacity-100 transition-opacity"
                                >
                                  Tech
                                </Chip>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>

                      {/* Watermark sutil para la imagen descargada */}
                      <div className="mt-4 text-center opacity-40">
                        <p className="text-xs text-gray-500">Anthony Cochea - Portafolio</p>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="shadow-2xl border-0 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
            <CardBody className="p-8 text-center relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Cpu className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white">Especialización ERP & Sistemas</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Experiencia especializada en integración y desarrollo con sistemas ERP empresariales y herramientas de gestión
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Chip
                    variant="flat"
                    className="bg-white/20 text-white backdrop-blur-md text-lg px-6 py-2"
                  >
                    iDempiere Business Suite
                  </Chip>
                  <Chip
                    variant="flat"
                    className="bg-white/20 text-white backdrop-blur-md text-lg px-6 py-2"
                  >
                    Zammad
                  </Chip>
                  <Chip
                    variant="flat"
                    className="bg-white/20 text-white backdrop-blur-md text-lg px-6 py-2"
                  >
                    Nextcloud
                  </Chip>
                  <Chip
                    variant="flat"
                    className="bg-white/20 text-white backdrop-blur-md text-lg px-6 py-2"
                  >
                    Pasarela de Pagos
                  </Chip>
                  <Chip
                    variant="flat"
                    className="bg-white/20 text-white backdrop-blur-md text-lg px-6 py-2"
                  >
                    n8n
                  </Chip>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection