import { useState, useEffect, useRef } from "react";
import { GraduationCap, Briefcase, Sparkles, CheckCircle2, Calendar, Building } from "lucide-react";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  const [filterType, setFilterType] = useState("all");
  const [activeIdx, setActiveIdx] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const timelineRef = useRef(null);
  const swipeTimerRef = useRef(null);

  const filtered = experienceData.filter((item) => {
    if (filterType === "all") return true;
    return item.type === filterType;
  });

  const typeIcons = {
    education: <GraduationCap size={18} className="timeline-node-icon edu" />,
    internship: <Briefcase size={18} className="timeline-node-icon work" />,
  };

  const triggerSwipeState = () => {
    setIsSwiping(true);
    if (swipeTimerRef.current) clearTimeout(swipeTimerRef.current);
    swipeTimerRef.current = setTimeout(() => {
      setIsSwiping(false);
    }, 750);
  };

  // Scroll synchronization: As user scrolls/swipes through Experience,
  // the timeline marker nodes and spine line illuminate dynamically!
  useEffect(() => {
    const handleScroll = () => {
      triggerSwipeState();

      if (!timelineRef.current) return;
      const cards = timelineRef.current.querySelectorAll(".timeline-card-entry");
      const windowHeight = window.innerHeight;

      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.65 && rect.bottom >= windowHeight * 0.35) {
          setActiveIdx(idx);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (swipeTimerRef.current) clearTimeout(swipeTimerRef.current);
    };
  }, []);

  const handleTouchMove = (e) => {
    triggerSwipeState();
    const touch = e.touches[0];
    if (!touch || !timelineRef.current) return;

    const cards = timelineRef.current.querySelectorAll(".timeline-card-entry");
    cards.forEach((card, idx) => {
      const rect = card.getBoundingClientRect();
      if (touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
        setActiveIdx(idx);
      }
    });
  };

  return (
    <section id="experience" className="experience-timeline-section" aria-label="Journey and Experience">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-label-group">
          <span className="section-eyebrow">04 / EDUCATION & MILESTONES</span>
          <h2 className="section-editorial-heading">
            Experience & <span className="text-gradient-highlight">journey.</span>
          </h2>
          <p className="section-editorial-sub">
            The technical journey — academic rigorous training in Computer Science, specialized hands-on AI internships, and competition achievements.
          </p>
        </div>

        {/* Timeline Filter Controls */}
        <div className="timeline-filter-row">
          <button
            type="button"
            className={"filter-pill-btn " + (filterType === "all" ? "active" : "")}
            onClick={() => {
              setFilterType("all");
              setActiveIdx(0);
            }}
            data-cursor="ALL"
          >
            All Milestones
          </button>
          <button
            type="button"
            className={"filter-pill-btn " + (filterType === "internship" ? "active" : "")}
            onClick={() => {
              setFilterType("internship");
              setActiveIdx(0);
            }}
            data-cursor="INTERNSHIPS"
          >
            Internships ({experienceData.filter((e) => e.type === "internship").length})
          </button>
          <button
            type="button"
            className={"filter-pill-btn " + (filterType === "education" ? "active" : "")}
            onClick={() => {
              setFilterType("education");
              setActiveIdx(0);
            }}
            data-cursor="EDUCATION"
          >
            Education ({experienceData.filter((e) => e.type === "education").length})
          </button>
        </div>

        {/* Interactive Vertical Timeline */}
        <div 
          ref={timelineRef}
          className={"timeline-spine-wrapper " + (isSwiping ? "is-swiping" : "")}
          onTouchStart={triggerSwipeState}
          onTouchMove={handleTouchMove}
        >
          <div className={"timeline-spine-line " + (isSwiping || activeIdx >= 0 ? "glowing" : "")} />

          <div className="timeline-cards-flow">
            {filtered.map((item, idx) => {
              const isActive = activeIdx === idx;
              const isPassed = activeIdx > idx;

              return (
                <div
                  key={idx}
                  className={
                    "timeline-card-entry " +
                    item.type +
                    (isActive ? " is-active" : "") +
                    (isPassed ? " is-passed" : "")
                  }
                  onClick={() => {
                    setActiveIdx(idx);
                    triggerSwipeState();
                  }}
                  data-cursor="MILESTONE"
                >
                  {/* Timeline Marker Node */}
                  <div 
                    className={
                      "timeline-marker-circle " +
                      (isActive ? "active " : "") +
                      (isPassed ? "passed " : "") +
                      (isSwiping ? "swiping-glow" : "")
                    }
                    style={{ "--item-idx": idx }}
                  >
                    {typeIcons[item.type] || <Sparkles size={16} />}
                  </div>

                  {/* Main Card Content */}
                  <div className="timeline-card-content">
                    <div className="timeline-card-topbar">
                      <span className="timeline-date-chip">
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </span>
                      <span className="timeline-badge-pill">{item.badge}</span>
                    </div>

                    <h3 className="timeline-entry-title">{item.title}</h3>

                    <div className="timeline-institution-row">
                      <Building size={14} className="inst-icon" />
                      <span className="institution-name">{item.institution}</span>
                      {item.meta && (
                        <>
                          <span className="inst-sep">·</span>
                          <strong className="timeline-score-badge">{item.meta}</strong>
                        </>
                      )}
                    </div>

                    <p className="timeline-entry-desc">{item.description}</p>

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="timeline-highlights-box">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="timeline-highlight-point">
                            <CheckCircle2 size={14} className="hl-check" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
