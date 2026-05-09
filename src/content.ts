export type Locale = 'ru' | 'en';

type LocalizedText = Record<Locale, string>;

type ExperienceItem = {
  company: string | LocalizedText;
  url?: string;
  period: LocalizedText;
  role: LocalizedText;
  description: LocalizedText;
};

type SkillItem = {
  category: string;
  values: string;
};

type StatItem = {
  value: number;
  label: LocalizedText;
  flip: LocalizedText;
  description: LocalizedText;
  source: LocalizedText;
  tags: LocalizedText;
  size?: 'wide' | 'normal';
  accent?: boolean;
};

type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type SoftSkillIcon =
  | 'message'
  | 'shield'
  | 'brain'
  | 'target'
  | 'clock'
  | 'users'
  | 'diamond'
  | 'trend';

type SoftSkill = {
  icon: SoftSkillIcon;
  label: LocalizedText;
  description: LocalizedText;
};

export const content = {
  owner: {
    name: {
      ru: ['Анохин', 'Вадим'],
      en: ['Vadim', 'Anokhin'],
    },
    initials: 'VA',
    location: {
      ru: 'Новосибирск',
      en: 'Novosibirsk',
    },
    title: {
      ru: 'Frontend-разработчик',
      en: 'Frontend Developer',
    },
    aboutHeadline: {
      ru: ['ТЕХНИКА', 'ИНТЕРЕСОВАЛА', 'С ДЕТСТВА'] as [string, string, string],
      en: ['TECHNOLOGY', 'FASCINATED ME', 'SINCE CHILDHOOD'] as [string, string, string],
    },
    tagline: {
      ru: 'Пишу интерфейсы, которые приятно трогать руками',
      en: 'I build interfaces that feel good to use',
    },
    about: {
      ru: 'Я frontend-разработчик, который любит не просто верстать экраны, а доводить интерфейс до состояния “им удобно пользоваться”.\n\nЗа 3 года я работал с разными типами задач: быстрые агентские проекты, фриланс и муниципальный сайт с большой легаси-кодовой базой. Поэтому умею не только писать с нуля, но и аккуратно разбираться в чужом коде, точечно улучшать существующее и не ломать то, что уже работает.\n\nМне близок подход, где frontend — это не набор красивых блоков, а часть продукта: скорость, адаптивность, понятная структура, аккуратная анимация, нормальная коммуникация с командой. Я спокойно отношусь к ограничениям, задаю вопросы, если вижу риск, и стараюсь делать так, чтобы после меня код было приятно поддерживать.',
      en: "I'm a frontend developer who likes not just building screens, but bringing an interface to the point where it feels comfortable to use.\n\nOver 3 years, I've worked with different kinds of tasks: fast agency projects, freelance work, and a municipal website with a large legacy codebase. That taught me not only to build from scratch, but also to carefully understand existing code, improve it point by point, and avoid breaking what already works.\n\nI see frontend as more than a set of nice-looking blocks — it's part of the product: speed, responsiveness, clear structure, thoughtful animation, and healthy communication with the team. I stay calm around constraints, ask questions when I see risk, and try to leave code that is pleasant to maintain.",
    },
  },

  stats: [
    {
      value: 3,
      label: { ru: 'Года', en: 'Years' },
      flip: { ru: 'в коде', en: 'in code' },
      description: {
        ru: 'От правок вёрстки до самостоятельной разработки фич и поддержки интерфейсов',
        en: 'From layout fixes to building features independently and supporting interfaces',
      },
      source: { ru: '2023 — 2026', en: '2023 — 2026' },
      tags: {
        ru: 'AMF Marketing · Муниципальный проект · Фриланс',
        en: 'AMF Marketing · Municipal project · Freelance',
      },
      size: 'wide',
      accent: true,
    },
    {
      value: 3,
      label: { ru: 'Канала', en: 'Tracks' },
      flip: { ru: 'разных контекста', en: 'distinct contexts' },
      description: {
        ru: 'Агентство, фриланс и муниципальный сектор — разный темп, масштаб и тип клиента',
        en: 'Agency, freelance and public sector — different pace, scale and client type',
      },
      source: {
        ru: 'AMF Marketing · Freelance · МБУК ЦБС',
        en: 'AMF Marketing · Freelance · MBUK CBS',
      },
      tags: { ru: 'React · TypeScript · SEO', en: 'React · TypeScript · SEO' },
    },
    {
      value: 17,
      label: { ru: 'Лет легаси', en: 'Years legacy' },
      flip: { ru: 'разобрано', en: 'untangled' },
      description: {
        ru: 'Работа с большой кодовой базой сайта 2008 года: точечные правки, улучшения и осторожность',
        en: 'Work with a large 2008 codebase: targeted fixes, improvements, and careful changes',
      },
      source: { ru: 'bibliotekino.ru — муниципальный проект', en: 'bibliotekino.ru — municipal project' },
      tags: { ru: 'Legacy · Редизайн · Осторожность', en: 'Legacy · Redesign · Careful changes' },
    },
  ] satisfies StatItem[],

  experience: [
    {
      company: 'AMF Marketing',
      url: 'https://amf-marketing.ru/',
      period: {
        ru: '2 года — сейчас',
        en: '2 years — present',
      },
      role: {
        ru: 'Frontend-разработчик',
        en: 'Frontend Developer',
      },
      description: {
        ru: 'Основное место работы на протяжении двух лет. Начинал по договору — небольшие задачи, быстрый ритм агентства. Постепенно зона ответственности росла: самостоятельная разработка фич, поддержка интерфейсов, работа с проектной структурой и взаимодействие с командой. Последние полгода — официально в штате по ТК.',
        en: 'My main place of work for two years. Started as a contractor — small tasks, fast agency pace. Gradually took on more responsibility: building features independently, supporting interfaces, working with project structure, and collaborating with the team. Last six months officially on staff.',
      },
    },
    {
      company: 'Bibliotekino.ru',
      url: 'https://bibliotekino.ru/',
      period: {
        ru: 'Проектная работа',
        en: 'Project-based',
      },
      role: {
        ru: 'Frontend + SEO',
        en: 'Frontend + SEO',
      },
      description: {
        ru: 'Проектная работа муниципального уровня. Сайт не обновлялся с 2008 года — большая легаси-кодовая база, где каждое изменение требовало осторожности. Работал над редизайном, SEO-оптимизацией и точечными улучшениями интерфейса без полного переписывания проекта.',
        en: "A municipal-level project. The site hadn't been updated since 2008 — a large legacy codebase where every change required care. Worked on the redesign, SEO optimization, and targeted interface improvements without rewriting the whole project.",
      },
    },
    {
      company: {
        ru: 'Фриланс',
        en: 'Freelance',
      },
      period: {
        ru: '~6 месяцев',
        en: '~6 months',
      },
      role: {
        ru: 'Frontend-разработчик',
        en: 'Frontend Developer',
      },
      description: {
        ru: 'Около полугода самостоятельной работы с разными клиентами и проектами. Хорошая школа — учит быстро вникать в чужой контекст, работать без команды рядом и нести ответственность за результат напрямую.',
        en: 'About six months of independent work with various clients and projects. A good school — it teaches you to get up to speed quickly, work without a team safety net, and own the result directly.',
      },
    },
  ] satisfies ExperienceItem[],

  skills: [
    { category: 'Languages', values: 'JavaScript, TypeScript' },
    { category: 'Frameworks', values: 'React, React Router' },
    { category: 'State', values: 'Redux Toolkit' },
    { category: 'Styling', values: 'HTML, CSS, SCSS, CSS-in-JS, Styled Components, CSS Modules, MUI' },
    { category: 'HTTP', values: 'Axios, REST API' },
    { category: 'Tools', values: 'Git, Figma' },
  ] satisfies SkillItem[],

  education: {
    institution: 'НГУЭУ / NSUEM',
    graduation: {
      ru: 'Выпуск — лето 2026',
      en: 'Graduating — Summer 2026',
    },
    note: {
      ru: 'Университет дал базу. Остальное — практика, живые проекты и интерес который не выключается.',
      en: 'University gave the foundation. The rest came from practice, real projects, and curiosity that never turns off.',
    },
  },

  softSkills: [
    {
      icon: 'message',
      label: { ru: 'Коммуникация', en: 'Communication' },
      description: {
        ru: 'Легко нахожу общий язык с людьми, умею слушать и доносить мысли чётко и по делу.',
        en: 'I find common ground easily, listen carefully, and explain thoughts clearly.',
      },
    },
    {
      icon: 'target',
      label: { ru: 'Ответственность', en: 'Responsibility' },
      description: {
        ru: 'Довожу начатое до конца, соблюдаю сроки и держу обещания.',
        en: 'I finish what I start, respect deadlines, and keep promises.',
      },
    },
    {
      icon: 'shield',
      label: { ru: 'Решение проблем', en: 'Problem solving' },
      description: {
        ru: 'Быстро нахожу решения в нестандартных ситуациях и не боюсь сложных задач.',
        en: 'I find solutions in unusual situations and do not avoid hard tasks.',
      },
    },
    {
      icon: 'brain',
      label: { ru: 'Обучаемость', en: 'Quick learner' },
      description: {
        ru: 'Быстро осваиваю новое, постоянно развиваюсь и слежу за трендами в IT.',
        en: 'I learn quickly, keep growing, and follow trends in tech.',
      },
    },
    {
      icon: 'clock',
      label: { ru: 'Тайм-менеджмент', en: 'Time management' },
      description: {
        ru: 'Планирую своё время, расставляю приоритеты и не теряюсь в параллельных задачах.',
        en: 'I plan time, set priorities, and stay focused across parallel tasks.',
      },
    },
    {
      icon: 'users',
      label: { ru: 'Работа в команде', en: 'Teamwork' },
      description: {
        ru: 'Поддерживаю здоровую атмосферу, делюсь контекстом и нормально принимаю обратную связь.',
        en: 'I support a healthy team atmosphere, share context, and take feedback well.',
      },
    },
    {
      icon: 'diamond',
      label: { ru: 'Внимание к деталям', en: 'Attention to detail' },
      description: {
        ru: 'Замечаю мелочи, которые влияют на качество интерфейса и ощущение продукта.',
        en: 'I notice details that affect interface quality and product feel.',
      },
    },
    {
      icon: 'trend',
      label: { ru: 'Инициативность', en: 'Initiative' },
      description: {
        ru: 'Предлагаю идеи, ищу улучшения и не жду, пока проблема станет большой.',
        en: 'I suggest ideas, look for improvements, and catch issues early.',
      },
    },
  ] satisfies SoftSkill[],

  contactSection: {
    heading: {
      ru: 'Давай — Работать',
      en: "Let's — Work",
    },
  },

  contactLinks: [
    { label: 'Email', value: 'anohin.vadim.1703@yandex.com', href: 'mailto:anohin.vadim.1703@yandex.com' },
    { label: 'Telegram', value: '@GTAKESHI1703', href: 'https://t.me/gTakeshi1703' },
    { label: 'GitHub', value: 'GANSGX', href: 'https://github.com/GANSGX' },
  ] satisfies ContactLink[],
};

