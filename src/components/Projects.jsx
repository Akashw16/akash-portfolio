import React from 'react'
import { motion } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'

const projects = [
  { title: 'Web VAPT Report', tools: 'Burp • Manual' },
  { title: 'Mobile App Assessment', tools: 'Frida • ADB' },
  { title: 'API Security Review', tools: 'Postman • OWASP' },
  { title: 'SAST — SonarQube', tools: 'Code Review' },
  { title: 'Network Recon', tools: 'Nmap • Wireshark' },
  { title: 'Automation Helpers', tools: 'Scripts • Git' },
]

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">Selected Projects</h2>
      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="relative glass p-6 rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform overflow-hidden"
            whileHover={{ scale: 1.08, rotate: 2, boxShadow: '0 0 20px #00fff7' }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <div className="flex items-center gap-3">
              <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"
                style={{ height: 40, width: 40 }}
              />
              <h4 className="font-semibold text-white text-lg">{proj.title}</h4>
            </div>
            <p className="text-slate-300 text-sm mt-2">{proj.tools}</p>

            {/* Neon border animation */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-cyan-400 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-500 to-blue-500 opacity-10 rounded-full blur-3xl pointer-events-none -z-10" />
    </section>
  )
}
