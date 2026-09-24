import { useEffect, useRef } from "react";

/**
 * TouchLight Component (Star Glitter Completely Removed)
 * 
 * Features:
 * 1. Clean, smooth, circular focal light aura directly under active touches / drags.
 * 2. Expanding luminous shockwave ripples on touch / tap.
 * 3. Additive Blending (globalCompositeOperation = 'lighter') for pure glowing light.
 * 4. Zero star glitter, zero sparkle glyphs, zero horizontal bars.
 */
export default function TouchGlitter() {
  const canvasRef = useRef(null);
  const shockwavesRef = useRef([]);
  const activeTouchesRef = useRef(new Map()); // id -> { x, y, intensity, radius, isReleasing, releaseAlpha }
  const animIdRef = useRef(null);

  // Spawn clean luminous shockwave ripple on tap
  const spawnShockwave = (x, y) => {
    shockwavesRef.current.push({
      x,
      y,
      radius: 8,
      maxRadius: 75,
      alpha: 0.95,
      color: "#ffd700",
      lineWidth: 3,
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Master animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Additive Blending for radiant optical luminescence
      ctx.globalCompositeOperation = "lighter";

      const time = performance.now();

      // ----------------------------------------------------------------------
      // 1. RENDER EXPANDING LUMINOUS SHOCKWAVE RIPPLES
      // ----------------------------------------------------------------------
      const shockwaves = shockwavesRef.current;
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += 2.6;
        sw.alpha *= 0.93;

        if (sw.alpha <= 0.02 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(s, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = sw.color;
        ctx.lineWidth = Math.max(0.75, sw.lineWidth * (1 - sw.radius / sw.maxRadius));
        ctx.globalAlpha = sw.alpha;
        ctx.shadowColor = "#ff7a18";
        ctx.shadowBlur = 18;
        ctx.stroke();

        // Inner soft white wave
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, Math.max(1, sw.radius - 3), 0, Math.PI * 2);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = sw.alpha * 0.75;
        ctx.shadowBlur = 8;
        ctx.stroke();

        ctx.restore();
      }

      // ----------------------------------------------------------------------
      // 2. RENDER ACTIVE TOUCH FOCAL LIGHT ORB (CLEAN, SMOOTH, NO STARS)
      // ----------------------------------------------------------------------
      activeTouchesRef.current.forEach((touch, id) => {
        if (touch.isReleasing) {
          touch.releaseAlpha -= 0.08;
          touch.radius *= 0.92;
          if (touch.releaseAlpha <= 0.01) {
            activeTouchesRef.current.delete(id);
            return;
          }
        }

        const alpha = touch.isReleasing ? touch.releaseAlpha : touch.intensity;
        const pulse = 1 + 0.08 * Math.sin(time * 0.015);
        const orbRadius = (touch.radius || 55) * pulse;

        ctx.save();
        ctx.translate(touch.x, touch.y);

        // A. Wide Ambient Warm Corona
        const ambientGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, orbRadius * 1.8);
        ambientGrad.addColorStop(0, `rgba(255, 255, 255, ${0.85 * alpha})`);
        ambientGrad.addColorStop(0.25, `rgba(255, 215, 0, ${0.7 * alpha})`); // Radiant Sun Gold
        ambientGrad.addColorStop(0.55, `rgba(249, 115, 22, ${0.4 * alpha})`); // Neon Amber
        ambientGrad.addColorStop(0.85, `rgba(255, 90, 0, ${0.1 * alpha})`);
        ambientGrad.addColorStop(1, "rgba(255, 80, 0, 0)");

        ctx.fillStyle = ambientGrad;
        ctx.beginPath();
        ctx.arc(0, 0, orbRadius * 1.8, 0, Math.PI * 2);
        ctx.fill();

        // B. White-Hot Nuclear Core (Intense Focal Brightness)
        const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, orbRadius * 0.45);
        coreGrad.addColorStop(0, `rgba(255, 255, 255, ${1.0 * alpha})`);
        coreGrad.addColorStop(0.4, `rgba(255, 255, 240, ${0.92 * alpha})`);
        coreGrad.addColorStop(0.8, `rgba(255, 220, 120, ${0.6 * alpha})`);
        coreGrad.addColorStop(1, "rgba(255, 200, 80, 0)");

        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(0, 0, orbRadius * 0.45, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animIdRef.current = requestAnimationFrame(render);
    };

    animIdRef.current = requestAnimationFrame(render);

    // ------------------------------------------------------------------------
    // TOUCH EVENT LISTENERS
    // ------------------------------------------------------------------------
    const onTouchStart = (e) => {
      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        activeTouchesRef.current.set(touch.identifier, {
          x: touch.clientX,
          y: touch.clientY,
          intensity: 1.0,
          radius: 54,
          isReleasing: false,
          releaseAlpha: 1.0,
        });

        spawnShockwave(touch.clientX, touch.clientY);
      }
    };

    const onTouchMove = (e) => {
      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        const record = activeTouchesRef.current.get(touch.identifier);

        if (record) {
          record.x = touch.clientX;
          record.y = touch.clientY;
          record.intensity = 1.0;
        } else {
          activeTouchesRef.current.set(touch.identifier, {
            x: touch.clientX,
            y: touch.clientY,
            intensity: 1.0,
            radius: 54,
            isReleasing: false,
            releaseAlpha: 1.0,
          });
        }
      }
    };

    const onTouchEnd = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        const record = activeTouchesRef.current.get(touch.identifier);
        if (record) {
          record.isReleasing = true;
          record.releaseAlpha = 1.0;
        }
      }
    };

    const onTouchCancel = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        activeTouchesRef.current.delete(touch.identifier);
      }
    };

    // ------------------------------------------------------------------------
    // DESKTOP MOUSE HANDLERS
    // ------------------------------------------------------------------------
    let isMouseDown = false;
    const mouseTouchId = "desktop_mouse";

    const onMouseDown = (e) => {
      isMouseDown = true;
      activeTouchesRef.current.set(mouseTouchId, {
        x: e.clientX,
        y: e.clientY,
        intensity: 1.0,
        radius: 56,
        isReleasing: false,
        releaseAlpha: 1.0,
      });

      spawnShockwave(e.clientX, e.clientY);
    };

    const onMouseMove = (e) => {
      if (!isMouseDown) return;
      const record = activeTouchesRef.current.get(mouseTouchId);
      if (record) {
        record.x = e.clientX;
        record.y = e.clientY;
      }
    };

    const onMouseUp = () => {
      if (!isMouseDown) return;
      isMouseDown = false;
      const record = activeTouchesRef.current.get(mouseTouchId);
      if (record) {
        record.isReleasing = true;
        record.releaseAlpha = 1.0;
      }
    };

    // Passive touch listeners for high performance
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchCancel, { passive: true });

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchCancel);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="touch-glitter-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 99999,
      }}
      aria-hidden="true"
    />
  );
}
