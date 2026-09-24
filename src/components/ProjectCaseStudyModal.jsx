import { useEffect, useRef } from "react";
import { X, ArrowUpRight, CheckCircle2, Cpu, Sparkles, BookOpen, Layers, Target, Compass, Code, Award, Lightbulb } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectCaseStudyModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    // Lock body scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Keyboard listener for Escape key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const cs = project.caseStudy || {};

  const sections = [
    { num: "01", title: "OVERVIEW", icon: <Sparkles size={16} className="modal-sec-icon" />, content: cs.overview },
    { num: "02", title: "PROBLEM", icon: <Target size={16} className="modal-sec-icon" />, content: cs.problem || project.problem },
    { num: "03", title: "APPROACH", icon: <Compass size={16} className="modal-sec-icon" />, content: cs.approach },
    { num: "04", title: "TECHNOLOGY", icon: <Code size={16} className="modal-sec-icon" />, content: cs.technology },
    { num: "05", title: "IMPLEMENTATION", icon: <Layers size={16} className="modal-sec-icon" />, content: cs.implementation },
    { num: "06", title: "RESULT", icon: <Award size={16} className="modal-sec-icon" />, content: cs.result || project.resultImpact },
    { num: "07", title: "LESSONS LEARNED", icon: <Lightbulb size={16} className="modal-sec-icon" />, content: cs.lessonsLearned },
  ];

  return (
    <div 
      className="case-study-modal-backdrop" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div ref={modalRef} className="case-study-modal-container">
        {/* Modal Sticky Header */}
        <div className="case-study-modal-header">
          <div className="modal-header-meta">
            <span className="modal-proj-num">PROJECT {project.number}</span>
            <span className="modal-proj-cat">{project.category}</span>
          </div>

          <button
            type="button"
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close case study"
            data-cursor="CLOSE"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="case-study-modal-body">
          {/* Hero Banner inside modal */}
          <div className="modal-hero-banner">
            <h2 id="case-study-title" className="modal-hero-title">
              {project.name}
            </h2>
            <p className="modal-hero-tagline">{project.tagline}</p>

            {/* Tech chips strip */}
            <div className="modal-tech-strip">
              {project.techStack.map((tech) => (
                <span key={tech} className="modal-tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            {/* Quick Action Links */}
            <div className="modal-action-row">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn-action primary"
                  data-cursor="DEMO"
                >
                  <span>LIVE DEMO</span>
                  <ArrowUpRight size={15} />
                </a>
              )}
              {project.sourceCodeUrl && (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn-action secondary"
                  data-cursor="CODE"
                >
                  <GithubIcon size={15} />
                  <span>SOURCE CODE</span>
                </a>
              )}
            </div>
          </div>

          {/* 7-Step Case Study Deep Dive Sections */}
          <div className="case-study-sections-list">
            {sections.map((sec) => (
              <div key={sec.num} className="case-study-sec-block">
                <div className="sec-block-header">
                  <span className="sec-block-number">{sec.num}</span>
                  <div className="sec-block-title-wrap">
                    {sec.icon}
                    <h3 className="sec-block-title">{sec.title}</h3>
                  </div>
                </div>
                <div className="sec-block-content">
                  <p>{sec.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Features Breakdown inside Modal */}
          {project.keyFeatures && (
            <div className="modal-features-card">
              <h4 className="modal-features-title">KEY SYSTEM HIGHLIGHTS</h4>
              <div className="modal-features-grid">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="modal-feature-item">
                    <CheckCircle2 size={16} className="modal-feat-check" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer CTA */}
          <div className="modal-footer-strip">
            <p className="modal-footer-note">
              Have questions about how Tamilarasi engineered this project?
            </p>
            <a
              href="#contact"
              onClick={() => {
                onClose();
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="modal-footer-connect-btn"
            >
              <span>Discuss this project with Tamilarasi ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
