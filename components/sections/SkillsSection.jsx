"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SKILLS_DATA } from "@/constants/data";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";
import LearningCard from "./LearningCard";

/* ── tiny star particle ── */
function Star({ style }) {
  return (
    <motion.div
      animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.4, 1] }}
      transition={{
        duration: 2 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
      style={{
        position: "absolute",
        borderRadius: "50%",
        background: "#fff",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

/* ── scanline overlay (gaming CRT feel) ── */
const SCANLINE_CSS = `
  .scanlines::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.03) 2px,
      rgba(0,0,0,0.03) 4px
    );
    pointer-events: none;
    border-radius: inherit;
    z-index: 0;
  }
`;

/* ── individual skill logo card ── */
function SkillCard({ skill, color, glow, index, categoryInView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.85 }}
      animate={categoryInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ position: "relative" }}
    >
      {/* Outer glow ring on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              inset: -6,
              borderRadius: 20,
              border: `1.5px solid ${color}`,
              boxShadow: `0 0 18px ${glow}, 0 0 36px ${glow}55`,
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        )}
      </AnimatePresence>

      {/* Floating particle burst on hover */}
      <AnimatePresence>
        {hovered &&
          [0, 60, 120, 180, 240, 300].map((deg, pi) => {
            const rad = (deg * Math.PI) / 180;
            const tx = Math.cos(rad) * 36;
            const ty = Math.sin(rad) * 36;
            return (
              <motion.div
                key={pi}
                initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                animate={{ opacity: 0, x: tx, y: ty, scale: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: pi * 0.03 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: color,
                  marginLeft: -2.5,
                  marginTop: -2.5,
                  pointerEvents: "none",
                  zIndex: 10,
                  boxShadow: `0 0 6px ${glow}`,
                }}
              />
            );
          })}
      </AnimatePresence>

      <motion.div
        animate={hovered ? { y: -8, scale: 1.08 } : { y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          width: 84,
          height: 84,
          borderRadius: 18,
          background: hovered
            ? `linear-gradient(145deg, ${color}22, ${color}0a)`
            : "rgba(255,255,255,0.04)",
          border: `1px solid ${hovered ? color + "55" : "rgba(255,255,255,0.08)"}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          cursor: "default",
          backdropFilter: "blur(8px)",
          position: "relative",
          transition: "background 0.3s, border 0.3s",
          overflow: "hidden",
        }}
        className="scanlines"
      >
        {/* Inner shine sweep on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ x: "-120%", skewX: -15 }}
              animate={{ x: "220%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
          )}
        </AnimatePresence>

        {/* Logo image */}
        <div style={{ position: "relative", width: 40, height: 40, zIndex: 2 }}>
          <Image
            src={skill.img}
            alt={skill.name}
            fill
            style={{ objectFit: "contain" }}
            sizes="40px"
          />
        </div>

        {/* Name label */}
        <motion.span
          animate={{ color: hovered ? color : "rgba(255,255,255,0.65)" }}
          style={{
            fontSize: "0.62rem",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontFamily: "monospace",
            zIndex: 2,
            position: "relative",
            maxWidth: 72,
          }}
        >
          {skill.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

/* ── category panel ── */
function CategoryPanel({ group, panelIndex }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: panelIndex * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 24,
        overflow: "hidden",
        border: `1px solid ${hovered ? group.color + "44" : "rgba(255,255,255,0.07)"}`,
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        transition: "border-color 0.3s",
        padding: "1.75rem",
      }}
    >
      {/* Corner glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0.3 }}
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${group.glow} 0%, transparent 70%)`,
          pointerEvents: "none",
          transition: "opacity 0.4s",
        }}
      />

      {/* Top bar accent */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0.3, opacity: hovered ? 1 : 0.4 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${group.color}, transparent)`,
          transformOrigin: "left",
          transition: "all 0.4s",
        }}
      />

      {/* Category label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: "1.5rem",
        }}
      >
        <div
          style={{
            width: 8,
            height: 24,
            borderRadius: 4,
            background: `linear-gradient(to bottom, ${group.color}, ${group.color}44)`,
            boxShadow: `0 0 10px ${group.glow}`,
            flexShrink: 0,
          }}
        />
        <h3
          style={{
            fontFamily: "monospace",
            fontWeight: 800,
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: group.color,
            textShadow: `0 0 12px ${group.glow}`,
          }}
        >
          {group.category}
        </h3>
        {/* count badge */}
        <span
          style={{
            marginLeft: "auto",
            background: `${group.color}22`,
            border: `1px solid ${group.color}44`,
            color: group.color,
            fontSize: "0.65rem",
            fontWeight: 700,
            fontFamily: "monospace",
            padding: "0.15rem 0.55rem",
            borderRadius: 9999,
            letterSpacing: "0.05em",
          }}
        >
          {group.skills.length.toString().padStart(2, "0")}
        </span>
      </div>

      {/* Skill cards grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.85rem",
          justifyContent: "flex-start",
        }}
      >
        {group.skills.map((skill, si) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            color={group.color}
            glow={group.glow}
            index={si}
            categoryInView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ── main section ── */
export default function SkillsSection({ standalone = false }) {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  // generate random stars once
  const stars = Array.from({ length: 60 }, (_, i) => ({
    width: Math.random() * 2.5 + 1,
    height: Math.random() * 2.5 + 1,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.3 + 0.05,
  }));

  return (
    <>
      <style>{SCANLINE_CSS}</style>
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(170deg, #0a0a14 0%, #0d0d1a 40%, #120820 100%)",
          paddingTop: standalone
            ? "calc(var(--section-y) + 72px)"
            : "var(--section-y)",
          paddingBottom: "var(--section-y)",
          paddingLeft: "var(--section-x)",
          paddingRight: "var(--section-x)",
        }}
      >
        {/* Star field */}
        {stars.map((s, i) => (
          <Star key={i} style={s} />
        ))}

        {/* Large nebula blobs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "-10%",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 65%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              right: "-8%",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 65%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "40%",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(108,99,255,1) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(108,99,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── Section header ── */}
        <div
          ref={titleRef}
          className="section-center"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            {/* glitchy top label */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: "1.25rem",
                background: "rgba(108,99,255,0.12)",
                border: "1px solid rgba(108,99,255,0.3)",
                padding: "0.4rem 1.2rem",
                borderRadius: 9999,
              }}
            >
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#6C63FF",
                  display: "block",
                  boxShadow: "0 0 8px #6C63FF",
                }}
              />
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#A78BFA",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Tech Arsenal
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="heading-lg"
              style={{ color: "#fff", marginBottom: "0.75rem" }}
            >
              Skills &{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #6C63FF, #A855F7, #EC4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Technologies
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              style={{
                color: "rgba(255,255,255,0.45)",
                maxWidth: 500,
                margin: "0 auto",
                fontSize: "0.95rem",
                lineHeight: 1.7,
              }}
            >
              Every tool in this arsenal has been battle-tested across real
              products and real users.
            </motion.p>
          </div>

          {/* ── Category panels ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {SKILLS_DATA.map((group, gi) => (
              <CategoryPanel
                key={group.category}
                group={group}
                panelIndex={gi}
              />
            ))}
          </div>
          <AnimatedWrapper delay={0.3} className="mt-10">
            <div
            className=""
              style={{
                border: "1px solid rgba(108,99,255,0.25)",
                borderRadius: 20,
                background: "rgba(108,99,255,0.05)",
                backdropFilter: "blur(12px)",
                overflow: "hidden",
                position: "relative",
                marginTop:"20px"
              }}
            >
              <div
                style={{
                  height: 2,
                  background:
                    "linear-gradient(90deg, transparent, #6C63FF, #A855F7, #EC4899, transparent)",
                }}
              />

              {/* Header row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "1.25rem 1.75rem 0.75rem",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  style={{ fontSize: 18, lineHeight: 1 }}
                >
                  ⚙️
                </motion.div>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontWeight: 800,
                    color: "#A78BFA",
                    fontSize: "0.78rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  Currently Preparing / Learning
                </span>
                {/* Blinking cursor */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 16,
                    background: "#6C63FF",
                    borderRadius: 2,
                    marginLeft: 4,
                    boxShadow: "0 0 8px #6C63FF",
                  }}
                />
              </div>

              {/* Learning items grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: "1px",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                {[
                  {
                    icon: "🔷",
                    name: "TypeScript",
                    desc: "Advanced types, generics, and React integration for type-safe development.",
                    color: "#3178C6",
                    glow: "rgba(49,120,198,0.5)",
                    progress: 55,
                  },
                  {
                    icon: "🧪",
                    name: "Jest & React Testing Library",
                    desc: "Unit testing and component testing for production-ready code.",
                    color: "#C21325",
                    glow: "rgba(194,19,37,0.5)",
                    progress: 40,
                  },
                  {
                    icon: "⚡",
                    name: "Performance Optimization",
                    desc: "Core Web Vitals, Lighthouse auditing, lazy loading, and code splitting.",
                    color: "#F59E0B",
                    glow: "rgba(245,158,11,0.5)",
                    progress: 70,
                  },
                  {
                    icon: "🐳",
                    name: "Docker Basics",
                    desc: "Containerization concepts for modern full-stack development environments.",
                    color: "#2496ED",
                    glow: "rgba(36,150,237,0.5)",
                    progress: 30,
                  },
                  {
                    icon: "🔄",
                    name: "CI/CD Fundamentals",
                    desc: "GitHub Actions for automated build, test, and deploy pipelines.",
                    color: "#10B981",
                    glow: "rgba(16,185,129,0.5)",
                    progress: 35,
                  },
                ].map((item, i) => (
                  <LearningCard key={item.name} item={item} index={i} />
                ))}
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>
    </>
  );
}
