import React from 'react'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="mt-16">
      <h2 className="section-title">Education</h2>

      <motion.div
        className="glass p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform neon-hover"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00fff7' }}
      >
        <h3 className="text-white text-2xl font-semibold">PG Diploma in Advanced Computing (DAC)</h3>
        <p className="text-slate-300 text-sm">CDAC, Pune, India — 2024</p>

        <h3 className="text-white text-2xl font-semibold mt-4">Bachelor of Engineering in Computer Science</h3>
        <p className="text-slate-300 text-sm">Sinhgad Institute of Technology, Lonavla, Pune — 2019-2023</p>
        <p className="text-cyan-400 text-sm">First Class With Distinction - 7.89 CGPA</p>
      </motion.div>
    </section>
  )
}
