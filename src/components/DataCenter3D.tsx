import React, { useEffect, useRef } from 'react';

const DataCenter3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W: number, H: number;
    let particles: any[] = [];
    const count = 75;
    const maxDist = 180;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener('resize', setSize);
    setSize();

    // Init particles
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: 1.5 + Math.random() * 2,
        color: Math.random() > 0.7 ? '#10B981' : '#FFD700' // Emerald vs Gold
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, W, H);

      for (let i = 0; i < count; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > W) p1.vx *= -1;
        if (p1.y < 0 || p1.y > H) p1.vy *= -1;

        // Connections
        for (let j = i + 1; j < count; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x, dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 215, 0, ${0.12 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p1.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener('resize', setSize);
  }, []);

  return (
    <div id="hero-canvas" className="absolute inset-0 w-full h-full bg-black">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Exact overlay ID from reference */}
      <div className="hero-right-num">ID_DX_CORE_PRT_001</div>
    </div>
  );
};

export default DataCenter3D;
