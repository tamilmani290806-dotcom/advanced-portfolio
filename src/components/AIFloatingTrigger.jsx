import { Sparkles, ArrowUpRight } from "lucide-react";

export default function AIFloatingTrigger({ onClick }) {
  return (
    <button
      type="button"
      className="ai-floating-trigger-btn"
      onClick={onClick}
      data-cursor="AI ASSIST"
      aria-label="Ask Tamilarasi AI"
    >
      <div className="floating-btn-pulse" />
      <Sparkles size={16} className="floating-sparkle-icon" />
      <span className="floating-trigger-text">Ask me about Tamilarasi</span>
      <ArrowUpRight size={14} className="floating-arrow-icon" />
    </button>
  );
}
