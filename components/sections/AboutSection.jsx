'use client'
import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import AnimatedWrapper from '@/components/ui/AnimatedWrapper'

/* ── tiny floating code tokens ── */
const CODE_TOKENS = [
  { label: 'useState()', color: '#6C63FF', top: '8%',  left: '2%'  },
  { label: '<Component/>',color: '#A855F7', top: '18%', right: '3%' },
  { label: 'useEffect()', color: '#EC4899', top: '72%', left: '1%'  },
  { label: 'async/await', color: '#14B8A6', bottom:'12%',right:'4%'  },
  { label: '.map()',      color: '#F59E0B', top: '45%', right: '1%' },
  { label: 'SSR/SSG',    color: '#6C63FF', bottom:'28%',left:'3%'   },
]

const FACTS = [
  { icon: '⚛️', title: 'React Obsessed',    desc: 'I think in components. Every UI problem is a composition challenge.' },
  { icon: '🚀', title: 'Performance First',  desc: 'Core Web Vitals are not optional — they are the baseline for every project I ship.' },
  { icon: '🎨', title: 'Pixel Perfect',      desc: 'I obsess over spacing, typography, and micro-interactions until they feel exactly right.' },
  { icon: '🎮', title: 'Gamer Mindset',      desc: 'Gaming sharpened my problem-solving instincts — every bug is just the next level.' },
]

const TECH_STACK = [
  { name: 'React',    color: '#61DAFB', bg: '#61DAFB18' },
  { name: 'Next.js',  color: '#000',    bg: '#00000012' },
  { name: 'Redux',    color: '#764ABC', bg: '#764ABC18' },
  { name: 'Tailwind', color: '#38BDF8', bg: '#38BDF818' },
  { name: 'JS ES6+',  color: '#F7DF1E', bg: '#F7DF1E18' },
  { name: 'Figma',    color: '#F24E1E', bg: '#F24E1E18' },
  { name: 'Power BI', color: '#F2C811', bg: '#F2C81118' },
  { name: 'Git',      color: '#F05032', bg: '#F0503218' },
]

/* ── orbiting ring around photo ── */
/* ── orbiting ring around photo ── */
function OrbitDot({ angle, color, size = 8, radius = 130 }) {
  const rad = (angle * Math.PI) / 180
  const x = Math.cos(rad) * radius
  const y = Math.sin(rad) * radius
  return (
    <motion.div
      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
      style={{
        position: 'absolute',
        left: '50%', top: '50%',
        width: size, height: size,
        borderRadius: '50%',
        background: color,
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        boxShadow: `0 0 ${size * 2}px ${color}`,
        pointerEvents: 'none',
      }}
    />
  )
}

