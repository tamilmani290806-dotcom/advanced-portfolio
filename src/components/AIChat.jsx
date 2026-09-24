import { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, Trash2, Bot, User, ArrowUpRight, CheckCircle2, CornerDownLeft } from "lucide-react";
import { aiKnowledgeBase, aiSuggestedPrompts, personalInfo } from "../data/portfolioData";

export default function AIChat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: "intro",
      sender: "ai",
      text: "Hi! I'm Tamilarasi AI — an interactive command assistant trained strictly on Tamilarasi's verified portfolio data. Ask me anything about her projects, hackathons, technical skills, internships, or contact channels.",
      time: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const generateAnswer = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    // 1. Projects
    if (q.includes("project") || q.includes("work") || q.includes("built") || q.includes("smartframe") || q.includes("placement") || q.includes("pcos") || q.includes("expense")) {
      if (q.includes("smartframe") || q.includes("vision") || q.includes("glasses") || q.includes("eyewear") || q.includes("ipd")) {
        return "👓 **SmartFrame AI:** An innovative computer vision application utilizing MediaPipe Face Mesh (468 landmarks) and OpenCV to compute sub-millimeter Interpupillary Distance (IPD) from webcam feeds. It classifies facial geometry (oval, square, heart, etc.) to recommend proportional eyewear frames. Tamilarasi was selected to pitch this project live at the Tamil Nadu Startup and Innovation Mission (TANSIM).";
      }
      if (q.includes("placement") || q.includes("agent") || q.includes("interview") || q.includes("resume") || q.includes("ats")) {
        return "🤖 **Placement Preparation AI Agent:** An autonomous multi-agent platform powered by LangGraph, RAG, and the Gemini API. It parses candidate resumes, diagnoses skill gaps against target job requirements, evaluates ATS compatibility (94% accuracy), and conducts role-specific mock interviews with personalized study roadmaps.";
      }
      if (q.includes("pcos") || q.includes("health") || q.includes("medical") || q.includes("xgboost")) {
        return "🩺 **PCOS Prediction Using Machine Learning:** A clinical ML diagnostic system trained on patient clinical, hormonal, and ultrasound parameters. Tamilarasi compared Random Forest and XGBoost models, prioritizing high sensitivity (recall) to minimize false negatives in early hormonal disorder detection.";
      }
      if (q.includes("expense") || q.includes("automation") || q.includes("n8n")) {
        return "⚡ **AI-Based Expense Approval Automation System:** An automated workflow built with n8n and webhooks. It ingests reimbursement claims, checks spending limits against company policy, auto-approves compliant low-risk claims, and routes exceptions to managers, reducing manual review time by 85%.";
      }
      return "Here are Tamilarasi's 5 featured software projects:\n\n1. **Placement Preparation AI Agent** — LangGraph, RAG, Gemini API, FastAPI, React\n2. **SmartFrame AI** — Computer Vision, 468-point Face Mesh, IPD Calculation (TN Startup Mission Pitch)\n3. **PCOS Prediction Using ML** — Ensemble Healthcare ML (Random Forest, XGBoost)\n4. **AI-Based Expense Approval Automation System** — n8n Workflow Automation, Webhooks\n5. **Interactive AI Portfolio Platform** — React 19, Space Grotesk, Custom Cursor & Embedded AI\n\nYou can explore full 7-step case studies for each directly in the Projects section!";
    }

    // 2. Hackathons & Awards
    if (q.includes("hackathon") || q.includes("award") || q.includes("prize") || q.includes("win") || q.includes("fiestaa") || q.includes("kpr") || q.includes("achievement") || q.includes("startup mission")) {
      return "🏆 **Tamilarasi's Key Achievements & Hackathon Wins:**\n\n• **2nd Prize Winner 🥈** at FIESTAA'26 National Hackathon (KPR Institute of Engineering and Technology) for developing an innovative Smart Automation prototype under tight sprint constraints.\n• **Official Startup Selection & Pitch 🚀** for SmartFrame AI at the Tamil Nadu Startup and Innovation Mission (TANSIM).\n• **Competitive ML Hackathon 📊** participant in Kaggle AISEHack 2.0 (Polymer Property Prediction).\n• **Technical Papers Presented 📄:** Authored papers on 'Healthcare AI: Who is our next doctor?' and 'Quantum Computing Paradigms'.";
    }

    // 3. Skills & Tech Stack
    if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("language") || q.includes("python") || q.includes("react") || q.includes("frontend") || q.includes("backend") || q.includes("tools")) {
      return "Tamilarasi's technical ecosystem spans:\n\n• **Frontend:** React, JavaScript (ES6+), HTML, modern CSS (Flexbox/Grid, Glassmorphism, 3D transforms)\n• **Programming:** Python (primary), Java, C\n• **AI / ML:** Machine Learning, Scikit-learn, TensorFlow, Generative AI, LangGraph, RAG pipelines, OpenCV, MediaPipe\n• **Backend:** Node.js, Express, FastAPI, REST APIs\n• **Databases:** MongoDB, MySQL, SQLite\n• **Tools & Workflows:** Git, GitHub, VS Code, Figma, n8n automation";
    }

    // 4. Education & College
    if (q.includes("education") || q.includes("college") || q.includes("degree") || q.includes("cgpa") || q.includes("school") || q.includes("study")) {
      return "🎓 **Education Profile:**\n\n• **B.E. in Computer Science & Engineering** (2022 — 2026 Current) at **Kongunadu College of Engineering and Technology** with a strong **8.0 CGPA**.\n• **Higher Secondary (HSC):** 77.3% at Girls Government Higher Secondary School.\n• **Secondary (SSLC):** 79.2% at Government Higher Secondary School.\n\nHer academic work focuses on Data Structures, Algorithms, Machine Learning, and Web Architecture.";
    }

    // 5. Internships
    if (q.includes("intern") || q.includes("experience") || q.includes("training")) {
      return "💼 **Internship Experience:**\n\n1. **Generative AI & Agentic AI Internship:** Architected multi-agent interaction flows using LangGraph and LangChain, constructed vector embedding retrieval pipelines with ChromaDB, and implemented structured prompt schemas.\n2. **Full Stack Web Development Internship:** Engineered responsive React components, asynchronous Python FastAPI endpoints, and relational database schemas.";
    }

    // 6. Contact & Hiring
    if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("phone") || q.includes("linkedin") || q.includes("github") || q.includes("reach") || q.includes("resume")) {
      return "📬 **Direct Contact & Dossier Links:**\n\n• **Email:** tamilmani290806@gmail.com\n• **Phone:** +91 93607 51067\n• **Location:** Theni, Tamil Nadu, India\n• **LinkedIn:** linkedin.com/in/tamilarasi-manidurai-033134357\n• **GitHub:** github.com/tamilmani290806-dotcom\n• **Resume:** You can view or download her verified resume directly at /resume.pdf!";
    }

    // 7. General / About
    return "Tamilarasi M. is a Computer Science Engineering student passionate about AI, modern full-stack web development, and UI/UX design. She specializes in creating intelligent digital experiences where high algorithmic rigor meets thoughtful, accessible interface design. Is there a specific project, hackathon win, or technical skill you would like to know more about?";
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim() || isTyping) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      time: "Now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulated quick command inference latency
    setTimeout(() => {
      const answer = generateAnswer(query);
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: answer,
        time: "Now",
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "cleared-intro",
        sender: "ai",
        text: "Command buffer cleared. How can I assist you in exploring Tamilarasi's work?",
        time: "Just now",
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="ai-chat-modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="ai-chat-command-window" role="dialog" aria-label="Tamilarasi AI Command Interface">
        {/* Top Command Bar */}
        <div className="command-window-topbar">
          <div className="command-window-left">
            <div className="ai-status-pulse-dot" />
            <span className="command-system-title">TAMILARASI_AI // AGENT_INTERFACE</span>
            <span className="command-ver-tag">v2.6</span>
          </div>

          <div className="command-window-controls">
            <button
              type="button"
              className="ctrl-btn-clear"
              onClick={clearChat}
              title="Clear conversation"
              data-cursor="CLEAR"
            >
              <Trash2 size={15} />
            </button>
            <button
              type="button"
              className="ctrl-btn-close"
              onClick={onClose}
              title="Close assistant"
              data-cursor="CLOSE"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Suggestion Quick Chips */}
        <div className="command-prompts-scroller">
          <span className="prompts-label">QUICK QUERIES:</span>
          {aiSuggestedPrompts.map((prompt, i) => (
            <button
              key={i}
              type="button"
              className="prompt-chip-btn"
              onClick={() => handleSend(prompt)}
              data-cursor="PROMPT"
            >
              <span>{prompt}</span>
            </button>
          ))}
        </div>

        {/* Messages Stream */}
        <div className="command-messages-stream">
          {messages.map((m) => {
            const isAI = m.sender === "ai";
            return (
              <div key={m.id} className={"cmd-message-row " + (isAI ? "is-ai" : "is-user")}>
                <div className="cmd-avatar-icon">
                  {isAI ? <Sparkles size={14} className="ai-icon" /> : <User size={14} className="user-icon" />}
                </div>

                <div className="cmd-bubble-wrapper">
                  <div className="cmd-sender-tag">
                    <span>{isAI ? "TAMILARASI AI" : "VISITOR"}</span>
                  </div>
                  <div className="cmd-bubble-text">
                    {m.text.split("\n").map((line, idx) => (
                      <p key={idx} className="cmd-line">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="cmd-message-row is-ai">
              <div className="cmd-avatar-icon">
                <Sparkles size={14} className="ai-icon" />
              </div>
              <div className="cmd-typing-indicator">
                <span className="type-dot" />
                <span className="type-dot" />
                <span className="type-dot" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Command Input Bar */}
        <div className="command-input-container">
          <span className="input-prompt-char">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            className="command-text-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Tamilarasi's projects, skills, education, hackathons..."
            data-cursor="TYPE"
          />
          <button
            type="button"
            className="command-send-button"
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isTyping}
            data-cursor="SEND"
            title="Send query"
          >
            <CornerDownLeft size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
