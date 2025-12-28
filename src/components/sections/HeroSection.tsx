"use client";

import { motion } from "framer-motion";
import { Avatar, Button, Chip } from "@heroui/react";
import {
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Star,
  Zap,
  Trophy,
  User,
} from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const, // use a valid easing keyword
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
      aria-label="Presentación de Anthony Cochea"
    >
      {/* Hidden content for SEO */}
      <div className="sr-only">
        <h1>Anthony Cochea - Full Stack Developer en Quito, Ecuador</h1>
        <p>
          Ingeniero de Software graduado de la Universidad de Las Américas
          (UDLA), especializado en desarrollo Full Stack con React, Node.js,
          TypeScript, Go y tecnologías modernas.
        </p>
        <p>
          Ubicado en Quito, Ecuador. 3+ años de experiencia en desarrollo web,
          aplicaciones móviles y soluciones cloud.
        </p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <Avatar
            src="/me.jpeg"
            className="w-40 h-40 mx-auto mb-6 ring-4 ring-white/50 shadow-2xl float relative z-10"
            name="Anthony Cochea"
          />
          <div className="absolute -top-2 -right-2 z-20">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-2 shadow-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Anthony{" "}
            <span className="gradient-text bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent font-extrabold drop-shadow-lg">
              Cochea
            </span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
            <Chip
              color="primary"
              variant="flat"
              className="bg-white/20 text-white backdrop-blur-md text-lg px-4 py-2"
              startContent={<Zap className="w-4 h-4" />}
            >
              Fullstack Developer
            </Chip>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4" />
              <span>Quito, Ecuador</span>
            </div>
            <Chip
              color="success"
              variant="flat"
              className="bg-green-500/20 text-green-100 backdrop-blur-md"
              startContent={<Trophy className="w-4 h-4" />}
            >
              3+ años exp
            </Chip>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Ingeniero de Software especializado en crear{" "}
          <span className="font-bold text-yellow-300">
            soluciones innovadoras
          </span>{" "}
          que transforman ideas en productos digitales extraordinarios. Experto
          en arquitectura moderna y desarrollo fullstack.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            color="primary"
            variant="solid"
            startContent={<Download className="w-5 h-5" />}
            className="bg-white text-gray-800 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold px-8 py-3"
            as="a"
            href="/CV.pdf"
            download="Anthony_Cochea_CV.pdf"
            target="_blank"
          >
            Descargar CV
          </Button>

          <Button
            size="lg"
            variant="bordered"
            startContent={<ExternalLink className="w-5 h-5" />}
            className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-6"
            as="a"
            href="https://github.com/thonyDeveloperSoftware77"
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            size="lg"
            variant="bordered"
            startContent={<User className="w-5 h-5" />}
            className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-6"
            as="a"
            href="https://linkedin.com/in/anthony-cochea-llll-lll"
            target="_blank"
          >
            LinkedIn
          </Button>

          <Button
            size="lg"
            variant="bordered"
            startContent={<Mail className="w-5 h-5" />}
            className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-6"
            as="a"
            href="mailto:thonydevelopersoftware@gmail.com"
          >
            Email
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              number: "3+",
              label: "Años de Experiencia",
              icon: Trophy,
              color: "from-yellow-400 to-orange-500",
            },
            {
              number: "15+",
              label: "Proyectos Completados",
              icon: Star,
              color: "from-green-400 to-blue-500",
            },
            {
              number: "6+",
              label: "Tecnologías Dominadas",
              icon: Zap,
              color: "from-purple-400 to-pink-500",
            },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl text-center group hover:bg-white/20 transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16">
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60 cursor-pointer"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm">Descubre más</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
