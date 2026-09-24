import { useEffect, useRef } from "react";

/**
 * ConstellationClusters Component
 * 
 * Renders an expansive, full-page interactive connected node cluster network in the background:
 * - Golden & solar-amber glowing particles grouped in living constellation clusters.
 * - Dynamic line connections between nearby nodes.
 * - Interactive cursor & touch physics that pull and illuminate clusters everywhere across the site.
 * - Fixed background view spanning all sections (Hero, About, Skills, Projects, Experience, Achievements, Contact).
 */
export default function ConstellationClusters() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 45 : 95;
    const connectionDist = isMobile ? 95 : 145;
    const mouseRadius = isMobile ? 120 : 180;

    const pointer = { x: null, y: null };

    // Initialize constellation cluster nodes
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      r: Math.random() * 1.8 + 1.2,
      baseAlpha: Math.random() * 0.35 + 0.3,
      isGold: Math.random() > 0.45,
    }));

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const onTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        pointer.x = e.touches[0].clientX;
        pointer.y = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      pointer.x = null;
      pointer.y = null;
    };

    const onMouseLeave = () => {
      pointer.x = null;
      pointer.y = null;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchstart", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap or bounce smoothly across viewport
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        let extraAlpha = 0;

        // Interactive cursor / touch attraction
        if (pointer.x !== null && pointer.y !== null) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            extraAlpha = (1 - dist / mouseRadius) * 0.55;
            p.x += (dx / dist) * 0.35;
            p.y += (dy / dist) * 0.35;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.strokeStyle = `rgba(255, 215, 0, ${(1 - dist / mouseRadius) * 0.45})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        const finalAlpha = Math.min(1, p.baseAlpha + extraAlpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.isGold
          ? `rgba(255, 215, 0, ${finalAlpha})`
          : `rgba(249, 115, 22, ${finalAlpha})`;
        ctx.shadowColor = p.isGold ? "#ffd700" : "#f97316";
        ctx.shadowBlur = extraAlpha > 0 ? 12 : 5;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect node clusters with dynamic glowing lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < connectionDist) {
            const lineAlpha = (1 - dist2 / connectionDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${lineAlpha})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="global-constellation-clusters" />;
}
