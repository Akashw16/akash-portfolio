import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Web App Security', pct: 90 },
  { name: 'API Testing', pct: 85 },
  { name: 'Mobile Security', pct: 70 },
  { name: 'SAST & Code Review', pct: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="mt-16 relative">
      <h2 className="section-title">Core Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="glass p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform neon-hover"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00fff7' }}
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-white font-semibold">{skill.name}</h4>
              <span className="text-cyan-400 font-bold">{skill.pct}%</span>
            </div>

            <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.pct}%` }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-neon"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Neon background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400 to-blue-500 opacity-10 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  )
}
