import React from "react";

// Authentic Official Vector Logos for all developer technologies
export function TechLogo({ name, size = 22, className = "" }) {
  const normalized = (name || "").toLowerCase().trim();

  switch (normalized) {
    case "python":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M11.91 2c-5.18 0-4.86 2.25-4.86 2.25l.01 2.33h4.94v.7H5.08S2 7.02 2 12.23c0 5.21 2.7 5.03 2.7 5.03h1.61v-2.28s-.09-2.7 2.65-2.7h4.55s2.56.04 2.56-2.5V4.5S16.53 2 11.91 2zM9.47 3.54a.78.78 0 1 1 0 1.56.78.78 0 0 1 0-1.56z"
            fill="#3776AB"
          />
          <path
            d="M12.09 22c5.18 0 4.86-2.25 4.86-2.25l-.01-2.33h-4.94v-.7h6.92s3.08.26 3.08-4.95c0-5.21-2.7-5.03-2.7-5.03h-1.61v2.28s.09 2.7-2.65 2.7H10.5s-2.56-.04-2.56 2.5v5.28S7.47 22 12.09 22zm2.44-1.54a.78.78 0 1 1 0-1.56.78.78 0 0 1 0-1.56z"
            fill="#FFD438"
          />
        </svg>
      );

    case "java":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M8.86 16.63s-.84.28 0 .44c2.08.38 3.52.33 5.92-.19 0 0 .76-.44-.28-.53-2.03-.17-4.14-.15-5.64.28z"
            fill="#5382A1"
          />
          <path
            d="M8.11 18.25s-1.07.47.21.64c2.61.35 4.88.38 8.16-.31 0 0 .9-.58-.33-.69-2.64-.23-5.74-.23-8.04.36z"
            fill="#5382A1"
          />
          <path
            d="M11.66 12.87c1.37.16 2.65.62 2.65.62s.93-.68-.66-.88c-1.89-.24-3.66-.23-5.32.2 0 0-.61.39.29.47 1.15.11 2.05-.51 3.04-.41z"
            fill="#E76F00"
          />
          <path
            d="M13.88 14.54s1.77.72 3.65.17c0 0 .5-.47-.4-.59-1.58-.2-3.1-.38-4.75.14 0 0-.41.34.42.45.36.05.72-.11 1.08-.17z"
            fill="#E76F00"
          />
          <path
            d="M15.42 20.08c-3.11.96-7.39.95-9.61-.1 0 0-.82.52.56.77 3.41.62 7.79.52 10.63-.44 0 0 .78-.45-.33-.67-.39-.08-.83.27-1.25.44z"
            fill="#5382A1"
          />
          <path
            d="M16.59 16.03c2.97-1.55 3.12-3.04 1.25-3.32-.47-.07-.75.05-.75.05s.26-.37.77-.32c1.94.19 2.51 2.22-1.27 3.59z"
            fill="#E76F00"
          />
          <path
            d="M13.25 2.11s3.15 3.13-2.97 6.36c-2.48 1.3-1.07 2.47-.03 3.6-2.14-1.28-3.08-2.68-1.74-4.04 2.14-2.17 6.13-3.65 4.74-5.92z"
            fill="#E76F00"
          />
        </svg>
      );

    case "c":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2L2 7.8v8.4L12 22l10-5.8V7.8L12 2z"
            fill="#00599C"
          />
          <path
            d="M12 4.1L3.8 8.8v6.4L12 19.9l8.2-4.7V8.8L12 4.1z"
            fill="#1976D2"
          />
          <path
            d="M15.8 14.8c-.8.8-1.9 1.2-3.2 1.2-2.5 0-4.3-1.8-4.3-4.5s1.8-4.5 4.3-4.5c1.3 0 2.4.4 3.2 1.2l-1.3 1.5c-.5-.5-1.1-.8-1.9-.8-1.3 0-2.3 1.1-2.3 2.6s1 2.6 2.3 2.6c.8 0 1.4-.3 1.9-.8l1.3 1.5z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "react":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );

    case "javascript":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7.5 18c.5.8 1.3 1.3 2.5 1.3 1.4 0 2.3-.7 2.3-2.1v-6.7h-2.1v6.6c0 .6-.3.9-.8.9-.4 0-.7-.2-.9-.6L7.5 18zm8.2-.1c.6.9 1.6 1.4 2.8 1.4 1.7 0 2.8-.8 2.8-2.2 0-1.4-.8-2-2.3-2.6-.9-.4-1.3-.7-1.3-1.3 0-.6.5-1 1.3-1 .7 0 1.2.3 1.5.9l1.6-1.1c-.6-1-1.6-1.5-2.8-1.5-1.7 0-2.8.9-2.8 2.3 0 1.3.8 2 2.3 2.6.9.4 1.3.7 1.3 1.4 0 .6-.6 1-1.5 1-.9 0-1.5-.4-1.9-1.1l-1.6 1.2z"
            fill="#000000"
          />
        </svg>
      );

    case "html":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M3 2l1.6 18.5L12 23l7.4-2.5L21 2H3z" fill="#E34F26" />
          <path d="M12 3.6v17.2l5.9-2 1.4-15.2H12z" fill="#EF652A" />
          <path
            d="M12 7.7H7.4l.2 2.5h4.4V7.7zm0 4.8H9.8l.2 2.5h2V12.5zm0 5.4l-.1.02-2.7-.7-.2-2.1H7l.3 4.1 4.7 1.3V17.9z"
            fill="#EBEBEB"
          />
          <path
            d="M12 7.7v2.5h4.2l-.4 4.8-3.8 1V18l4.7-1.3.6-6.5h.1V7.7H12z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "css":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M3 2l1.6 18.5L12 23l7.4-2.5L21 2H3z" fill="#1572B6" />
          <path d="M12 3.6v17.2l5.9-2 1.4-15.2H12z" fill="#33A9DC" />
          <path
            d="M12 7.7H7.4l.4 4.8h4.2V7.7zm0 7.3l-2.6-.7-.2-2h-2l.3 3.9 4.5 1.3v-2.5z"
            fill="#EBEBEB"
          />
          <path
            d="M12 7.7v2.4h4.4l-.2 2.4H12v2.4h2.5l-.3 3.3-2.2.6v2.5l4.5-1.3.8-9.9H12z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "node.js":
    case "nodejs":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"
            fill="#339933"
          />
          <path
            d="M12 5.5l6.5 3.75v7.5L12 20.5l-6.5-3.75v-7.5L12 5.5z"
            fill="#215732"
          />
          <path
            d="M9.5 9.5v5c0 .8.6 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.5h1.5v3.5c0 1.6-1.3 3-3 3s-3-1.4-3-3v-5h1.5zm5.5 1h1.5v4.5H15v-4.5z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "express":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#1F2430" stroke="rgba(255,255,255,0.2)" />
          <text
            x="12"
            y="15"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="10"
            fontFamily="'Space Grotesk', sans-serif"
            fontWeight="bold"
            letterSpacing="-0.5"
          >
            ex
          </text>
        </svg>
      );

    case "fastapi":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#059669" />
          <path
            d="M12.8 5L7 13.5h4.2L10.2 19l6.8-9h-4.2L12.8 5z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "rest apis":
    case "rest api":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#0284C7" />
          <path
            d="M7 8h10M7 12h7M7 16h10"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="17" cy="12" r="1.5" fill="#FDE047" />
        </svg>
      );

    case "machine learning":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="6" cy="12" r="2.5" fill="#EC4899" />
          <circle cx="12" cy="6" r="2.5" fill="#8B5CF6" />
          <circle cx="12" cy="18" r="2.5" fill="#3B82F6" />
          <circle cx="18" cy="12" r="2.5" fill="#10B981" />
          <path
            d="M8.2 10.8l2.6-3.6M8.2 13.2l2.6 3.6M13.2 7.2l3.6 3.6M13.2 16.8l3.6-3.6"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="1.5" fill="#FDE047" />
        </svg>
      );

    case "scikit-learn":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="#0D1117" />
          <path
            d="M5 14.5c2.5-3 5.5-3.5 7.5-.5s4.5 1 6.5-1.5"
            stroke="#F7931E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M5 9.5c2.5 3 5.5 3.5 7.5.5s4.5-1 6.5 1.5"
            stroke="#3499CD"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="8" cy="12" r="1.5" fill="#F7931E" />
          <circle cx="16" cy="12" r="1.5" fill="#3499CD" />
        </svg>
      );

    case "tensorflow":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2l8.5 4.9v9.8L12 22 3.5 16.7V6.9L12 2z"
            fill="#FF6F00"
          />
          <path
            d="M12 4.2l6.5 3.8v7.5L12 19.3l-6.5-3.8V8l6.5-3.8z"
            fill="#FF8F00"
          />
          <path
            d="M12 6.5v11M8 9h8"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "generative ai":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2L13.8 8.2C14.3 9.7 15.3 10.7 16.8 11.2L23 13L16.8 14.8C15.3 15.3 14.3 16.3 13.8 17.8L12 24L10.2 17.8C9.7 16.3 8.7 15.3 7.2 14.8L1 13L7.2 11.2C8.7 10.7 9.7 9.7 10.2 8.2L12 2Z"
            fill="url(#genai-grad)"
          />
          <defs>
            <linearGradient id="genai-grad" x1="1" y1="2" x2="23" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#818CF8" />
              <stop offset="1" stopColor="#C084FC" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "mongodb":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2s-6 6.5-6 12.5c0 4.2 3.4 7.5 6 7.5s6-3.3 6-7.5C18 8.5 12 2 12 2z"
            fill="#47A248"
          />
          <path
            d="M12 2v20c-.5 0-1-.3-1.3-.8C9 19 8 16 8 14.5c0-4 4-8.5 4-12.5z"
            fill="#499D4A"
          />
          <path
            d="M12 7v13"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      );

    case "mysql":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#00758F" />
          <path
            d="M6 16c2-4 5-7 10-6-1.5 2-3 4-5 5-2 1-3.5 1-5 1z"
            fill="#F29111"
          />
          <circle cx="16" cy="9" r="1.5" fill="#FFFFFF" />
          <path
            d="M7 17c1.5-.5 3-1.5 4-3"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "sqlite":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M4 6c0-2.2 3.6-4 8-4s8 1.8 8 4v12c0 2.2-3.6 4-8 4s-8-1.8-8-4V6z"
            fill="#003B57"
          />
          <path
            d="M20 6c0 2.2-3.6 4-8 4S4 8.2 4 6"
            stroke="#00ADEF"
            strokeWidth="1.5"
          />
          <path
            d="M20 12c0 2.2-3.6 4-8 4s-8-1.8-8-4"
            stroke="#00ADEF"
            strokeWidth="1.5"
          />
          <path
            d="M12 2c4.4 0 8 1.8 8 4s-3.6 4-8 4-8-1.8-8-4 3.6-4 8-4z"
            fill="#00ADEF"
          />
        </svg>
      );

    case "git":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" transform="rotate(45 12 12)" fill="#F05032" />
          <circle cx="9" cy="12" r="2" fill="#FFFFFF" />
          <circle cx="15" cy="8" r="2" fill="#FFFFFF" />
          <circle cx="15" cy="16" r="2" fill="#FFFFFF" />
          <path
            d="M9 12h3a3 3 0 0 0 3-3V8m-3 7v1"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#24292E" />
          <path
            d="M12 4a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.8 7.8 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6v2.4c0 .2.1.5.6.4A8 8 0 0 0 12 4z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "vs code":
    case "vscode":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#007ACC" />
          <path
            d="M17.5 4.5l-6 5.5L7 7 4.5 8.5 8 12l-3.5 3.5L7 17l4.5-3 6 5.5 2-1V5.5l-2-1zm0 3.8v7.4l-4.5-3.7 4.5-3.7z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "figma":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M7 2h5v5H7a2.5 2.5 0 0 1 0-5z" fill="#F24E1E" />
          <path d="M12 2h5a2.5 2.5 0 0 1 0 5h-5V2z" fill="#FF7262" />
          <path d="M12 7h5a2.5 2.5 0 0 1 0 5h-5V7z" fill="#1ABCFE" />
          <path d="M7 7h5v5H7a2.5 2.5 0 0 1 0-5z" fill="#A259FF" />
          <path d="M7 12h5v5a2.5 2.5 0 0 1-5 0v-5z" fill="#0ACF83" />
        </svg>
      );

    case "n8n":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="6" cy="12" r="3" fill="#EA4B71" />
          <circle cx="18" cy="7" r="3" fill="#EA4B71" />
          <circle cx="18" cy="17" r="3" fill="#EA4B71" />
          <path
            d="M8.5 10.5L15.5 8M8.5 13.5L15.5 16"
            stroke="#EA4B71"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="6" cy="12" r="1.5" fill="#FFFFFF" />
          <circle cx="18" cy="7" r="1.5" fill="#FFFFFF" />
          <circle cx="18" cy="17" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    default:
      return <span style={{ fontSize: size * 0.9 }}>⚡</span>;
  }
}
