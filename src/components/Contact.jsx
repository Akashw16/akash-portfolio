import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const msg = e.target.message.value

    // mailto fallback
    window.location.href = `mailto:Akashwani.sit.comp@gmail.com?subject=${encodeURIComponent(
      'Portfolio contact from ' + name
    )}&body=${encodeURIComponent(msg + '\n\n' + email)}`

    setStatus('Opening mail client...')
  }

  return (
    <section id="contact" className="mt-16 relative">
      <h2 className="section-title text-cyan-400">Contact Me</h2>

      <motion.form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 glass p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform neon-hover"
      >
        <input
          name="name"
          required
          placeholder="Your Name"
          className="p-3 rounded-xl bg-slate-900 bg-opacity-30 border border-cyan-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="p-3 rounded-xl bg-slate-900 bg-opacity-30 border border-cyan-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Message"
          className="p-3 rounded-xl bg-slate-900 bg-opacity-30 border border-cyan-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 md:col-span-2"
        />
        <button
          type="submit"
          className="md:col-span-2 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold shadow-lg hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </motion.form>

      {status && <p className="mt-4 text-cyan-400 font-medium">{status}</p>}

      {/* Neon background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400 to-blue-500 opacity-10 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  )
}
