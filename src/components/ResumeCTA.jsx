import { ArrowUpRight, Download, FileText, CheckCircle2, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function ResumeCTA() {
  return (
    <section className="resume-cta-section" aria-label="Resume CTA">
      <div className="section-container">
        <div className="resume-cta-card">
          {/* Subtle atmospheric glow */}
          <div className="resume-glow" />

          <div className="resume-card-grid">
            {/* Left Column: Heading, description & Action Buttons */}
            <div className="resume-info-col">
              <span className="resume-eyebrow">CURRICULUM VITAE</span>
              <h2 className="resume-heading">Want the complete story?</h2>
              <p className="resume-desc">
                Review my academic trajectory, complete project case studies, and engineering proficiencies in a clean, ATS-optimized one-page dossier.
              </p>

              <div className="resume-buttons-row">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn-primary"
                  data-cursor="VIEW PDF"
                >
                  <FileText size={16} />
                  <span>VIEW RESUME</span>
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="/resume.pdf"
                  download="Tamilarasi_M_Resume.pdf"
                  className="resume-btn-secondary"
                  data-cursor="DOWNLOAD"
                >
                  <Download size={16} />
                  <span>DOWNLOAD RESUME</span>
                </a>
              </div>
            </div>

            {/* Right Column: Refined Animated Document Preview */}
            <div className="resume-preview-col">
              <div className="resume-doc-sheet" data-cursor="DOSSIER">
                <div className="doc-top-bar">
                  <span className="doc-dot" />
                  <span className="doc-dot" />
                  <span className="doc-dot" />
                  <span className="doc-title-tag">Tamilarasi_M_Resume.pdf</span>
                </div>

                <div className="doc-content-mock">
                  <div className="doc-header-block">
                    <strong className="doc-name">{personalInfo.name}</strong>
                    <span className="doc-role">Computer Science Engineer · AI & Web</span>
                    <span className="doc-contact">Theni, Tamil Nadu · {personalInfo.email}</span>
                  </div>

                  <div className="doc-divider-line" />

                  <div className="doc-section-row">
                    <span className="doc-sec-lbl">EDUCATION</span>
                    <div className="doc-sec-text">B.E. CSE — Kongunadu College of Engg (CGPA: 8.0)</div>
                  </div>

                  <div className="doc-section-row">
                    <span className="doc-sec-lbl">PROJECTS</span>
                    <div className="doc-sec-text">Placement AI Agent · SmartFrame AI · PCOS ML</div>
                  </div>

                  <div className="doc-section-row">
                    <span className="doc-sec-lbl">AWARDS</span>
                    <div className="doc-sec-text">2nd Prize FIESTAA'26 · TN Startup Mission Pitch</div>
                  </div>
                </div>

                <div className="doc-verified-stamp">
                  <Sparkles size={13} />
                  <span>Verified 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
