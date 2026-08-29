'use client'
import { useEffect, useRef } from 'react'

export default function StarField({ count = 80 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.innerHTML = ''
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div')
      const size = Math.random() * 3 + 1
      star.style.cssText = `
        position:absolute;
        width:${size}px;
        height:${size}px;
        background:${Math.random() > 0.6 ? '#6C63FF' : '#A855F7'};
        border-radius:50%;
        top:${Math.random() * 100}%;
        left:${Math.random() * 100}%;
        opacity:${Math.random() * 0.4 + 0.1};
        animation:twinkle ${2 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite;
        pointer-events:none;
      `
      container.appendChild(star)
    }
  }, [count])

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}
    />
  )
}