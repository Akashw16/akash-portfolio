import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="mt-16">
      <h2 className="section-title">Experience</h2>

      <motion.div
        className="glass p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform neon-hover"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00fff7' }}
      >
        <h3 className="text-white text-2xl font-semibold">Cybersecurity Analyst</h3>
        <p className="text-slate-300 text-sm">Brain Vision Technology</p>
        <p className="text-cyan-400 text-sm">2024 — Present</p>

        <div className="mt-4 text-slate-300">
          <ul className="list-disc pl-5 space-y-2">
            <li>Conducted VAPT on web, mobile, and API using Burp, ADB, Frida.</li>
            <li>Assisted in incident response and logging vulnerabilities.</li>
            <li>Collaborated with developers to remediate findings.</li>
          </ul>
        </div>

        <div className="mt-6">
          <a
            href="https://brainvisiontechnology.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2 px-4 rounded-xl text-white font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 glass hover:backdrop-brightness-125 transition-all"
          >
            Visit Website
          </a>
        </div>
      </motion.div>
    </section>
  )
}
