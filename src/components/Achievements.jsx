import { useState } from "react";
import { Trophy, Award, Sparkles, Building, Calendar, ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import { achievementsData } from "../data/portfolioData";
import AchievementModal from "./AchievementModal";

export default function Achievements() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const tabs = [
    "ALL",
    "2ND PRIZE",
    "HACKATHONS",
    "PAPER PRESENTATIONS",
    "INTERNSHIPS",
    "CERTIFICATIONS",
    "COURSES",
  ];

  const filtered = achievementsData.filter((item) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "PAPER PRESENTATIONS") {
      return item.category === "PAPER PRESENTATIONS" || item.category === "PROJECTS";
    }
    return item.category === activeTab;
  });

  return (
    <section id="achievements" className="achievements-wall-section" aria-label="Interactive Achievement Wall">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-label-group">
          <span className="section-eyebrow">05 / RECOGNITIONS & 5 RESEARCH PAPERS</span>
          <h2 className="section-editorial-heading">
            Interactive achievement <span className="text-gradient-highlight">wall.</span>
          </h2>
          <p className="section-editorial-sub">
            Verified milestones, hackathon awards, 5 national research paper presentations, startup showcases, and certifications. Tap any card to open complete credential defense.
          </p>
        </div>

        {/* Filter Tabs Wall */}
        <div className="achievement-tabs-strip">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={"achieve-tab-pill " + (activeTab === tab ? "active" : "")}
              onClick={() => setActiveTab(tab)}
              data-cursor={tab}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Achievement Cards Wall */}
        <div className="achievements-grid-wall">
          {filtered.map((item) => {
            const isSpotlight = item.spotlight;
            return (
              <div
                key={item.id}
                className={"achievement-entry-card " + (isSpotlight ? "spotlight" : "")}
                onClick={() => setSelectedAchievement(item)}
                data-cursor="CREDENTIAL"
              >
                {isSpotlight && <div className="card-spotlight-glow" />}

                <div className="entry-card-header">
                  <span className="entry-badge-tag">{item.badge}</span>
                  <span className="entry-date-tag">{item.date}</span>
                </div>

                <h3 className="entry-title-text">{item.title}</h3>

                <div className="entry-org-row">
                  <Building size={13} className="org-icon" />
                  <span>{item.organization}</span>
                </div>

                <p className="entry-summary-text">{item.summary}</p>

                {item.skills && (
                  <div className="entry-skills-chips">
                    {item.skills.slice(0, 3).map((s) => (
                      <span key={s} className="skill-chip-micro">
                        {s}
                      </span>
                    ))}
                    {item.skills.length > 3 && (
                      <span className="skill-chip-micro more">+{item.skills.length - 3}</span>
                    )}
                  </div>
                )}

                <div className="entry-card-action">
                  <span>View Details</span>
                  <ArrowUpRight size={14} className="action-arrow" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Credential Modal */}
      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}
    </section>
  );
}
