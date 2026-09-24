import { useState, useEffect, useRef } from "react";
import { Play, Download, Sparkles, MapPin, Award } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Hero({ onOpenAIChat }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const mapCanvasRef = useRef(null);
  const portraitCardRef = useRef(null);
  const [mouseCoord, setMouseCoord] = useState({ x: 50, y: 50 });

  const roles = [
    "AI-Assisted Software Developer",
    "Computer Vision & Deep Learning Builder",
    "Full-Stack Web & Agentic App Architect",
    "MERN & Python Systems Engineer"
  ];

  const techStack = [
    { name: "Python", color: "#3776AB" },
    { name: "React 19", color: "#61DAFB" },
    { name: "Node.js", color: "#68A063" },
    { name: "MongoDB", color: "#47A248" },
    { name: "YOLOv8", color: "#FF6B00" },
    { name: "Tailwind", color: "#38BDF8" },
    { name: "FastAPI", color: "#009688" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  // Subtle 3D portrait tilt & mouse light
  const handleMouseMove = (e) => {
    const card = portraitCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    const yPercent = Math.min(Math.max((y / rect.height) * 100, 0), 100);
    setMouseCoord({ x: xPercent, y: yPercent });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = portraitCardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    setMouseCoord({ x: 50, y: 50 });
  };

  // Mini World Map Radar Canvas with pulsing Tamil Nadu beacon
  useEffect(() => {
    const canvas = mapCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 2;
    const w = 110;
    const h = 40;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const worldDots = [
      [[-160, 65], [-130, 70], [-80, 70], [-60, 60], [-55, 48], [-65, 44], [-97, 26], [-140, 60]],
      [[-52, 60], [-20, 70], [-30, 82], [-55, 70]],
      [[-76, 8], [-35, -5], [-40, -22], [-60, -40], [-75, -52], [-80, 5]],
      [[0, 36], [28, 41], [40, 55], [30, 60], [5, 50]],
      [[30, 60], [60, 68], [100, 76], [140, 72], [170, 66], [140, 50], [100, 22], [68, 36]],
      [[78, 20], [80, 13], [77, 8], [79, 12]]
    ];

    const isInPolygon = (x, y, poly) => {
      let inside = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const xi = poly[i][0], yi = poly[i][1];
        const xj = poly[j][0], yj = poly[j][1];
        const intersect = (yi > y !== yj > y) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
      }
      return inside;
    };

    ctx.clearRect(0, 0, w, h);
    for (let lx = 0; lx < w; lx += 2.5) {
      for (let ly = 0; ly < h; ly += 2.5) {
        const geoLon = (lx / w) * 360 - 180;
        const geoLat = 90 - (ly / h) * 180;
        let isLand = false;
        for (const poly of worldDots) {
          if (isInPolygon(geoLon, geoLat, poly)) {
            isLand = true;
            break;
          }
        }
        if (isLand) {
          ctx.beginPath();
          ctx.arc(lx, ly, 0.65, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
          ctx.fill();
        }
      }
    }

    const targetX = ((78.96 + 180) / 360) * w;
    const targetY = ((90 - 11.0) / 180) * h;

    const radGlow = ctx.createRadialGradient(targetX, targetY, 0, targetX, targetY, 10);
    radGlow.addColorStop(0, "rgba(249, 115, 22, 0.95)");
    radGlow.addColorStop(0.5, "rgba(249, 115, 22, 0.35)");
    radGlow.addColorStop(1, "rgba(249, 115, 22, 0)");

    ctx.beginPath();
    ctx.arc(targetX, targetY, 10, 0, Math.PI * 2);
    ctx.fillStyle = radGlow;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(targetX, targetY, 2.2, 0, Math.PI * 2);
    ctx.fillStyle = "#ff7a18";
    ctx.shadowColor = "#ff5500";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      {/* Atmospheric Glows */}
      <div className="hero-ambient-glow glow-1" />
      <div className="hero-ambient-glow glow-2" />

      {/* Main 2-Column Responsive Grid */}
      <div className="hero-grid-container">
        
        {/* LEFT COLUMN: BRANDING, TITLE & ACTIONS */}
        <div className="hero-content-column">
          
          {/* Top Brand & Status Strip */}
          <div className="hero-brand-status-bar">
            <div className="hero-cursive-signature" title="Tamilarasi M.">
              Tamilarasi M.
            </div>

            <span className="brand-bar-sep">·</span>

            <div className="status-badge" data-cursor="STATUS">
              <span className="status-pulse-dot" />
              <span className="status-badge-text">AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            <div className="hero-mini-radar" title="Tamil Nadu, India">
              <canvas ref={mapCanvasRef} className="hero-mini-radar-canvas" />
              <div className="hero-radar-dot-beacon">
                <span className="radar-ping" />
                <span className="radar-dot" />
              </div>
            </div>
          </div>

          {/* Futuristic Hero Name */}
          <h1 className="hero-futuristic-title">
            TAMILARASI <span className="hero-futuristic-accent">M.</span>
          </h1>

          {/* Cycling Role Rotator */}
          <div className="hero-role-rotator">
            <span className="role-prefix">&gt;</span>
            <span className="hero-role-text">{roles[roleIndex]}</span>
            <span className="hero-cursor-caret">_</span>
          </div>

          {/* Editorial Bio */}
          <p className="hero-editorial-bio">
            {personalInfo.heroDescription}
          </p>

          {/* Action Buttons */}
          <div className="hero-actions-cluster">
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, "projects")}
              className="btn-orange-glow"
              data-cursor="EXPLORE"
            >
              <Play size={14} fill="currentColor" />
              <span>VIEW PROJECTS</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass-resume"
              data-cursor="RESUME"
            >
              <Download size={14} />
              <span>VIEW RESUME</span>
            </a>

            <button
              type="button"
              onClick={onOpenAIChat}
              className="btn-ai-sparkle"
              data-cursor="AI"
              title="Ask Tamilarasi AI"
            >
              <Sparkles size={14} />
              <span>ASK AI</span>
            </button>
          </div>

          {/* Horizontal Tech Stack Strip */}
          <div className="hero-tech-strip">
            <span className="tech-strip-label">STACK:</span>
            {techStack.map((tech) => (
              <div key={tech.name} className="tech-strip-tag">
                <span className="tech-strip-dot" style={{ backgroundColor: tech.color }} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: HER PROMINENT PORTRAIT PHOTO WITH FLOATING SHAKING CHIPS */}
        <div className="hero-visual-column">
          <div
            ref={portraitCardRef}
            className="editorial-portrait-frame"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              "--mouse-x": mouseCoord.x + "%",
              "--mouse-y": mouseCoord.y + "%",
            }}
          >
            {/* Atmospheric Backlight */}
            <div className="portrait-atmosphere-glow" />

            {/* Inner Photo Container */}
            <div className="portrait-image-wrapper">
              <img
                src="/profile.jpeg"
                alt="Tamilarasi M. — Computer Science Engineer & AI Developer"
                className="portrait-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/profile.jpeg";
                }}
              />
              <div className="portrait-glass-scrim" />

              {/* Bottom Stamp inside photo */}
              <div className="portrait-inner-stamp">
                <div className="stamp-item">
                  <MapPin size={11} className="stamp-icon" />
                  <span>Tamil Nadu, India</span>
                </div>
                <span className="stamp-sep">·</span>
                <div className="stamp-item">
                  <strong>CGPA 8.0</strong>
                </div>
              </div>
            </div>

            {/* 1. Shaking/Floating Chip Top Left */}
            <div className="float-tech-chip chip-top-left" data-cursor="AI AGENTS">
              <Sparkles size={13} className="chip-icon-violet" />
              <span className="chip-label">LangGraph · RAG</span>
            </div>

            {/* 2. Shaking/Floating Chip Mid Right (Fixed sleek pill sizing!) */}
            <div className="float-tech-chip chip-mid-right" data-cursor="REACT 19">
              <span className="chip-pulse-blue" />
              <span className="chip-label">React 19 · UI/UX</span>
            </div>

            {/* 3. Shaking/Floating Chip Bottom Left */}
            <div className="float-tech-chip chip-bottom-left" data-cursor="VISION">
              <span className="chip-pulse-orange" />
              <span className="chip-label">OpenCV · YOLOv8</span>
            </div>

            {/* 4. Shaking/Floating Award Pill Bottom Corner */}
            <div className="portrait-achievement-pill" data-cursor="AWARD">
              <Award size={14} className="achieve-pill-icon" />
              <div className="achieve-pill-text">
                <strong>2nd Prize</strong> FIESTAA'26 Hackathon
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
