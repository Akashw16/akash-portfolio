import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen text-slate-50 bg-gradient-to-b from-[#031024] to-[#071827] scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        {/* Hero Section */}
        <Hero />

        {/* Skills */}
        <Skills />

        {/* Experience */}
        <Experience />

        {/* Education */}
        <Education />

        {/* Tools */}
        <Tools />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
