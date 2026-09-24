import { useEffect } from "react";
import { X, Award, Sparkles, Building, Calendar, CheckCircle2 } from "lucide-react";

export default function AchievementModal({ achievement, onClose }) {
  useEffect(() => {
    if (!achievement) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div
      className="case-study-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="achieve-title"
    >
      <div className="achievement-modal-card">
        <div className="achieve-modal-header">
          <div className="achieve-modal-badge">{achievement.badge}</div>
          <button
            type="button"
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close modal"
            data-cursor="CLOSE"
          >
            <X size={20} />
          </button>
        </div>

        <div className="achieve-modal-body">
          <h2 id="achieve-title" className="achieve-modal-title">
            {achievement.title}
          </h2>

          <div className="achieve-modal-meta-row">
            <div className="meta-cell">
              <Building size={14} className="cell-ic" />
              <span>{achievement.organization}</span>
            </div>
            <div className="meta-cell">
              <Calendar size={14} className="cell-ic" />
              <span>{achievement.date}</span>
            </div>
          </div>

          <div className="achieve-modal-summary-box">
            <p>{achievement.summary}</p>
          </div>

          <div className="achieve-modal-details-box">
            <h4 className="details-header">VERIFIED EVALUATION & DETAILS</h4>
            <p>{achievement.details}</p>
          </div>

          {achievement.skills && (
            <div className="achieve-modal-skills">
              <h4 className="skills-header">COMPETENCIES APPLIED</h4>
              <div className="skills-pills-row">
                {achievement.skills.map((s) => (
                  <span key={s} className="achieve-skill-pill">
                    <CheckCircle2 size={13} className="pill-check" />
                    <span>{s}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="achieve-modal-footer">
            <span className="footer-verified-badge">
              <Sparkles size={14} /> Official Verified Portfolio Milestone
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
