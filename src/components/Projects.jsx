import { useState, useRef } from "react";
import { ArrowUpRight, CheckCircle2, Sparkles, ExternalLink, BookOpen, Layers, Target, Check, AlertCircle, ArrowDownToLine, Scale, Zap } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { TechLogo } from "./TechLogos";
import { projectsData } from "../data/portfolioData";
import ProjectCaseStudyModal from "./ProjectCaseStudyModal";

// Interactive Mockup Frame tailored to each project
function ProjectMockupVisual({ project }) {
  if (project.id === "placement-prep-agent") {
    return (
      <div className="project-mockup-window">
        <div className="mockup-window-topbar">
          <div className="window-dots">
            <span className="w-dot red" />
            <span className="w-dot yellow" />
            <span className="w-dot green" />
          </div>
          <span className="mockup-window-title">LangGraph Agent · RAG Pipeline</span>
        </div>
        <div className="mockup-screen-body terminal-screen">
          <div className="mockup-stream-line">
            <span className="term-prompt">$</span>
            <span className="term-cmd">python -m agent.evaluate --resume profile.pdf</span>
          </div>
          <div className="mockup-stream-output">
            <span className="stream-badge-green">[RAG-RETRIEVE]</span> Matches: Full-Stack SWE (94% ATS Fit)
          </div>
          <div className="mockup-stream-output">
            <span className="stream-badge-violet">[EVAL-AGENT]</span> Identified 2 Skill Gaps: System Design, Vector DBs
          </div>
          <div className="mockup-agent-drill">
            <div className="drill-header">
              <span className="drill-label">GENERATED TECHNICAL DRILL</span>
              <span className="drill-score">ATS: 94%</span>
            </div>
            <p className="drill-q">"Explain how you would prevent race conditions in asynchronous FastAPI background tasks."</p>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "smartframe-ai") {
    return (
      <div className="project-mockup-window">
        <div className="mockup-window-topbar">
          <div className="window-dots">
            <span className="w-dot red" />
            <span className="w-dot yellow" />
            <span className="w-dot green" />
          </div>
          <span className="mockup-window-title">MediaPipe Face Mesh · 468 Landmarks</span>
        </div>
        <div className="mockup-screen-body vision-screen">
          <div className="vision-radar-grid">
            <div className="mesh-center-reticle" />
            <div className="mesh-pupil-left" />
            <div className="mesh-pupil-right" />
            <div className="mesh-ipd-line">
              <span className="ipd-measure-tag">IPD: 63.4 mm (±0.2mm)</span>
            </div>
          </div>
          <div className="vision-hud-meta">
            <div className="hud-cell">
              <span className="hud-lbl">CONTOUR</span>
              <strong className="hud-val">Oval / Balanced</strong>
            </div>
            <div className="hud-cell">
              <span className="hud-lbl">CONFIDENCE</span>
              <strong className="hud-val text-green">98.2%</strong>
            </div>
            <div className="hud-cell">
              <span className="hud-lbl">RECOMMENDATION</span>
              <strong className="hud-val text-cyan">Classic Rectangle #402</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "pcos-prediction") {
    return (
      <div className="project-mockup-window">
        <div className="mockup-window-topbar">
          <div className="window-dots">
            <span className="w-dot red" />
            <span className="w-dot yellow" />
            <span className="w-dot green" />
          </div>
          <span className="mockup-window-title">Clinical Diagnostic Ensemble · Scikit-learn</span>
        </div>
        <div className="mockup-screen-body clinical-screen">
          <div className="clinical-metrics-row">
            <div className="clin-box">
              <span className="clin-lbl">Sensitivity (Recall)</span>
              <span className="clin-val text-green">96.4%</span>
            </div>
            <div className="clin-box">
              <span className="clin-lbl">ROC-AUC Score</span>
              <span className="clin-val text-cyan">0.941</span>
            </div>
            <div className="clin-box">
              <span className="clin-lbl">Ensemble Model</span>
              <span className="clin-val">XGBoost + RF</span>
            </div>
          </div>
          <div className="clinical-feature-bars">
            <div className="feat-bar-row">
              <span className="feat-name">Follicle Count (R/L)</span>
              <div className="feat-track"><div className="feat-fill f1" /></div>
            </div>
            <div className="feat-bar-row">
              <span className="feat-name">LH / FSH Hormone Ratio</span>
              <div className="feat-track"><div className="feat-fill f2" /></div>
            </div>
            <div className="feat-bar-row">
              <span className="feat-name">Endometrial Thickness</span>
              <div className="feat-track"><div className="feat-fill f3" /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "expense-approval-system") {
    return (
      <div className="project-mockup-window">
        <div className="mockup-window-topbar">
          <div className="window-dots">
            <span className="w-dot red" />
            <span className="w-dot yellow" />
            <span className="w-dot green" />
          </div>
          <span className="mockup-window-title">n8n Workflow Automation Engine</span>
        </div>
        <div className="mockup-screen-body workflow-screen">
          <div className="workflow-nodes-flow">
            <div className="wf-node n-in">
              <span className="wf-node-icon"><ArrowDownToLine size={13} color="#38BDF8" /></span>
              <span className="wf-node-name">Webhook Intake</span>
            </div>
            <div className="wf-connector-arrow">→</div>
            <div className="wf-node n-eval">
              <span className="wf-node-icon"><Scale size={13} color="#A78BFA" /></span>
              <span className="wf-node-name">Policy Decision</span>
            </div>
            <div className="wf-connector-arrow">→</div>
            <div className="wf-node n-out">
              <span className="wf-node-icon"><Zap size={13} color="#F59E0B" /></span>
              <span className="wf-node-name">Auto-Approved</span>
            </div>
          </div>
          <div className="workflow-status-callout">
            <span className="wf-pulse-dot" />
            <span>Claim $420.00 within Travel Policy limit — Instant Approval Dispatched</span>
          </div>
        </div>
      </div>
    );
  }

  // Default / Portfolio AI
  return (
    <div className="project-mockup-window">
      <div className="mockup-window-topbar">
        <div className="window-dots">
          <span className="w-dot red" />
          <span className="w-dot yellow" />
          <span className="w-dot green" />
        </div>
        <span className="mockup-window-title">Tamilarasi AI · Digital Experience</span>
      </div>
      <div className="mockup-screen-body digital-screen">
        <div className="digital-ui-preview">
          <span className="preview-tag">EDITORIAL DIGITAL PRODUCT</span>
          <h4 className="preview-heading">Building intelligent digital experiences with code, creativity & AI.</h4>
          <div className="preview-chips">
            <span className="prev-chip">Space Grotesk</span>
            <span className="prev-chip">Inter</span>
            <span className="prev-chip">Custom Cursor</span>
            <span className="prev-chip">React 19</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Single Immersive Project Card
function ImmersiveProjectCard({ project, onOpenCaseStudy }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", x + "px");
    card.style.setProperty("--mouse-y", y + "px");
  };

  return (
    <article
      ref={cardRef}
      className="immersive-project-showcase"
      onMouseMove={handleMouseMove}
      data-cursor="VIEW PROJECT"
    >
      <div className="project-card-radial-glow" />

      {/* Top Header Strip */}
      <div className="showcase-top-meta">
        <div className="showcase-num-tag">
          <span className="showcase-num">PROJECT {project.number}</span>
          <span className="showcase-cat-pill">{project.category}</span>
        </div>
        {project.badge && (
          <span className="showcase-special-badge">
            <Sparkles size={13} className="badge-sparkle" />
            <span>{project.badge}</span>
          </span>
        )}
      </div>

      {/* 2-Column Main Showcase: Left info, Right interactive mockup */}
      <div className="showcase-grid-inner">
        {/* Left Column: Narrative & Technical Depth */}
        <div className="showcase-narrative-col">
          <h3 className="showcase-project-name" onClick={() => onOpenCaseStudy(project)}>
            {project.name}
          </h3>
          <p className="showcase-tagline">{project.tagline}</p>
          <p className="showcase-full-desc">{project.description}</p>

          {/* Problem & Solution Callout Blocks */}
          <div className="problem-solution-dual-box">
            <div className="ps-box problem-box">
              <div className="ps-title-row">
                <Target size={14} className="ps-icon problem-icon" />
                <span className="ps-label">THE PROBLEM</span>
              </div>
              <p className="ps-desc">{project.problem}</p>
            </div>

            <div className="ps-box solution-box">
              <div className="ps-title-row">
                <CheckCircle2 size={14} className="ps-icon solution-icon" />
                <span className="ps-label">THE SOLUTION</span>
              </div>
              <p className="ps-desc">{project.solution}</p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="showcase-tech-stack-row">
            {project.techStack.map((tech) => (
              <span key={tech} className="showcase-tech-tag">
                <TechLogo name={tech} size={14} className="tag-tech-svg" />
                <span>{tech}</span>
              </span>
            ))}
          </div>

          {/* Key Features List */}
          <div className="showcase-features-list">
            <span className="features-label">KEY ARCHITECTURAL HIGHLIGHTS</span>
            <ul className="features-items-ul">
              {project.keyFeatures.slice(0, 3).map((feat, i) => (
                <li key={i} className="feature-item-li">
                  <Check size={14} className="feature-check" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Result / Impact Banner */}
          <div className="showcase-impact-banner">
            <span className="impact-indicator-dot" />
            <div className="impact-text-content">
              <strong>IMPACT / RESULT:</strong> {project.resultImpact}
            </div>
          </div>

          {/* Project Action CTA Strip */}
          <div className="showcase-actions-strip">
            <button
              type="button"
              className="showcase-btn-primary"
              onClick={() => onOpenCaseStudy(project)}
              data-cursor="CASE STUDY"
            >
              <BookOpen size={16} />
              <span>READ 7-STEP CASE STUDY</span>
              <ArrowUpRight size={16} className="btn-arrow" />
            </button>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-btn-secondary"
                data-cursor="LIVE"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}

            {project.sourceCodeUrl && (
              <a
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-btn-ghost"
                data-cursor="CODE"
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Custom Product Mockup & Interactive Terminal */}
        <div className="showcase-mockup-col" onClick={() => onOpenCaseStudy(project)}>
          <ProjectMockupVisual project={project} />
          <div className="mockup-deepdive-prompt">
            <span>Click to inspect 7-step architecture & implementation details ↗</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    { id: "all", label: "All Showcases" },
    { id: "ai", label: "AI & Agents", filterFn: (p) => p.category.includes("AI") || p.category.includes("MULTI-AGENT") },
    { id: "cv", label: "Computer Vision", filterFn: (p) => p.category.includes("COMPUTER VISION") },
    { id: "ml", label: "Healthcare ML", filterFn: (p) => p.category.includes("HEALTHCARE") || p.category.includes("MACHINE LEARNING") },
    { id: "automation", label: "Automation", filterFn: (p) => p.category.includes("AUTOMATION") },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "all") return true;
    const cat = categories.find((c) => c.id === filter);
    return cat ? cat.filterFn(p) : true;
  });

  return (
    <section id="projects" className="featured-projects-section" aria-label="Featured Projects Showcase">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-label-group">
          <span className="section-eyebrow">03 / PRODUCT ENGINEERING & CASE STUDIES</span>
          <h2 className="section-editorial-heading">
            Featured <span className="text-gradient-highlight">projects.</span>
          </h2>
          <p className="section-editorial-sub">
            Real software systems engineered from first principles — complete with architecture breakdowns, problem statements, and verifiable impact.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="projects-filter-pills-row">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={"filter-pill-btn " + (filter === c.id ? "active" : "")}
              onClick={() => setFilter(c.id)}
              data-cursor={c.label}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Immersive Projects Stack */}
        <div className="projects-showcase-stack">
          {filteredProjects.map((project) => (
            <ImmersiveProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      </div>

      {/* 7-Step Case Study Modal */}
      {activeModalProject && (
        <ProjectCaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