export const ui = {
  ru: {
    languageLabel: 'Язык',
    about: 'Обо мне',
    experience: 'Опыт',
    skills: 'Навыки',
    education: 'Образование',
    contact: 'Контакт',
    meta: '— FRONTEND DEVELOPER · НОВОСИБИРСК · 3 ГОДА',
    cta: 'Смотреть работы',
    sectionAbout: '01 — ОБО МНЕ',
    sectionExperience: '02 — ОПЫТ',
    sectionSkills: '03 — НАВЫКИ',
    sectionContact: '04 — КОНТАКТ',
    heroCtaPrimary: 'Связаться',
    heroCtaSecondary: 'Смотреть опыт',
    openLink: 'Открыть',
    aboutHeading: 'Обо мне',
    statsHeading: 'Цифры',
    softSkillsHeading: 'Софт-скиллы',
    skillsTagsHeading: 'Стек и теги',
    skillsCategoriesHeading: 'Категории',
    contactHeading: 'Давай работать',
    footerCopy: 'АНОХИН ВАДИМ © 2026',
    portfolio: 'PORTFOLIO',
  },
  en: {
    languageLabel: 'Language',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
    meta: '— FRONTEND DEVELOPER · NOVOSIBIRSK · 3 YEARS',
    cta: 'View work',
    sectionAbout: '01 — ABOUT',
    sectionExperience: '02 — EXPERIENCE',
    sectionSkills: '03 — SKILLS',
    sectionContact: '04 — CONTACT',
    heroCtaPrimary: 'Get in touch',
    heroCtaSecondary: 'See experience',
    openLink: 'Open',
    aboutHeading: 'About me',
    statsHeading: 'Numbers',
    softSkillsHeading: 'Soft skills',
    skillsTagsHeading: 'Stack & tags',
    skillsCategoriesHeading: 'Categories',
    contactHeading: "Let's work",
    footerCopy: 'VADIM ANOKHIN © 2026',
    portfolio: 'PORTFOLIO',
  },
} satisfies Record<Locale, Record<string, string>>;
