'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/constants/data'
import ResumeButton from '@/components/ui/ResumeButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--section-x)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              style={{ width: 40, height: 40, background: 'var(--primary)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span style={{ color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16 }}>JN</span>
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="hidden-mobile">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.path
              return (
                <Link key={link.name} href={link.path} style={{ textDecoration: 'none' }}>
                  <motion.span
                    whileHover={{ y: -1 }}
                    style={{
                      display: 'block', padding: '0.45rem 1rem', borderRadius: 9999,
                      fontSize: '0.875rem', fontWeight: active ? 600 : 500,
                      background: active ? 'var(--primary)' : 'transparent',
                      color: active ? '#fff' : 'var(--muted)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              )
            })}
          </div>

          <div className="hidden-mobile">
            <ResumeButton />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="show-mobile"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          >
            <div style={{ width: 22, height: 2, background: 'var(--dark-soft)', borderRadius: 2, marginBottom: 5, transition: 'all 0.3s', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <div style={{ width: 22, height: 2, background: 'var(--dark-soft)', borderRadius: 2, marginBottom: 5, transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
            <div style={{ width: 22, height: 2, background: 'var(--dark-soft)', borderRadius: 2, transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: 72, left: 0, right: 0, zIndex: 99,
              background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)', padding: '1.5rem var(--section-x)',
              display: 'flex', flexDirection: 'column', gap: 8,
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.path} style={{ textDecoration: 'none', padding: '0.7rem 1rem', borderRadius: 12, color: pathname === link.path ? 'var(--primary)' : 'var(--muted)', fontWeight: pathname === link.path ? 600 : 500, background: pathname === link.path ? 'var(--secondary)' : 'transparent' }}>
                {link.name}
              </Link>
            ))}
            <div style={{ marginTop: 8 }}><ResumeButton /></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive helpers */}
      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  )
}