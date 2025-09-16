import React from 'react'
import { motion } from 'framer-motion'

export default function BlobBackground() {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 10, repeat: Infinity }}
      style={{
        background:
          'radial-gradient(circle at 30% 30%, rgba(0,255,255,0.1), transparent 70%), radial-gradient(circle at 70% 70%, rgba(255,0,255,0.1), transparent 70%)',
        filter: 'blur(100px)',
      }}
    />
  )
}
