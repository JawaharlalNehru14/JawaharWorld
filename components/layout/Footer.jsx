'use client'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { NAV_LINKS } from '@/constants/data'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark-soft)', color: '#9CA3AF', padding: '3rem var(--section-x) 2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="section-center" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <div style={{ width: 36, height: 36, background: 'var(--primary)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13 }}>JN</span>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', fontSize: '1rem' }}>Jawaharlal Nehru S</span>
          </div>
          <p style={{ fontSize: '0.85rem' }}>Frontend Developer · Chennai, Tamil Nadu</p>
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {NAV_LINKS.map(link => (
            <Link key={link.name} href={link.path} style={{ textDecoration: 'none', color: '#9CA3AF', fontSize: '0.875rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = '#9CA3AF'}>
              {link.name}
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {[
/*             { icon: <FiGithub size={18} />, href: '#' },
 */            { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/jawaharlal-nehru-s-680b86235/' },
/*             { icon: <FiMail size={18} />, href: 'mailto:jnehru902@gmail.com' },
 */          ].map(({ icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#6C63FF'}
              onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}>
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} Jawaharlal Nehru S · Built with Next.js, Tailwind CSS & Framer Motion 🚀
      </div>
    </footer>
  )
}