import { useState, useEffect, useRef } from "react";
import { Sparkles, GraduationCap, Code2, Brain, Palette, Trophy, Rocket, Briefcase, FileText } from "lucide-react";
import { aboutData } from "../data/portfolioData";

function AnimatedStatNumber({ target, decimals = 0, suffix = "", prefix = "", isVisible }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const duration = 1500;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Fast start, soft decel curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * target;
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isVisible, target]);

  const formatted = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue);

  return (
    <span className="h-stat-val">
      {prefix}
      {isVisible ? formatted : (decimals > 0 ? "0.0" : "0")}
      {suffix}
    </span>
  );
}

export default function About() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsStripRef = useRef(null);
  const stepperListRef = useRef(null);
  const swipeTimerRef = useRef(null);

  const pillarIcons = {
    "CSE STUDENT": <GraduationCap size={16} className="pillar-ic" />,
    "AI ENTHUSIAST": <Brain size={16} className="pillar-ic" />,
    "FRONTEND DEVELOPER": <Code2 size={16} className="pillar-ic" />,
    "UI/UX EXPLORER": <Palette size={16} className="pillar-ic" />,
    "CREATIVE THINKER": <Sparkles size={16} className="pillar-ic" />,
  };

  // Helper to trigger swipe glow state
  const triggerSwipeState = () => {
    setIsSwiping(true);
    if (swipeTimerRef.current) clearTimeout(swipeTimerRef.current);
    swipeTimerRef.current = setTimeout(() => {
      setIsSwiping(false);
    }, 750);
  };

  // 1. Scroll-driven synchronization: As the user scrolls through About,
  // the 01, 02, 03, 04, 05 nodes dynamically activate and glow in sequence!
  useEffect(() => {
    const handleScroll = () => {
      triggerSwipeState();

      if (!stepperListRef.current) return;
      const items = stepperListRef.current.querySelectorAll(".journey-step-item");
      const windowHeight = window.innerHeight;

      items.forEach((item, idx) => {
        const rect = item.getBoundingClientRect();
        // Active focus band in the center of the viewport
        if (rect.top <= windowHeight * 0.62 && rect.bottom >= windowHeight * 0.38) {
          setActiveStep(idx);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (swipeTimerRef.current) clearTimeout(swipeTimerRef.current);
    };
  }, []);

  // 2. Observe stats strip to trigger dynamic counter animation
  useEffect(() => {
    if (!statsStripRef.current) return;
    if (!window.IntersectionObserver) {
      setStatsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(statsStripRef.current);
    return () => observer.disconnect();
  }, []);

  const narrativeStats = [
    {
      id: "cgpa",
      rawNum: 8.0,
      prefix: "",
      suffix: "",
      decimals: 1,
      label: "CGPA in CSE",
      icon: <GraduationCap size={15} />,
      accentColor: "#f59e0b",
    },
    {
      id: "prize",
      rawNum: 2,
      prefix: "",
      suffix: "nd",
      decimals: 0,
      label: "Prize FIESTAA'26",
      icon: <Trophy size={15} />,
      accentColor: "#fbbf24",
    },
    {
      id: "projects",
      rawNum: 5,
      prefix: "",
      suffix: "+",
      decimals: 0,
      label: "Shipped Projects",
      icon: <Rocket size={15} />,
      accentColor: "#f97316",
    },
    {
      id: "internships",
      rawNum: 2,
      prefix: "",
      suffix: "",
      decimals: 0,
      label: "Internships",
      icon: <Briefcase size={15} />,
      accentColor: "#eab308",
    },
    {
      id: "papers",
      rawNum: 5,
      prefix: "",
      suffix: "",
      decimals: 0,
      label: "Paper Presentations",
      icon: <FileText size={15} />,
      accentColor: "#f59e0b",
    },
  ];

  // 3. Direct Touch Swipe on the Stepper List (Mobile gesture scrub)
  const handleTouchMove = (e) => {
    triggerSwipeState();
    const touch = e.touches[0];
    if (!touch || !stepperListRef.current) return;

    const items = stepperListRef.current.querySelectorAll(".journey-step-item");
    items.forEach((item, idx) => {
      const rect = item.getBoundingClientRect();
      if (touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
        setActiveStep(idx);
      }
    });
  };

  return (
    <section id="about" className="about-editorial-section" aria-label="About Tamilarasi">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-label-group">
          <span className="section-eyebrow">01 / PHILOSOPHY & STORY</span>
          <h2 className="section-editorial-heading">
            Turning ideas into <span className="text-gradient-highlight">experiences.</span>
          </h2>
          <p className="section-editorial-sub">
            {aboutData.subheading}
          </p>
        </div>

        {/* Identity Pillars Ribbon (01 - 05) */}
        <div className={"identity-pillars-grid " + (isSwiping ? "is-swiping" : "")}>
          {aboutData.pillars.map((p, idx) => (
            <div 
              key={p.title} 
              className="identity-pillar-card" 
              data-cursor="IDENTITY"
            >
              <div className="pillar-top-row">
                <span 
                  className="pillar-num"
                  style={{ "--pillar-idx": idx }}
                >
                  0{idx + 1}
                </span>
                {pillarIcons[p.title] || <Sparkles size={16} className="pillar-ic" />}
              </div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* 2-Column Editorial Story Grid */}
        <div className="about-narrative-layout">
          {/* Narrative Text */}
          <div className="narrative-text-box">
            <h3 className="narrative-lead-quote">
              "Code is the medium. Design is the voice. Intelligence is the catalyst."
            </h3>
            <div className="narrative-paragraphs">
              {aboutData.story.map((para, i) => (
                <p key={i} className="narrative-para">
                  {para}
                </p>
              ))}
            </div>

            <div ref={statsStripRef} className="narrative-highlights-strip">
              {narrativeStats.map((st) => (
                <div key={st.id} className="highlight-stat-cell" data-cursor="METRIC">
                  <div className="h-stat-header">
                    <span className="h-stat-icon-aura" style={{ "--stat-accent": st.accentColor }}>
                      {st.icon}
                    </span>
                    <span className="h-stat-indicator-glow" />
                  </div>
                  <div className="h-stat-body">
                    <AnimatedStatNumber
                      target={st.rawNum}
                      decimals={st.decimals}
                      suffix={st.suffix}
                      prefix={st.prefix}
                      isVisible={statsVisible}
                    />
                    <span className="h-stat-lbl">{st.label}</span>
                  </div>
                  <div className="h-stat-glow-bar" />
                </div>
              ))}
            </div>
          </div>

          {/* Visual Timeline: 01 LEARNING → 02 BUILDING → 03 COMPETING → 04 CREATING → 05 GROWING */}
          <div 
            className="visual-journey-box"
            onTouchStart={triggerSwipeState}
            onTouchMove={handleTouchMove}
          >
            <div className="journey-box-header">
              <span className="journey-box-eyebrow">CONTINUOUS EVOLUTION</span>
              <h4 className="journey-box-title">Engineering Journey</h4>
            </div>

            <div 
              ref={stepperListRef}
              className={"journey-stepper-list " + (isSwiping ? "is-swiping" : "")}
            >
              {aboutData.journeyTimeline.map((item, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <div
                    key={item.phase}
                    className={
                      "journey-step-item " + 
                      (isActive ? "is-selected " : "") + 
                      (isPassed ? "is-passed " : "")
                    }
                    onClick={() => {
                      setActiveStep(idx);
                      triggerSwipeState();
                    }}
                    data-cursor="TIMELINE"
                  >
                    <div className="step-marker-col">
                      <div 
                        className={
                          "step-circle-node " + 
                          (isActive ? "active " : "") + 
                          (isPassed ? "passed " : "") + 
                          (isSwiping ? "swiping-glow" : "")
                        }
                        style={{ "--step-idx": idx }}
                      >
                        <span>{item.step}</span>
                      </div>
                      {idx < aboutData.journeyTimeline.length - 1 && (
                        <div className={"step-connecting-line " + (isPassed || isActive ? "active" : "")} />
                      )}
                    </div>

                    <div className="step-content-col">
                      <div className={"step-phase-tag " + (isActive || isPassed ? "active-phase" : "")}>
                        {item.phase}
                      </div>
                      <h5 className="step-title-text">{item.title}</h5>
                      <p className="step-desc-text">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
