import React from 'react'
import { motion } from 'framer-motion'

const tools = [
  'Burp Suite', 'OWASP ZAP', 'Postman', 'SQLMap', 'DirBuster',
  'Nikto', 'Nmap', 'Wireshark', 'ADB', 'Frida', 'Genymotion', 'SonarQube', 'Git'
]

export default function Tools() {
  return (
    <section id="tools" className="mt-16 space-y-8">
      <h2 className="section-title">Tools & Technologies</h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
        }}
      >
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15, rotate: 2, textShadow: '0px 0px 8px #00fff7' }}
            className="glass p-5 rounded-2xl shadow-xl text-center text-white font-semibold cursor-default relative overflow-hidden neon-rotate"
          >
            {tool}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
