import { useState, useEffect, useRef } from "react";
import { Search, Home, User, Code2, Briefcase, Award, FileText, Bot, Mail, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function CommandPalette({ isOpen, onClose, onOpenAIChat }) {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    { id: "home", label: "Home", desc: "Return to hero section", icon: Home, action: () => scrollTo("home") },
    { id: "about", label: "About", desc: "Background & 5 engineering pillars", icon: User, action: () => scrollTo("about") },
    { id: "skills", label: "Skills Ecosystem", desc: "6 technical domains & inspector", icon: Code2, action: () => scrollTo("skills") },
    { id: "projects", label: "Featured Projects", desc: "YOLOv8, Clinical ROC & Web Apps", icon: Briefcase, action: () => scrollTo("projects") },
    { id: "experience", label: "Experience & Timeline", desc: "Education, hackathons & milestones", icon: Briefcase, action: () => scrollTo("experience") },
    { id: "achievements", label: "Achievements & Awards", desc: "FIESTAA'26 2nd Prize, TN Startup Mission", icon: Award, action: () => scrollTo("achievements") },
    { id: "contact", label: "Contact & Hire", desc: "Get in touch for roles & collaborations", icon: Mail, action: () => scrollTo("contact") },
    { id: "resume", label: "View Resume (PDF)", desc: "Open verified 144 KB PDF resume", icon: FileText, action: () => window.open("/resume.pdf", "_blank") },
    { id: "ai", label: "Ask Tamilarasi AI", desc: "Chat with interactive portfolio assistant", icon: Bot, action: () => { onClose(); onOpenAIChat(); } },
    { id: "github", label: "GitHub Profile", desc: "github.com/Sivanika29", icon: GithubIcon, action: () => window.open("https://github.com/Sivanika29", "_blank") },
    { id: "linkedin", label: "LinkedIn Profile", desc: "linkedin.com/in/tamilarasi-m-02b662325", icon: LinkedinIcon, action: () => window.open("https://www.linkedin.com/in/tamilarasi-m-02b662325", "_blank") },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(search.toLowerCase()) ||
    a.desc.toLowerCase().includes(search.toLowerCase())
  );

  const scrollTo = (id) => {
    onClose();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].action();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="cmd-modal-backdrop" onClick={onClose}>
      <div className="cmd-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Search header */}
        <div className="cmd-modal-header">
          <Search size={18} color="#f97316" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search sections..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setSelectedIndex(0); }}
            className="cmd-modal-input"
          />
          <kbd className="cmd-modal-kbd">ESC</kbd>
          <button onClick={onClose} className="cmd-modal-close" aria-label="Close">
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div className="cmd-modal-list">
          {filtered.length === 0 ? (
            <div style={{ padding: "24px", textAlign: "center", fontSize: "0.8rem", color: "#71717a", fontFamily: "JetBrains Mono" }}>
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={"cmd-modal-item " + (isSelected ? "is-selected" : "")}
                >
                  <div className="cmd-item-left">
                    <div className="cmd-item-icon-box">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="cmd-item-title">{item.label}</div>
                      <div className="cmd-item-desc">{item.desc}</div>
                    </div>
                  </div>
                  <span className="cmd-item-action-badge">
                    {isSelected ? "↵ Select" : "Jump"}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Keyboard hints footer */}
        <div className="cmd-modal-footer">
          <div className="cmd-footer-hints">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span style={{ color: "rgba(249, 115, 22, 0.85)" }}>Tamilarasi M. Portfolio</span>
        </div>
      </div>
    </div>
  );
}
