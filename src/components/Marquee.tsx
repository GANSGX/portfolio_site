import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

type Props = {
  className?: string;
  duration?: string;
  children: ReactNode;
  style?: CSSProperties;
};

function parseDurationSec(d: string) {
  const m = d.trim().match(/^([\d.]+)(ms|s)?$/);
  if (!m) return 40;
  const v = parseFloat(m[1]);
  return m[2] === 'ms' ? v / 1000 : v;
}

export function Marquee({ className = '', duration = '40s', children, style }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const dur = parseDurationSec(duration);
    let half = track.scrollWidth / 2;
    if (half <= 0) return;

    let speed = half / dur; // px per second
    let offset = 0;
    let last = performance.now();
    const SLOW = 0.22;
    let hovered = false;
    let raf = 0;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      offset -= speed * (hovered ? SLOW : 1) * dt;
      if (offset <= -half) offset += half;
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onEnter = () => { hovered = true; };
    const onLeave = () => { hovered = false; last = performance.now(); };
    wrap.addEventListener('mouseenter', onEnter);
    wrap.addEventListener('mouseleave', onLeave);

    const ro = new ResizeObserver(() => {
      const newHalf = track.scrollWidth / 2;
      if (newHalf > 0) {
        half = newHalf;
        speed = half / dur;
        if (offset <= -half) offset = offset % half;
      }
    });
    ro.observe(track);

    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener('mouseenter', onEnter);
      wrap.removeEventListener('mouseleave', onLeave);
      ro.disconnect();
    };
  }, [duration]);

  return (
    <div ref={wrapRef} className={`marquee ${className}`} style={style}>
      <div className="marquee-track" ref={trackRef}>
        {children}
        {children}
      </div>
    </div>
  );
}
