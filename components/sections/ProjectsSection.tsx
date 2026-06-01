"use client";
import { useState } from "react";
import { FEATURED_PROJECTS, OTHER_PROJECTS, ALL_TAGS } from "@/lib/data";
import FeaturedProjectCard from "./FeaturedProjectCard";
import type { Project, ProjectTag } from "@/types";

function OtherCard({ project }: { project: Project }) {
  return (
    <div className="card-hover" style={{
      padding: "22px 24px",
      background: "white",
      border: "1px solid var(--border)",
      borderRadius: "12px",
      display: "flex", flexDirection: "column",
      boxShadow: "0 1px 4px rgba(26,23,20,0.03)"
    }}>
      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "10px" }}>
        {project.tags.slice(0, 2).map(t => (
          <span key={t} style={{
            padding: "2px 8px", borderRadius: "100px",
            background: "var(--bg-alt)", border: "1px solid var(--border)",
            fontFamily: "'DM Sans', sans-serif", fontSize: "11px",
            color: "var(--text-muted)"
          }}>{t}</span>
        ))}
      </div>
      <h3 style={{
        fontFamily: "'Playfair Display', serif", fontWeight: 600,
        fontSize: "16px", color: "var(--text-primary)", marginBottom: "8px"
      }}>{project.title}</h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
        color: "var(--text-secondary)", lineHeight: 1.65, flex: 1, marginBottom: "14px"
      }}>{project.description}</p>

      {project.metrics && (
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "12px" }}>
          {project.metrics.map(m => (
            <span key={m.label} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "12px"
            }}>
              <span style={{ fontWeight: 600, color: "var(--accent)" }}>{m.value}</span>
              <span style={{ color: "var(--text-muted)" }}> {m.label}</span>
            </span>
          ))}
        </div>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
        {project.technologies.slice(0, 4).map(t => (
          <span key={t} className="tech-chip" style={{ fontSize: "11px", padding: "3px 9px" }}>{t}</span>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
        {/* GitHub */}
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noopener" style={{
            padding: "5px 12px", borderRadius: "6px",
            border: "1px solid var(--border-dark)", color: "var(--text-secondary)",
            fontFamily: "'DM Sans', sans-serif", fontSize: "12px", textDecoration: "none"
          }}>GitHub ↗</a>
        )}
        
        {/* Live Demo */}
        {project.links.demo && (
          <a href={project.links.demo} target="_blank" rel="noopener" style={{
            padding: "5px 12px", borderRadius: "6px",
            border: "1px solid #c6dece", color: "#3d7054",
            fontFamily: "'DM Sans', sans-serif", fontSize: "12px", textDecoration: "none"
          }}>🚀 Live Demo</a>
        )}
        
        {/* Technical Report */}
        {project.links.report && (
          <a href={project.links.report} target="_blank" rel="noopener" style={{
            padding: "5px 12px", borderRadius: "6px",
            border: "1px solid #cfc6e8", color: "#5a4880",
            fontFamily: "'DM Sans', sans-serif", fontSize: "12px", textDecoration: "none"
          }}>📄 Report</a>
        )}
        
        {/* Presentation */}
        {project.links.presentation && (
          <a href={project.links.presentation} target="_blank" rel="noopener" style={{
            padding: "5px 12px", borderRadius: "6px",
            border: "1px solid #e8c6c6", color: "#804848",
            fontFamily: "'DM Sans', sans-serif", fontSize: "12px", textDecoration: "none"
          }}>📊 Presentation</a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredFeatured = activeTag === "All"
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.tags.includes(activeTag as ProjectTag));

  const filteredOther = activeTag === "All"
    ? OTHER_PROJECTS
    : OTHER_PROJECTS.filter(p => p.tags.includes(activeTag as ProjectTag));

  return (
    <section id="projects" style={{ padding: "110px 28px", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <p className="section-label" style={{ marginBottom: "10px" }}>Projects</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: "12px"
          }}>Selected Work</h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "15px",
            color: "var(--text-secondary)", maxWidth: "480px"
          }}>
            End-to-end AI systems, research projects, and data engineering solutions.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "48px" }}>
          {ALL_TAGS.map(tag => (
            <button key={tag} onClick={() => setActiveTag(tag)} style={{
              padding: "7px 16px", borderRadius: "100px",
              border: activeTag === tag ? "1px solid var(--border-dark)" : "1px solid var(--border)",
              background: activeTag === tag ? "var(--text-primary)" : "white",
              color: activeTag === tag ? "var(--bg)" : "var(--text-secondary)",
              fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 400,
              cursor: "pointer", transition: "all 0.18s ease"
            }}>{tag}</button>
          ))}
        </div>

        {/* Featured */}
        {filteredFeatured.length > 0 && (
          <>
            <p className="section-label" style={{ marginBottom: "18px" }}>Featured</p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
              gap: "20px", marginBottom: "52px"
            }} className="featured-grid">
              {filteredFeatured.map(p => <FeaturedProjectCard key={p.id} project={p} />)}
            </div>
          </>
        )}

        {/* Other */}
        {filteredOther.length > 0 && (
          <>
            <p className="section-label" style={{ marginBottom: "18px" }}>More Projects</p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
              gap: "14px"
            }}>
              {filteredOther.map(p => <OtherCard key={p.id} project={p} />)}
            </div>
          </>
        )}

        {filteredFeatured.length === 0 && filteredOther.length === 0 && (
          <div style={{ textAlign: "center", padding: "64px 0", color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}>
            No projects match this filter.
          </div>
        )}
      </div>
      <style>{`@media(max-width:560px){.featured-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}