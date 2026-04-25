"use client";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "@/constants/data";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";
import StarField from "@/components/ui/StarField";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 72,
        background: "var(--surface-2)",
      }}
    >
      <div className="section-padding section-center">
        <AnimatedWrapper
          className="text-center"
          style={{ marginBottom: "3.5rem" }}
        >
          <span
            className="tag"
            style={{ marginBottom: "1rem", display: "inline-block" }}
          >
            👨🏻‍💻 My Current Works
          </span>
          <h1 className="heading-lg" style={{ marginBottom: "1rem" }}>
            My Current Projects
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: 520, margin: "20px auto" }}>
            Real products. Real users. Real impact. Here's what I've shipped.
          </p>
        </AnimatedWrapper>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PROJECTS_DATA?.map((project, i) => (
            <AnimatedWrapper key={project.title} delay={i * 0.1}>
              <div
                className="card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: 160,
                    borderRadius: "0.75rem",
                    marginBottom: "1.25rem",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Link href={project.demo} target="_blank">
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                        className="project-img"
                      />
                    </div>
                  </Link>
                </div>{" "}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "var(--dark-soft)",
                      }}
                    >
                      {project.title}
                    </h2>
                  </div>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: project.color,
                      fontWeight: 500,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {project.company}
                  </p>
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      marginBottom: "1rem",
                    }}
                  >
                    {project.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="tag"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <a
                    href={project.demo}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      padding: "0.6rem 1rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    <FiExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
