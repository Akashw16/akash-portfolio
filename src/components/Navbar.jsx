import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const links = [
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="flex flex-col md:flex-row items-center justify-between py-4 px-6 bg-gradient-to-b from-[#031024] to-[#071827] fixed w-full z-50 glass shadow-lg">
      
      {/* Logo / Name */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-cyan-400 font-extrabold text-xl md:text-2xl tracking-wider relative mb-3 md:mb-0"
      >
        <span className="relative z-10">Akash Wani</span>
        <span className="absolute inset-0 blur-md bg-cyan-400 opacity-20 rounded-md"></span>
      </motion.div>

      {/* Navigation Links */}
      <nav className="flex flex-col md:flex-row gap-4 md:gap-6 text-center">
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            className="text-slate-300 font-semibold hover:text-cyan-400 neon-hover transition-colors duration-300"
            whileHover={{ scale: 1.1, textShadow: '0 0 8px #00fff7' }}
          >
            {link.name}
          </motion.a>
        ))}
      </nav>
    </header>
  );
}
