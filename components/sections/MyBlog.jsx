"use client";
import { motion } from "framer-motion";
import { BLOGS_DATA } from "@/constants/data";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";

const MyBlog = () => {
  return (
    <div style={{ minHeight: '100vh', paddingTop: 72, background: 'var(--surface)' }}>
      <div className="section-padding section-center">
        <AnimatedWrapper className="text-center" style={{ marginBottom: '3.5rem' }}>
          <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>✍️ My Thoughts</span>
          <h1 className="heading-lg" style={{ marginBottom: '1rem' }}>My Blogs</h1>
          <p style={{ color: 'var(--muted)', maxWidth: 500, margin: '0 auto' }}>
            I write about React, Next.js, and how cricket, space, and gaming inspire the way I think about code.
          </p>
        </AnimatedWrapper>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {BLOGS_DATA.map((blog, i) => (
            <AnimatedWrapper key={blog.title} delay={i * 0.1}>
              <motion.div className="card" whileHover={{ y: -6 }} style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ width: 50, height: 50, background: 'var(--secondary)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{blog.emoji}</div>
                  <span className="tag">{blog.category}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--dark-soft)', marginBottom: '0.6rem', lineHeight: 1.4 }}>{blog.title}</h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{blog.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '0.75rem', fontSize: '0.78rem', color: 'var(--muted-light)' }}>
                  <span>{blog.date}</span>
                  <span>⏱ {blog.readTime}</span>
                </div>
              </motion.div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyBlog