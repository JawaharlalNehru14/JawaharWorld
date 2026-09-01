"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { EXPERIENCE_DATA } from "@/constants/data";
import StarField from "@/components/ui/StarField";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";

function Planet({ color, size = 20, style }) {
  return (
    <motion.div
      animate={{ y: [-5, 5, -5], rotate: [0, 5, -5, 0] }}
      transition={{
        duration: 5 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle at 35% 35%, ${color}cc, ${color}44)`,
        boxShadow: `0 0 ${size}px ${color}44`,
        position: "absolute",
        ...style,
        pointerEvents: "none",
      }}
    />
  );
}

export default function ExperienceTimeline({ standalone = false }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #0D0D1A 0%, #1A1A2E 50%, #0D0D1A 100%)",
        paddingTop: standalone
          ? "calc(var(--section-y) + 72px)"
          : "var(--section-y)",
      }}
    >
      <StarField count={120} />
      <Planet color="#6C63FF" size={30} style={{ top: "15%", left: "3%" }} />
      <Planet color="#A855F7" size={18} style={{ top: "40%", right: "5%" }} />
      <Planet color="#EC4899" size={22} style={{ bottom: "25%", left: "8%" }} />
      <Planet color="#14B8A6" size={14} style={{ top: "60%", right: "12%" }} />
      <Planet
        color="#F59E0B"
        size={10}
        style={{ bottom: "10%", right: "20%" }}
      />

      <div
        className="section-center"
        style={{ position: "relative", zIndex: 1 }}
      >
        <AnimatedWrapper
          className="text-center"
          style={{ marginBottom: "4rem" }}
        >
          <span
            className="tag"
            style={{
              marginBottom: "1rem",
              display: "inline-block",
              background: "rgba(108,99,255,0.2)",
              color: "#A78BFA",
              borderColor: "rgba(108,99,255,0.3)",
            }}
          >
            🪐 Career Journey
          </span>
          <h2
            className="heading-lg"
            style={{ color: "#fff", marginBottom: "1rem" }}
          >
            Experience Timeline
          </h2>
          <p style={{ color: "#9CA3AF", maxWidth: 600, margin: "0 auto" }}>
            Every role is a new orbit. Every project, a new mission. Here's my
            journey through the developer universe and My Life journey After Colleage.
          </p>
        </AnimatedWrapper>
        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background: "rgba(108,99,255,0.15)",
              transform: "translateX(-50%)",
            }}
          >
            <motion.div
              style={{
                height: lineHeight,
                background: "linear-gradient(to bottom, #6C63FF, #A855F7)",
                width: "100%",
                originY: 0,
              }}
            />
          </div>

          {EXPERIENCE_DATA.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <div
                key={exp.id}
                ref={ref}
                style={{
                  position: "relative",
                  marginBottom: "4rem",
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "2rem",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: exp.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 20px ${exp.color}66`,
                    }}
                  >
                    <span style={{ fontSize: 20 }}>🚀</span>
                  </motion.div>
                  {exp.current && (
                    <motion.div
                      animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        position: "absolute",
                        inset: -8,
                        border: `2px solid ${exp.color}`,
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </div>
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.15,
                  }}
                  style={{ width: "44%", marginTop: "1rem" }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(12px)",
                      border: `1px solid rgba(255,255,255,0.1)`,
                      borderRadius: "1.25rem",
                      padding: "1.5rem",
                      borderLeft: isLeft ? `3px solid ${exp.color}` : undefined,
                      borderRight: !isLeft
                        ? `3px solid ${exp.color}`
                        : undefined,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "0.75rem",
                        flexWrap: "wrap",
                        gap: 8,
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            color: "#fff",
                            fontSize: "1.05rem",
                            marginBottom: 2,
                          }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          style={{
                            color: exp.color,
                            fontWeight: 600,
                            fontSize: "0.875rem",
                          }}
                        >
                          {exp.company}
                        </p>
                        <p style={{ color: "#6B7280", fontSize: "0.8rem" }}>
                          {exp.location}
                        </p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span
                          style={{
                            background: `${exp.color}22`,
                            color: exp.color,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            padding: "0.3rem 0.75rem",
                            borderRadius: 9999,
                          }}
                        >
                          {exp.period}
                        </span>
                        {exp.current && (
                          <div
                            style={{
                              marginTop: 6,
                              fontSize: "0.7rem",
                              color: "#10B981",
                              fontWeight: 600,
                            }}
                          >
                            ● Current
                          </div>
                        )}
                      </div>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {exp.points.map((pt, pi) => (
                        <motion.li
                          key={pi}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: i * 0.15 + pi * 0.08 + 0.4 }}
                          style={{
                            display: "flex",
                            gap: 8,
                            marginBottom: 6,
                            fontSize: "0.85rem",
                            color: "#D1D5DB",
                          }}
                        >
                          <span
                            style={{
                              color: exp.color,
                              marginTop: 3,
                              flexShrink: 0,
                            }}
                          >
                            ▸
                          </span>
                          {pt}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
