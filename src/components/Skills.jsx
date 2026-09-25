import { useState } from "react";
import { Sparkles, Layers, CheckCircle2, ChevronRight, Info } from "lucide-react";
import { skillsCategories } from "../data/portfolioData";
import { TechLogo } from "./TechLogos";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  // Default hovered skill to first one in frontend
  const [selectedSkill, setSelectedSkill] = useState(skillsCategories[0].skills[0]);

  const allSkillsFlat = skillsCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryId: cat.id, categoryName: cat.name }))
  );

  const displayedCategories =
    activeCategory === "all"
      ? skillsCategories
      : skillsCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="skills-ecosystem-section" aria-label="Technical Skills Ecosystem">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-label-group">
          <span className="section-eyebrow">02 / CAPABILITIES & TECH MATRIX</span>
          <h2 className="section-editorial-heading">
            Interactive skill <span className="text-gradient-highlight">ecosystem.</span>
          </h2>
          <p className="section-editorial-sub">
            Hover over any technology in the ecosystem to inspect real-world implementation context and engineering depth.
          </p>
        </div>

        {/* Category Navigation Pills with Highlighted Number Badges */}
        <div className="skills-filter-pills-row">
          <button
            type="button"
            className={"filter-pill-btn " + (activeCategory === "all" ? "active" : "")}
            onClick={() => setActiveCategory("all")}
            data-cursor="ALL"
          >
            <span className="pill-btn-label">All Categories</span>
            <span className="pill-btn-count">{allSkillsFlat.length}</span>
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={"filter-pill-btn " + (activeCategory === cat.id ? "active" : "")}
              onClick={() => setActiveCategory(cat.id)}
              data-cursor={cat.name}
            >
              <span className="pill-btn-label">{cat.name}</span>
              <span className="pill-btn-count">{cat.skills.length}</span>
            </button>
          ))}
        </div>

        {/* 2-Column Ecosystem Layout: Grid on Left, Inspector on Right */}
        <div className="skills-layout-grid">
          {/* Left: Categorized Interactive Skill Ecosystem */}
          <div className="skills-matrix-area">
            {displayedCategories.map((cat) => (
              <div key={cat.id} className="skill-category-cluster">
                <div className="cluster-header-row">
                  <div className="cluster-title-group">
                    <span className="cluster-accent-bar" />
                    <h3 className="cluster-title">{cat.name}</h3>
                    <span className="cluster-count-tag">{cat.skills.length} Techs</span>
                  </div>
                  <span className="cluster-badge">{cat.badge}</span>
                </div>

                <div className="cluster-chips-grid">
                  {cat.skills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    const tierClass = "tier-" + (skill.level?.toLowerCase() || "advanced");
                    return (
                      <div
                        key={skill.name}
                        className={"skill-ecosystem-pill " + (isSelected ? "is-selected" : "")}
                        onMouseEnter={() => setSelectedSkill({ ...skill, categoryName: cat.name })}
                        onClick={() => setSelectedSkill({ ...skill, categoryName: cat.name })}
                        data-cursor="INSPECT"
                      >
                        <span className="skill-pill-icon">
                          <TechLogo name={skill.name} size={22} />
                        </span>
                        <div className="skill-pill-meta">
                          <span className="skill-pill-name">{skill.name}</span>
                          <span className={"skill-pill-tier " + tierClass}>{skill.level}</span>
                        </div>
                        {isSelected && <span className="skill-pill-active-glow" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Sticky Technology Inspector Panel */}
          <div className="skills-inspector-column">
            <div className="sticky-inspector-card">
              <div className="inspector-card-header">
                <div className="inspector-header-left">
                  <span className="inspector-badge">TECH INSPECTOR</span>
                  <span className="inspector-cat-name">{selectedSkill?.categoryName || "FRONTEND"}</span>
                </div>
                <Info size={16} className="inspector-info-icon" />
              </div>

              {selectedSkill && (
                <div className="inspector-body">
                  <div className="inspector-hero-row">
                    <div className="inspector-icon-wrap">
                      <span className="inspector-big-icon">
                        <TechLogo name={selectedSkill.name} size={36} />
                      </span>
                    </div>
                    <div className="inspector-title-wrap">
                      <h4 className="inspector-tech-title">{selectedSkill.name}</h4>
                      <div className="inspector-tier-indicator">
                        <span className="tier-dot" />
                        <span className="tier-text">{selectedSkill.level} Proficiency</span>
                      </div>
                    </div>
                  </div>

                  <div className="inspector-section-block">
                    <span className="inspector-block-label">CORE CAPABILITY</span>
                    <p className="inspector-block-desc">{selectedSkill.desc}</p>
                  </div>

                  <div className="inspector-section-block">
                    <span className="inspector-block-label">REAL-WORLD APPLICATION</span>
                    <div className="inspector-context-box">
                      <CheckCircle2 size={15} className="context-check-icon" />
                      <p className="inspector-context-text">{selectedSkill.context}</p>
                    </div>
                  </div>

                  <div className="inspector-quick-signal">
                    <span>💡 Tap any other skill to swap inspection context</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
