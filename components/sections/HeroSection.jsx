'use client'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import StarField from '@/components/ui/StarField'
import ResumeButton from '@/components/ui/ResumeButton'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const ROLES = ['Frontend Developer', 'React.js Specialist', 'Next.js Engineer', 'Web Application Developer', 'Website Developer',  'Power BI Developer']

export default function HeroSection() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })

  const nameY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const roleIndex = useRef(0)
  const roleRef = useRef(null)

  useEffect(() => {
    const roles = ROLES
    let i = 0
    const interval = setInterval(() => {
      i = (i + 1) % roles.length
      if (roleRef.current) {
        roleRef.current.style.opacity = 0
        setTimeout(() => {
          if (roleRef.current) {
            roleRef.current.textContent = roles[i]
            roleRef.current.style.opacity = 1
          }
        }, 300)
      }
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
        overflow: 'hidden', background: 'linear-gradient(135deg, #fafafe 0%, #f0f0ff 50%, #fdf4ff 100%)',
        paddingTop: 72,
      }}
    >
      <StarField count={100} />

      {/* Large background orbit rings */}
      {[300, 500, 700].map((size, i) => (
        <motion.div
          key={i}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + i * 10, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', right: '-10%', top: '50%',
            width: size, height: size,
            marginTop: -size / 2,
            border: '1px solid rgba(108,99,255,0.08)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Glowing orbs */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '0%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="section-padding section-center" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>

          {/* Text content */}
          <div style={{ maxWidth: 680 }}>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#059669', padding: '0.4rem 1rem', borderRadius: 9999, fontSize: '0.825rem', fontWeight: 600, marginBottom: '1.5rem' }}
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'block' }}
              />
              Open to opportunities
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              style={{ fontSize: '1.1rem', color: 'var(--muted)', fontWeight: 500, marginBottom: '0.5rem' }}
            >
              Hello, I'm
            </motion.p>
            <motion.div style={{ y: nameY, opacity: nameOpacity }}>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="heading-xl"
                style={{ marginBottom: '0.5rem', lineHeight: 1.05 }}
              >
                Jawaharlal{' '}
                <motion.span
                  className="text-gradient"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Nehru S
                </motion.span>
              </motion.h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ height: 40, marginBottom: '1.25rem', overflow: 'hidden' }}
            >
              <span
                ref={roleRef}
                style={{
                  display: 'block', fontSize: '1.4rem', fontWeight: 600,
                  fontFamily: 'var(--font-display)', color: 'var(--primary)',
                  transition: 'opacity 0.3s ease',
                }}
              >
                Frontend Developer
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              style={{ display: 'flex', gap: '2rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}
            >
              {[
                { value: '3+', label: 'Years OverAll IT Exp.' },
                { value: '10+', label: 'Projects' },
                { value: '2', label: 'Companies' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--dark-soft)' }}>{value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 560 }}
            >
              I craft high-performance, pixel-perfect web experiences using React.js and Next.js.
              From interactive portals to SEO-optimised storefronts — I build it clean, fast, and scalable.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}
            >
              <Link href="/projects" className="btn-primary">
                <span>View My Work</span>
                <span>→</span>
              </Link>
              <ResumeButton large outlined />
              <Link href="/contact" className="btn-outline">Let's Talk</Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
            >
              {[
/*                 { icon: <FiGithub size={20} />, href: '', label: 'GitHub' },*/                
                { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/jawaharlal-nehru-s-680b86235/', label: 'LinkedIn' },
/*                 { icon: <FiMail size={20} />, href: 'mailto:jnehru902@gmail.com', label: 'Email' },
 */              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, color: 'var(--primary)' }}
                  style={{ color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'var(--muted)', fontSize: '0.75rem', fontWeight: 500 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{ width: 24, height: 36, border: '2px solid var(--border)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 4 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            style={{ width: 4, height: 8, background: 'var(--primary)', borderRadius: 2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}