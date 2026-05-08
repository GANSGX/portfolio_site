import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import type { Locale } from './content';
import { content } from './content';
import { Header } from './components/Header';

gsap.registerPlugin(ScrollToPlugin);
import { ParticleField } from './components/ParticleField';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { useReveal } from './hooks/useReveal';

function App() {
  const [locale, setLocale] = useState<Locale>('ru');

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `${content.owner.name[locale].join(' ')} — ${content.owner.title[locale]}`;
  }, [locale]);

  useReveal();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      gsap.to(window, {
        duration: 1,
        ease: 'power2.inOut',
        scrollTo: { y: el as Element, offsetY: 60 },
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <ParticleField />
      <Header locale={locale} setLocale={setLocale} />
      <main>
        <Hero locale={locale} />
        <About locale={locale} />
        <Experience locale={locale} />
        <Skills locale={locale} />
        <Education locale={locale} />
        <Contact locale={locale} />
        <Footer locale={locale} />
      </main>
    </>
  );
}

export default App;
