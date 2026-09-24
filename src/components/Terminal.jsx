import { useState, useRef, useEffect } from "react";
import { Terminal as TermIcon, X, Maximize2, Minimize2 } from "lucide-react";
import { playTerminalKeySound, playClickSound, playSuccessSound } from "../utils/sound";
import confetti from "canvas-confetti";

export default function Terminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "Tamilarasi OS v2.5.0 (x86_64-tamilarasi-terminal)\nType 'help' to see list of available commands. Try 'hire' or 'skills'!",
    },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    setCmdHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    const parts = raw.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output = "";

    switch (cmd) {
      case "help":
        output = `
AVAILABLE COMMANDS:
  about         - Learn about Tamilarasi M.
  skills        - List technical tools & expertise
  projects      - Display selected engineering projects
  achievements  - View awards & hackathon recognition
  contact       - Get in touch directly
  hire          - Submit recruitment interest
  clear         - Clear the terminal console
  date          - Show current local time
  matrix        - Activate matrix stream
  echo [text]   - Print text
  exit          - Close this terminal window
`;
        break;

      case "about":
        output = `
TAMILARASI M. — Computer Science Engineering Student
Focused on: Artificial Intelligence, Machine Learning, Web Development, UI/UX.
College: Kongunadu College of Engineering and Technology
Passion: Engineering scalable intelligent applications and creative web experiences.
`;
        break;

      case "skills":
        output = `
CORE TECHNICAL SKILLS:
• Programming:    Java, Python, JavaScript, HTML5, CSS3, SQL
• AI / ML:        Scikit-learn, OpenCV, MediaPipe, LangChain, RAG, XGBoost, Pandas
• Web & Backend:  React, Vite, Node.js, Express, FastAPI, REST APIs
• Tools & DB:     Git, GitHub, SQLite, MongoDB, n8n, Streamlit
`;
        break;

      case "projects":
        output = `
FEATURED PROJECTS:
1. AI Placement Preparation Agent (React, FastAPI, LangChain, LangGraph, RAG)
2. SmartFrame AI (OpenCV, MediaPipe, FastAPI, SQLite)
3. PCOS Prediction ML (Python, Scikit-learn, Random Forest, XGBoost)
4. AI-Based Expense Approval Automation System (n8n, Workflow Automation)
`;
        break;

      case "achievements":
        output = `
AWARDS & RECOGNITIONS:
🏆 2nd Prize — FIESTAA'26 Hackathon @ KPR Institute of Engineering
🚀 Presentation — Smart Frame AI @ TN Startup Mission
🧠 Kaggle ML — AISEHack 2.0 Polymer Property Prediction
`;
        break;

      case "contact":
        output = `
DIRECT CONTACT:
Email:    tamilmani290806@gmail.com
LinkedIn: https://www.linkedin.com/in/tamilarasi-manidurai-033134357/
GitHub:   https://github.com/tamilmani290806-dotcom
`;
        break;

      case "hire":
      case "sudo hire":
        output = `
🎉 ACCESS GRANTED!
Thank you for your interest! Tamilarasi is actively available for AI/ML & Web Development opportunities.
Connecting you to mail client...
`;
        playSuccessSound();
        confetti({ particleCount: 80, spread: 60 });
        setTimeout(() => {
          window.location.href = "mailto:tamilmani290806@gmail.com?subject=Opportunity%20Discussion";
        }, 1200);
        break;

      case "clear":
        setHistory([]);
        return;

      case "date":
        output = new Date().toString();
        break;

      case "matrix":
        output = "01000001 01001001 00100000 01010010 01001111 01000011 01001011 01010011 ! [WAKE UP, NEO]";
        break;

      case "echo":
        output = args.join(" ");
        break;

      case "exit":
        onClose();
        return;

      default:
        output = `Command not recognized: '${cmd}'. Type 'help' to see available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: "user", text: raw },
      { type: "response", text: output.trim() },
    ]);
  };

  const handleKeyDown = (e) => {
    playTerminalKeySound();

    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIndex + 1 < cmdHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - nextIdx] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div
        className={`terminal-window ${isMaximized ? "maximized" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-controls">
            <button className="term-btn term-close" onClick={onClose}>
              <X size={12} />
            </button>
            <button
              className="term-btn term-max"
              onClick={() => setIsMaximized(!isMaximized)}
            >
              {isMaximized ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
            </button>
          </div>

          <div className="terminal-title">
            <TermIcon size={14} />
            <span>tamilarasi@developer-box:~ (zsh)</span>
          </div>

          <div className="terminal-badge">LIVE CLI</div>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
          {history.map((item, idx) => (
            <div key={idx} className={`term-line term-${item.type}`}>
              {item.type === "user" && (
                <span className="term-prompt">tamilarasi@dev:~$ </span>
              )}
              <pre>{item.text}</pre>
            </div>
          ))}

          <div className="term-input-line">
            <span className="term-prompt">tamilarasi@dev:~$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
