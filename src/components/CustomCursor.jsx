import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const pos = useRef({ x: -100, y: -100 });
  const targetPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Check for touch / mobile device
    const checkTouch = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
      setIsMobile(isTouch);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);

    const onMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive element with data-cursor
      const target = e.target.closest("[data-cursor], a, button, input, textarea, [role='button'], .project-card-interactive, .skill-pill, .achievement-card");
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute("data-cursor") || "";
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth animation loop for ring lagging physics
    const loop = () => {
      pos.current.x += (targetPos.current.x - pos.current.x) * 0.18;
      pos.current.y += (targetPos.current.y - pos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetPos.current.x}px, ${targetPos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (isMobile) return null;

  return (
    <div className={`custom-cursor-root ${isVisible ? "visible" : "hidden"} ${isHovered ? "hovered" : ""} ${isClicking ? "clicking" : ""} ${cursorText ? "has-text" : ""}`}>
      {/* Inner precise dot */}
      <div ref={dotRef} className="cursor-dot" />

      {/* Lagging outer halo / expander */}
      <div ref={ringRef} className="cursor-ring">
        {cursorText && <span className="cursor-badge-text">{cursorText}</span>}
      </div>
    </div>
  );
}
