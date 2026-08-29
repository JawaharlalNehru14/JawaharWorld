'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiCheck } from 'react-icons/fi'

export default function ResumeButton({ large = false, outlined = false }) {
  const [state, setState] = useState('idle') // idle | loading | done

  const handleClick = () => {
    setState('loading')
    setTimeout(() => {
      const a = document.createElement('a')
      a.href = '/resume.pdf'
      a.download = 'Jawaharlal_Nehru_S_Resume.pdf'
      a.click()
      setState('done')
      setTimeout(() => setState('idle'), 3000)
    }, 800)
  }

  const baseClass = outlined ? 'btn-outline' : 'btn-primary'
  const sizeStyle = large ? { padding: '1rem 2.5rem', fontSize: '1.05rem' } : {}

  return (
    <motion.button
      onClick={handleClick}
      className={baseClass}
      style={{ ...sizeStyle, minWidth: large ? 200 : 140 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Loading orbit animation */}
      {state === 'loading' && (
        <motion.div
          style={{
            width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)',
            borderTopColor: '#fff', borderRadius: '50%',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
        />
      )}
      <AnimatePresence mode="wait">
        {state === 'idle' && (
          <motion.span key="idle" style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            <FiDownload size={16} />
            <span>Download Resume</span>
          </motion.span>
        )}
        {state === 'loading' && (
          <motion.span key="load" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            Preparing...
          </motion.span>
        )}
        {state === 'done' && (
          <motion.span key="done" style={{ display: 'flex', alignItems: 'center', gap: 8, color: state === 'done' && !outlined ? '#fff' : undefined }}
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
            <motion.span initial={{ rotate: -180, scale: 0 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <FiCheck size={16} />
            </motion.span>
            Downloaded!
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}