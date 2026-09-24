import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles, Terminal } from "lucide-react";

export default function Navbar({ onOpenAIChat, onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "ACHIEVEMENTS", href: "#achievements" },
    { label: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "experience", "achievements", "contact"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={"site-header " + (scrolled ? "is-scrolled" : "")}>
      <nav className="nav-container" aria-label="Main Navigation">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="brand-logo" 
          onClick={(e) => handleNavClick(e, "#home")}
          data-cursor="TAMIL"
        >
          <span className="logo-text">TAMILARASI</span>
          <span className="logo-dot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-menu-desktop">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={"nav-link " + (activeSection === link.href.replace("#", "") ? "is-active" : "")}
              data-cursor="GO"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Group */}
        <div className="nav-actions-group">
          {/* Command Palette Button */}
          <button
            type="button"
            className="nav-cmd-pill"
            onClick={onOpenCommandPalette}
            title="Command Palette (Ctrl+K)"
          >
            <span className="nav-cmd-dot" />
            <Terminal size={13} className="text-orange-400" />
            <span className="hidden sm:inline text-xs font-mono text-zinc-300">Command</span>
            <kbd className="hidden md:inline px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-400 border border-zinc-700">⌘K</kbd>
          </button>

          {/* AI Assistant Quick Pill */}
          <button
            type="button"
            className="nav-ai-pill"
            onClick={onOpenAIChat}
            data-cursor="AI CHAT"
            title="Ask Tamilarasi AI"
          >
            <Sparkles size={14} className="nav-sparkle-icon text-orange-400" />
            <span className="ai-pill-label">Ask AI</span>
          </button>

          {/* Highlighted CTA: LET'S TALK ↗ */}
          <a
            href="#contact"
            className="nav-cta-btn"
            onClick={(e) => handleNavClick(e, "#contact")}
            data-cursor="CONNECT"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight size={15} className="cta-arrow" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Over Drawer */}
      <div 
        className={"mobile-drawer-overlay " + (mobileMenuOpen ? "is-open" : "")}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div 
          className="mobile-drawer-panel"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="drawer-header">
            <div className="brand-logo">
              <span className="logo-text">TAMILARASI</span>
              <span className="logo-dot">.</span>
            </div>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="drawer-links-list">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={"drawer-nav-item " + (activeSection === link.href.replace("#", "") ? "is-active" : "")}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={16} className="drawer-item-arrow" />
              </a>
            ))}
          </div>

          <div className="drawer-footer-actions">
            <button
              type="button"
              className="drawer-cmd-btn"
              onClick={() => { setMobileMenuOpen(false); onOpenCommandPalette(); }}
            >
              <Terminal size={16} className="text-orange-400" />
              <span>Command Palette (⌘K)</span>
            </button>

            <button
              type="button"
              className="drawer-ai-btn"
              onClick={() => { setMobileMenuOpen(false); onOpenAIChat(); }}
            >
              <Sparkles size={16} className="text-orange-400" />
              <span>Ask Tamilarasi AI</span>
            </button>

            <a
              href="#contact"
              className="drawer-cta-primary"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              <span>LET'S TALK</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
