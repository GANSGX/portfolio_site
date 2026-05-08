import { useEffect } from 'react';

export function useReveal(selector = '.reveal, .stat, .soft-list, .tag-cloud, [data-letter-split]') {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add('is-in');

          if (el.classList.contains('stat')) {
            const numEl = el.querySelector<HTMLElement>('.num');
            if (numEl) {
              const target = parseInt(numEl.dataset.to ?? '0', 10);
              const start = performance.now();
              const dur = 1100;
              const step = (now: number) => {
                const p = Math.min(1, (now - start) / dur);
                const eased = 1 - Math.pow(1 - p, 3);
                numEl.textContent = String(Math.round(target * eased));
                if (p < 1) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
            }
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.2 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
