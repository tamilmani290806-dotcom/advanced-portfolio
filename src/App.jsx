import { useState, useEffect } from "react";
import "./App.css";

// Precision Components
import ConstellationClusters from "./components/ConstellationClusters";
import CustomCursor from "./components/CustomCursor";
import TouchGlitter from "./components/TouchGlitter";
import Navbar from "./components/Navbar";
import CommandPalette from "./components/CommandPalette";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import ResumeCTA from "./components/ResumeCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIChat from "./components/AIChat";
import AIFloatingTrigger from "./components/AIFloatingTrigger";

function App() {
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  // Global keyboard shortcut: Ctrl+K or Cmd+K to launch Command Palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Global Swipe & Touch Reactive Box Blink System:
  // Whenever the user touches any box, or swipes / scrolls past them,
  // the boxes flash and blink with an incandescent golden-amber pulse!
  useEffect(() => {
    let swipeTimer = null;

    const handleSwipeOrScroll = () => {
      document.body.classList.add("is-swiping");
      if (swipeTimer) clearTimeout(swipeTimer);
      swipeTimer = setTimeout(() => {
        document.body.classList.remove("is-swiping");
      }, 950);
    };

    const boxSelector = [
      '.identity-pillar-card',
      '.highlight-stat-cell',
      '.visual-journey-box',
      '.journey-step-item',
      '.skill-ecosystem-pill',
      '.sticky-inspector-card',
      '.immersive-project-showcase',
      '.ps-box',
      '.project-mockup-window',
      '.timeline-card-content',
      '.achievement-entry-card',
      '.resume-cta-card',
      '.resume-doc-sheet',
      '.contact-primary-card',
      '.contact-minimal-form',
      '.editorial-portrait-frame'
    ].join(', ');

    const handleTouchOrClick = (e) => {
      const box = e.target.closest(boxSelector);
      if (box) {
        box.classList.remove("touch-blink");
        void box.offsetWidth; // Force reflow to restart CSS keyframe cleanly
        box.classList.add("touch-blink");
        setTimeout(() => {
          box.classList.remove("touch-blink");
        }, 850);
      }
    };

    window.addEventListener("scroll", handleSwipeOrScroll, { passive: true });
    window.addEventListener("touchmove", handleSwipeOrScroll, { passive: true });
    window.addEventListener("wheel", handleSwipeOrScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchOrClick, { passive: true });
    window.addEventListener("mousedown", handleTouchOrClick, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleSwipeOrScroll);
      window.removeEventListener("touchmove", handleSwipeOrScroll);
      window.removeEventListener("wheel", handleSwipeOrScroll);
      window.removeEventListener("touchstart", handleTouchOrClick);
      window.removeEventListener("mousedown", handleTouchOrClick);
      if (swipeTimer) clearTimeout(swipeTimer);
    };
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* Global Interactive Constellation Clusters Canvas spanning all pages */}
      <ConstellationClusters />

      {/* Dynamic Touch Light & Shockwave System */}
      <TouchGlitter />

      {/* Custom Refined Desktop Physics Cursor */}
      <CustomCursor />

      {/* Glassmorphic Minimal Navigation */}
      <Navbar
        onOpenAIChat={() => setAiChatOpen(true)}
        onOpenCommandPalette={() => setCmdOpen(true)}
      />

      {/* Interactive Command Palette Modal */}
      <CommandPalette
        isOpen={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onOpenAIChat={() => setAiChatOpen(true)}
      />

      {/* Main Experience Flow */}
      <main id="main-content">
        {/* 01: Hero Section with Constellation Canvas, Signature & Location Radar */}
        <Hero onOpenAIChat={() => setAiChatOpen(true)} />

        {/* 02: About Section & Visual Journey Stepper */}
        <About />

        {/* 03: Interactive Skill Ecosystem Matrix & Inspector */}
        <Skills />

        {/* 04: Featured Projects Centerpiece & 7-Step Case Study Modals */}
        <Projects />

        {/* 05: Experience & Journey Timeline (Education, Internships, Hackathons) */}
        <Experience />

        {/* 06: Interactive Achievement Wall with Credential Defense Modals */}
        <Achievements />

        {/* 07: Resume CTA with Animated Document Mockup */}
        <ResumeCTA />

        {/* 08: The Final Scene — Meaningful Contact Section */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating Tamilarasi AI Trigger */}
      <AIFloatingTrigger onClick={() => setAiChatOpen(true)} />

      {/* Embedded Grounded Tamilarasi AI Command Assistant */}
      <AIChat isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} />
    </div>
  );
}

export default App;
