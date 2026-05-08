import { useEffect, useRef } from 'react';

export function Orbits() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let W = 0;
    let H = 0;
    let raf = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    let t = 0;
    const frame = () => {
      t += 0.005;
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2;
      const cy = H / 2;
      const base = Math.min(W, H) * 0.46;

      const orbits = [
        { r: base, dir: 1, speed: 0.4 },
        { r: base * 0.75, dir: -1, speed: 0.6 },
        { r: base * 0.5, dir: 1, speed: 0.85 },
      ];

      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255,255,255,0.07)';
      orbits.forEach((o) => {
        ctx.beginPath();
        ctx.arc(cx, cy, o.r, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      for (let i = 0; i < 60; i++) {
        const a = (i / 60) * Math.PI * 2;
        const x1 = cx + Math.cos(a) * orbits[0].r;
        const y1 = cy + Math.sin(a) * orbits[0].r;
        const ext = i % 5 === 0 ? 8 : 3;
        const x2 = cx + Math.cos(a) * (orbits[0].r + ext);
        const y2 = cy + Math.sin(a) * (orbits[0].r + ext);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.beginPath();
      ctx.moveTo(cx - base, cy);
      ctx.lineTo(cx + base, cy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy - base);
      ctx.lineTo(cx, cy + base);
      ctx.stroke();

      orbits.forEach((o, i) => {
        const a = t * o.speed * o.dir + i * 1.7;
        const x = cx + Math.cos(a) * o.r;
        const y = cy + Math.sin(a) * o.r;
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 28);
        grd.addColorStop(0, 'rgba(120,170,255,0.55)');
        grd.addColorStop(0.4, 'rgba(60,100,220,0.18)');
        grd.addColorStop(1, 'rgba(60,100,220,0)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x, y, 28, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = i === 0 ? '#fff' : 'rgba(255,255,255,0.7)';
        ctx.beginPath();
        ctx.arc(x, y, i === 0 ? 4 : 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.beginPath();
      ctx.arc(cx, cy, 2, 0, Math.PI * 2);
      ctx.fill();

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    let tx = 0;
    let ty = 0;
    let ttx = 0;
    let tty = 0;
    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      ttx = (e.clientX - cx) / window.innerWidth;
      tty = (e.clientY - cy) / window.innerHeight;
    };
    let tiltRaf = 0;
    const tilt = () => {
      tx += (ttx - tx) * 0.06;
      ty += (tty - ty) * 0.06;
      canvas.style.transform = `rotateY(${tx * 12}deg) rotateX(${-ty * 12}deg)`;
      tiltRaf = requestAnimationFrame(tilt);
    };
    tiltRaf = requestAnimationFrame(tilt);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(tiltRaf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div ref={wrapRef} className="hero-orb">
      <canvas ref={canvasRef} id="orbital" />
    </div>
  );
}
