import { ArrowUp, Sparkles, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="editorial-site-footer" aria-label="Footer">
      <div className="section-container">
        {/* Top Tier: Brand, Tagline, & Back to top */}
        <div className="footer-top-tier">
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo" data-cursor="TAMIL">
              <span className="logo-text">TAMILARASI</span>
              <span className="logo-dot">.</span>
            </a>
            <p className="footer-sub-motto">
              AI • WEB • DESIGN • INNOVATION
            </p>
          </div>

          <button
            type="button"
            className="footer-back-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            data-cursor="TOP"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={15} />
          </button>
        </div>

        {/* Thin Divider */}
        <div className="footer-thin-divider" />

        {/* Bottom Tier: Social Links & Copyright */}
        <div className="footer-bottom-tier">
          <div className="footer-social-cluster">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              data-cursor="GITHUB"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <span className="footer-social-sep">·</span>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              data-cursor="LINKEDIN"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>

            <span className="footer-social-sep">·</span>

            <a
              href={"mailto:" + personalInfo.email}
              className="footer-social-link"
              data-cursor="EMAIL"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>

          <div className="footer-copyright-note">
            <span>© 2026 Tamilarasi M. All rights reserved.</span>
            <span className="footer-spec-note">Engineered with React 19 & precision UI craftsmanship.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
