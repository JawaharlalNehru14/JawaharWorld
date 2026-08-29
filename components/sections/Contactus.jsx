'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedWrapper from '@/components/ui/AnimatedWrapper'
import StarField from '@/components/ui/StarField'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

const Contactus = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1500)
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: 72, background: 'linear-gradient(135deg, #fafafe 0%, #f0f0ff 100%)', position: 'relative', overflow: 'hidden' }}>
      <StarField count={60} />
      <div className="section-padding section-center" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedWrapper className="text-center">
          <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>📡 Ping Me</span>
          <h1 className="heading-lg" style={{ marginBottom: '1rem' }}>Get In Touch</h1>
          <p style={{ color: 'var(--muted)', maxWidth: 500, margin: '10px auto' }}>
            Whether you have a project, a question, or just want to say hello — my inbox is always open.
          </p>
        </AnimatedWrapper>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', maxWidth: 900, margin: '0 auto' }}>
          {/* Info */}
          <AnimatedWrapper direction="right">
            <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>Let's build something great</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: '20px' }}>
              I'm currently open to full-time roles on Web Applications projects. React.js, Next.js, — let's talk.
            </p>
            {[
              { icon: <FiMail size={18} />, label: 'Email', value: 'jnehru902@gmail.com', href: 'mailto:jnehru902@gmail.com' },
              { icon: <FiPhone size={18} />, label: 'Phone', value: '+91 9025655840', href: 'tel:+919025655840' },
              { icon: <FiMapPin size={18} />, label: 'Location', value: 'Chennai, Tamil Nadu', href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: 44, height: 44, background: 'var(--secondary)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>{icon}</div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: 2 }}>{label}</p>
                  {href ? <a href={href} style={{ fontWeight: 600, color: 'var(--dark-soft)', textDecoration: 'none', fontSize: '0.95rem' }}>{value}</a> : <p style={{ fontWeight: 600, color: 'var(--dark-soft)', fontSize: '0.95rem' }}>{value}</p>}
                </div>
              </div>
            ))}
          </AnimatedWrapper>

          {/* Form */}
          <AnimatedWrapper direction="left">
            <div className="card">
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark-soft)', marginBottom: 6 }}>Your Name</label>
                  <input className="input-field" type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark-soft)', marginBottom: 6 }}>Email Address</label>
                  <input className="input-field" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark-soft)', marginBottom: 6 }}>Your Message</label>
                  <textarea className="input-field" rows={5} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Message" style={{ resize: 'none' }} />
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status !== 'idle'}
                >
                  {status === 'idle' && <><FiSend size={16} /><span>Send Message</span></>}
                  {status === 'sending' && <span>Sending...</span>}
                  {status === 'sent' && <span>✓ Message Sent!</span>}
                </motion.button>
              </form>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  )
}

export default Contactus