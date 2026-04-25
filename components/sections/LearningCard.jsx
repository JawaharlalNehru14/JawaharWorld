'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

export default function LearningCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        background: hovered ? `${item.color}0d` : 'rgba(255,255,255,0.02)',
        padding: '1.25rem 1.5rem',
        cursor: 'default',
        transition: 'background 0.3s',
      }}
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0.3, scaleY: hovered ? 1 : 0.5 }}
        style={{
          position: 'absolute', left: 0, top: '15%', bottom: '15%',
          width: 3, borderRadius: '0 3px 3px 0',
          background: item.color,
          boxShadow: `0 0 12px ${item.glow}`,
          transformOrigin: 'center',
          transition: 'all 0.3s',
        }}
      />

      {/* Shine sweep */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ x: '-120%', skewX: -20 }}
            animate={{ x: '220%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55 }}
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)',
              pointerEvents: 'none', zIndex: 0,
            }}
          />
        )}
      </AnimatePresence>

      {/* Corner glow */}
      <motion.div
        animate={{ opacity: hovered ? 0.8 : 0 }}
        style={{
          position: 'absolute', bottom: -20, right: -20,
          width: 80, height: 80, borderRadius: '50%',
          background: `radial-gradient(circle, ${item.glow} 0%, transparent 70%)`,
          pointerEvents: 'none',
          transition: 'opacity 0.3s',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Icon + title row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.5rem' }}>
          <motion.span
            animate={hovered ? { scale: 1.25, rotate: [0, -10, 10, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.4 }}
            style={{ fontSize: 18, lineHeight: 1, flexShrink: 0 }}
          >
            {item.icon}
          </motion.span>
          <motion.span
            animate={{ color: hovered ? item.color : 'rgba(255,255,255,0.85)' }}
            style={{
              fontFamily: 'monospace', fontWeight: 800,
              fontSize: '0.82rem', letterSpacing: '0.04em',
              transition: 'color 0.3s',
            }}
          >
            {item.name}
          </motion.span>
        </div>

        {/* Description */}
        <p style={{
          color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem',
          lineHeight: 1.65, marginBottom: '0.9rem',
          paddingLeft: 28,
        }}>
          {item.desc}
        </p>

        {/* Progress bar */}
        <div style={{ paddingLeft: 28 }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginBottom: 5,
          }}>
            <span style={{
              fontSize: '0.62rem', fontFamily: 'monospace',
              color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              Progress
            </span>
            <motion.span
              animate={{ color: hovered ? item.color : 'rgba(255,255,255,0.3)' }}
              style={{
                fontSize: '0.65rem', fontFamily: 'monospace',
                fontWeight: 700, transition: 'color 0.3s',
              }}
            >
              {item.progress}%
            </motion.span>
          </div>

          {/* Track */}
          <div style={{
            height: 4, borderRadius: 2,
            background: 'rgba(255,255,255,0.07)',
            overflow: 'hidden',
          }}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: item.progress / 100 } : { scaleX: 0 }}
              transition={{ duration: 1.1, delay: index * 0.1 + 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                height: '100%', borderRadius: 2,
                background: `linear-gradient(90deg, ${item.color}99, ${item.color})`,
                boxShadow: `0 0 8px ${item.glow}`,
                transformOrigin: 'left',
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}