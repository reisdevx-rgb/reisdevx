import { useEffect, useRef } from "react";

export function InteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dots: { x: number; y: number; ox: number; oy: number; vx: number; vy: number; phase: number }[] = [];
    let raf = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const spacing = 38;
    const radius = 1.4;
    const influence = 110;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      dots = [];
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);
      const offsetX = (width - (cols - 1) * spacing) / 2;
      const offsetY = (height - (rows - 1) * spacing) / 2;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offsetX + i * spacing;
          const y = offsetY + j * spacing;
          dots.push({ x, y, ox: x, oy: y, vx: 0, vy: 0, phase: Math.random() * Math.PI * 2 });
        }
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const tick = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const d of dots) {
        // Floating movement (more pronounced)
        const floatX = Math.sin(time * 0.0018 + d.phase) * 10 + Math.cos(time * 0.0009 + d.phase * 1.7) * 5;
        const floatY = Math.cos(time * 0.0015 + d.phase) * 10 + Math.sin(time * 0.0011 + d.phase * 1.3) * 5;
        const targetX = d.ox + floatX;
        const targetY = d.oy + floatY;

        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < influence) {
          const force = (1 - dist / influence) * 5;
          const angle = Math.atan2(dy, dx);
          d.vx += Math.cos(angle) * force * 0.6;
          d.vy += Math.sin(angle) * force * 0.6;
        }
        // spring back to floating target
        d.vx += (targetX - d.x) * 0.03;
        d.vy += (targetY - d.y) * 0.03;
        d.vx *= 0.88;
        d.vy *= 0.88;
        d.x += d.vx;
        d.y += d.vy;


        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120, 160, 220, 0.35)";
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
