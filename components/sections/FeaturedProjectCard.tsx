"use client";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";

export default function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="card-hover"
      style={{
        background: "white",
        border: "1px solid #e5e5e5",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
    >
      {/* IMAGE SECTION */}
      <div
        style={{
          width: "100%",
          height: "200px",
          overflow: "hidden",
          position: "relative",
          background: "#f5f5f5",
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #c17f5a, #4a7c59)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "48px", opacity: 0.5 }}>🎯</span>
          </div>
        )}
      </div>

      <div
        style={{
          padding: "24px 28px 28px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Category */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
            marginBottom: "8px",
          }}
        >
          {project.category.map((c) => (
            <span
              key={c}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "#888888",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "20px",
            color: "#1a1a1a",
            marginBottom: "8px",
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            color: "#666666",
            lineHeight: 1.7,
            marginBottom: "16px",
            fontWeight: 300,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "7px",
              marginBottom: "14px",
            }}
          >
            {project.metrics.map((m) => (
              <div
                key={m.label}
                style={{
                  padding: "7px 12px",
                  borderRadius: "7px",
                  background: m.highlight ? "#fdf8ed" : "#f5f5f5",
                  border: `1px solid ${m.highlight ? "#e8d8a0" : "#e0e0e0"}`,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: m.highlight ? "#c17f5a" : "#1a1a1a",
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    color: "#888888",
                    marginTop: "1px",
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech chips */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            marginBottom: "20px",
          }}
        >
          {project.technologies.map((t) => (
            <span
              key={t}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                background: "#f0f0f0",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                color: "#666666",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "7px",
            alignItems: "center",
          }}
        >
          {/* Live Demo */}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "8px 16px",
                borderRadius: "7px",
                background: "#1a1a1a",
                color: "white",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              🚀 Live Demo
            </a>
          )}

          {/* GitHub */}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "8px 16px",
                borderRadius: "7px",
                border: "1px solid #e0e0e0",
                color: "#666666",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              GitHub
            </a>
          )}

          {/* Report */}
          {project.links.report && (
            <a
              href={project.links.report}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "8px 16px",
                borderRadius: "7px",
                border: "1px solid #cfc6e8",
                color: "#5a4880",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              📄 Technical Report
            </a>
          )}

          {/* Presentation */}
          {project.links.presentation && (
            <a
              href={project.links.presentation}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "8px 16px",
                borderRadius: "7px",
                border: "1px solid #e8c6c6",
                color: "#804848",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              📊 Presentation
            </a>
          )}
        </div>
      </div>
    </div>
  );
}