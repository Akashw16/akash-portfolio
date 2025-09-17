import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-16 py-8 text-center relative glass rounded-t-3xl shadow-inner">
      <div className="flex justify-center gap-6 text-2xl text-cyan-400">
        <motion.a whileHover={{ scale: 1.2, color: '#00fff7' }} href="https://github.com/Akashw16/" target="_blank" rel="noreferrer"><FaGithub /></motion.a>
        <motion.a whileHover={{ scale: 1.2, color: '#00fff7' }} href="https://www.linkedin.com/in/akashw16/" target="_blank" rel="noreferrer"><FaLinkedin /></motion.a>
        <motion.a whileHover={{ scale: 1.2, color: '#00fff7' }} href="mailto:akashwani.sit.comp@gmail.com"><FaEnvelope /></motion.a>
      </div>

      <p className="text-slate-400 mt-4">
        © 2025 Akash. All rights reserved.
      </p>

      <p className="text-slate-300 mt-2">
        Made with 💻 & ⚡ by <span className="text-cyan-400 font-bold">Akash Wani</span>
      </p>
    </footer>
  )
}