export default function AboutSection({ standalone = false }) {
  const sectionRef  = useRef(null)
  const photoRef    = useRef(null)
  const inView      = useInView(sectionRef, { once: true, margin: '-80px' })
  const photoInView = useInView(photoRef,   { once: true, margin: '-60px' })
  const [hoveredFact, setHoveredFact] = useState(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #fff 0%, #f4f4fd 60%, #fdf4ff 100%)',
        paddingTop: standalone
          ? 'calc(var(--section-y) + 72px)'
          : 'var(--section-y)',
      }}
    >
      {/* ── Parallax mesh background ── */}
      <motion.div
        style={{
          y: bgY,
          position: 'absolute', inset: '-20%',
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(108,99,255,0.07) 0%, transparent 50%),' +
            'radial-gradient(circle at 80% 70%, rgba(168,85,247,0.07) 0%, transparent 50%),' +
            'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Floating grid lines ── */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.025, pointerEvents: 'none',
        backgroundImage:
          'linear-gradient(var(--primary) 1px, transparent 1px),' +
          'linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* ── Floating code tokens ── */}
      {CODE_TOKENS.map((t, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -12, 0], opacity: [0.55, 0.9, 0.55] }}
          transition={{
            duration: 3.5 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
          style={{
            position: 'absolute',
            top: t.top, left: t.left, right: t.right, bottom: t.bottom,
            background: `${t.color}14`,
            border: `1px solid ${t.color}33`,
            color: t.color,
            fontSize: '0.72rem',
            fontFamily: 'monospace',
            fontWeight: 700,
            padding: '0.3rem 0.75rem',
            borderRadius: 9999,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            backdropFilter: 'blur(4px)',
          }}
        >
          {t.label}
        </motion.div>
      ))}

      <div className="section-center" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Section label ── */}
        <AnimatedWrapper className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            👨‍💻 Who I Am
          </span>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>About Me</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            A frontend developer who codes with passion, ships with precision, and never stops learning.
          </p>
        </AnimatedWrapper>

        {/* ── Main two-column layout ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '5rem',
        }}>

          {/* LEFT — Photo column */}
          <div ref={photoRef} style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
              animate={photoInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'relative', width: 280, height: 280 }}
            >
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: -18,
                  border: '2px dashed rgba(108,99,255,0.3)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }}
              />

              {/* Second ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: -36,
                  border: '1px solid rgba(168,85,247,0.18)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }}
              />

              {/* Orbiting dots */}
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12 + i * 2, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                  style={{ position: 'absolute', inset: -18, borderRadius: '50%', pointerEvents: 'none' }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    width: 7, height: 7, borderRadius: '50%',
                    background: ['#6C63FF','#A855F7','#EC4899','#14B8A6','#F59E0B'][i],
                    transform: `translate(-50%, calc(-50% - ${140 + i * 6}px))`,
                    boxShadow: `0 0 10px ${['#6C63FF','#A855F7','#EC4899','#14B8A6','#F59E0B'][i]}`,
                  }} />
                </motion.div>
              ))}

              {/* Photo circle */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 280, height: 280,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid #fff',
                  boxShadow: '0 20px 60px rgba(108,99,255,0.25), 0 0 0 8px rgba(108,99,255,0.08)',
                  position: 'relative', zIndex: 2,
                  background: 'linear-gradient(135deg, #f0f0ff 0%, #fdf4ff 100%)',
                }}
              >
                {/* ── Dummy photo placeholder — replace with <img src="/images/profile.jpg" ... /> ── */}
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: 8,
                  background: 'linear-gradient(145deg, #ede9fe 0%, #fce7f3 100%)',
                }}>
                  {/* Silhouette SVG */}
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="38" r="22" fill="#6C63FF" opacity="0.7"/>
                    <ellipse cx="50" cy="85" rx="34" ry="20" fill="#6C63FF" opacity="0.45"/>
                  </svg>
                  <span style={{
                    fontSize: '0.72rem', color: '#6C63FF', fontWeight: 700,
                    fontFamily: 'monospace', opacity: 0.8,
                    background: 'rgba(108,99,255,0.1)',
                    padding: '0.2rem 0.6rem', borderRadius: 9999,
                  }}>
                    your_photo.jpg
                  </span>
                </div>
              </motion.div>

              {/* Floating badge — experience */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={photoInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                style={{
                  position: 'absolute', right: -20, top: '18%',
                  background: '#fff',
                  borderRadius: 16, padding: '0.6rem 1rem',
                  boxShadow: '0 8px 30px rgba(108,99,255,0.18)',
                  border: '1px solid rgba(108,99,255,0.15)',
                  zIndex: 3, textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', color: 'var(--primary)', lineHeight: 1 }}>3.5+</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 600 }}>Years Exp.</div>
              </motion.div>

              {/* Floating badge — stack */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={photoInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.75, type: 'spring', stiffness: 200 }}
                style={{
                  position: 'absolute', left: -24, bottom: '20%',
                  background: '#fff',
                  borderRadius: 16, padding: '0.6rem 1rem',
                  boxShadow: '0 8px 30px rgba(168,85,247,0.18)',
                  border: '1px solid rgba(168,85,247,0.15)',
                  zIndex: 3,
                }}
              >
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 600, marginBottom: 2 }}>Currently using</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: '#A855F7' }}>Next.js 14 ⚡</div>
              </motion.div>

              {/* Floating badge — location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={photoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                style={{
                  position: 'absolute', left: '50%', bottom: -20,
                  transform: 'translateX(-50%)',
                  background: '#fff',
                  borderRadius: 16, padding: '0.5rem 1.1rem',
                  boxShadow: '0 8px 24px rgba(20,184,166,0.18)',
                  border: '1px solid rgba(20,184,166,0.2)',
                  zIndex: 3, whiteSpace: 'nowrap',
                }}
              >
                <span style={{ fontSize: '0.78rem', color: '#14B8A6', fontWeight: 700 }}>📍 Chennai, India</span>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT — Text column */}
          <div>
            <AnimatedWrapper direction="left" delay={0.1}>
              <h3 className="heading-md" style={{ marginBottom: '1.25rem', lineHeight: 1.3 }}>
                I don't just write code —
                <br />
                <span className="text-gradient">I craft experiences.</span>
              </h3>
            </AnimatedWrapper>

            <AnimatedWrapper direction="left" delay={0.2}>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.97rem' }}>
                As a Frontend Developer from Chennai with{' '}
                <strong style={{ color: 'var(--primary)' }}>1.5+ years</strong> of hands-on experience building
                production-grade web applications. I specialise in <strong style={{ color: 'var(--dark-soft)' }}>React.js</strong>,{' '}
                <strong style={{ color: 'var(--dark-soft)' }}>Next.js</strong>, and modern CSS frameworks.
              </p>
            </AnimatedWrapper>

            <AnimatedWrapper direction="left" delay={0.3}>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.97rem' }}>
                Frontend development isn't just my profession — it's my obsession. I get genuinely excited about
                smooth page transitions, pixel-perfect layouts, and the moment a complex UI finally clicks into place.
                I believe <em style={{ color: 'var(--primary)', fontStyle: 'normal', fontWeight: 600 }}>performance is a feature</em> and that
                every millisecond saved is a better experience for a real person.
              </p>
            </AnimatedWrapper>
          </div>
        </div>

        {/* ── Facts / Personality cards ── */}
        <AnimatedWrapper style={{ marginBottom: '2rem' }}>
          <p style={{
            textAlign: 'center', fontSize: '0.8rem', fontWeight: 700,
            color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem',
          }}>
            What drives me
          </p>
        </AnimatedWrapper>

        <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  gap: '1.25rem',
}}>
  {FACTS.map((fact, i) => (
    <AnimatedWrapper key={fact.title} delay={i * 0.07}>
      <motion.div
        className="card"
        onHoverStart={() => setHoveredFact(i)}
        onHoverEnd={() => setHoveredFact(null)}
        whileHover={{ y: -6 }}
        style={{
          cursor: 'default',
          borderColor: hoveredFact === i ? 'rgba(108,99,255,0.3)' : 'var(--border)',
          background: hoveredFact === i
            ? 'linear-gradient(135deg, #fafafe 0%, #f4f0ff 100%)'
            : '#fff',
          position: 'relative',
          overflow: 'hidden',

          height: '100%',              // ✅ IMPORTANT
          display: 'flex',             // ✅ IMPORTANT
          flexDirection: 'column',     // ✅ IMPORTANT
        }}
      >
        {/* Glow on hover */}
        <motion.div
          animate={{ opacity: hoveredFact === i ? 1 : 0 }}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 80,
            height: 80,
            background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)',
            borderRadius: '50% 0 0 0',
            pointerEvents: 'none',
          }}
        />

        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 14,
          flexGrow: 1   // ✅ fills space evenly
        }}>
          <motion.div
            animate={hoveredFact === i
              ? { rotate: [0, -10, 10, 0], scale: 1.15 }
              : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: 'var(--secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              flexShrink: 0,
            }}
          >
            {fact.icon}
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: 'var(--dark-soft)',
              marginBottom: 4,
            }}>
              {fact.title}
            </h4>

            <p style={{
              color: 'var(--muted)',
              fontSize: '0.83rem',
              lineHeight: 1.6,
              flexGrow: 1   // ✅ pushes content evenly
            }}>
              {fact.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatedWrapper>
  ))}
</div>
        <AnimatedWrapper delay={0.2}>
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, #A855F7 100%)',
            borderRadius: '1.5rem', padding: '2.5rem',
            display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
            alignItems: 'center', justifyContent: 'space-between',
            position: 'relative', overflow: 'hidden',
            marginTop:'20px'
          }}>
            {/* Decorative circles */}
            <div style={{ position: 'absolute', right: -40, top: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 40, bottom: -60, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', color: '#fff', marginBottom: 6 }}>
                Want to build something great together?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>
                I'm open to full-time roles.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: '#fff', color: 'var(--primary)',
                  padding: '0.75rem 1.75rem', borderRadius: 9999,
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '0.9rem', textDecoration: 'none',
                  display: 'inline-block',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                }}
              >
                Get In Touch →
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  color: '#fff',
                  padding: '0.75rem 1.75rem', borderRadius: 9999,
                  fontFamily: 'var(--font-display)', fontWeight: 600,
                  fontSize: '0.9rem', textDecoration: 'none',
                  display: 'inline-block',
                  backdropFilter: 'blur(4px)',
                }}
              >
                View Projects
              </motion.a>
            </div>
          </div>
        </AnimatedWrapper>

      </div>
    </section>
  )
}