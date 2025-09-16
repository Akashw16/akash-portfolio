import React from 'react'
import { motion } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'

export default function Hero() {
  return (
    <section className="relative grid md:grid-cols-2 gap-10 items-center py-16">

      {/* Left Text Content */}
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-cyan-400 tracking-tight leading-snug"
        >
          Hi, I’m Akash.
          <br />
          I break systems (to make them safer)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-slate-300 text-lg max-w-xl"
        >
          Cybersecurity Analyst focused on Web, Mobile & API security. I do VAPT, SAST, and security engineering. I find vulnerabilities, report them, and help teams secure applications.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-6">
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00fff7' }}
            className="inline-flex items-center gap-3 py-3 px-6 rounded-xl text-yellow-400 font-bold bg-gradient-to-r from-cyan-400 to-blue-500 glass hover:backdrop-brightness-125 transition-all relative overflow-hidden"
            href="#contact"
          >
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_touohxv0.json"
              style={{ height: 30, width: 30 }}
            />
            Hire Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00fff7' }}
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl glass border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all"
            href="/resume.pdf"
            download
          >
            Download Resume
          </motion.a>
        </div>
      </div>

      {/* Right Snapshot Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative glass p-8 rounded-3xl shadow-2xl hover:scale-105 transition-transform"
      >
        <h3 className="font-semibold text-white text-xl text-center mb-2">Snapshot</h3>
        <p className="text-slate-300 text-sm text-center mb-4">
          VAPT • SAST • API Security • Burp • ZAP
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
          <motion.div
            className="glass p-4 rounded-lg text-center hover:scale-105 transition-transform relative overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 2, boxShadow: '0 0 15px #00fff7' }}
          >
            Experience
            <br />
            <strong className="text-white">1+ yr</strong>
          </motion.div>

          <motion.div
            className="glass p-4 rounded-lg text-center hover:scale-105 transition-transform relative overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 2, boxShadow: '0 0 15px #00fff7' }}
          >
            Focus
            <br />
            <strong className="text-white">OWASP Top 10</strong>
          </motion.div>
        </div>

        {/* Rotating Neon Border */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-cyan-400 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        />
      </motion.div>

      {/* Background Glow & Cyber Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tr from-purple-500 to-pink-500 opacity-10 rounded-full blur-2xl pointer-events-none -z-10 animate-pulse" />
    </section>
  )
}
