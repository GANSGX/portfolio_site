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
};

type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type SoftSkillIcon = 'message' | 'shield' | 'brain' | 'target';

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
    tagline: {
      ru: 'Пишу интерфейсы, которые приятно трогать руками',
      en: 'I build interfaces that feel good to use',
    },
    about: {
      ru: 'Техника интересовала с детства — с первого телефона, с первого компьютера. Всегда было интересно как это устроено внутри, почему работает именно так. Со временем это переросло в программирование, и вот уже три года я занимаюсь этим профессионально.\n\nЗа это время успел поработать в маркетинговом агентстве, где задачи росли вместе со мной — от правок вёрстки до самостоятельной разработки фич и работы с архитектурой. Параллельно закрыл муниципальный проект — редизайн сайта которому было почти 20 лет. Тот случай когда нельзя просто всё переписать, нужно думать.\n\nВ команде важна коммуникация — не замалчивать проблемы, говорить прямо, слышать других. Убеждён что хороший результат рождается из живого диалога, а не из молчаливого закрытия тасок.',
      en: "Technology has fascinated me since childhood — the first phone, the first computer. I always wanted to know how things work under the hood. That curiosity eventually turned into programming, and for the past three years I've been doing this professionally.\n\nOver that time I worked at a marketing agency where my responsibilities grew alongside my skills — from layout fixes to building features independently and thinking about architecture. I also delivered a municipal project — a redesign of a site that hadn't been touched since 2008. The kind of task where you can't just rewrite everything from scratch.\n\nI believe good results come from real communication — not hiding problems, speaking directly, actually listening. The best code I've seen came from teams that talk to each other, not just close tickets.",
    },
  },

  stats: [
    {
      value: 3,
      label: { ru: 'Года опыта', en: 'Years experience' },
      flip: { ru: '2022 — н.в. Агентство, муниципальный проект, фриланс.', en: '2022–present. Agency, municipal project, freelance.' },
    },
    {
      value: 2,
      label: { ru: 'Компании', en: 'Companies' },
      flip: { ru: 'AMF Marketing и bibliotekino.ru — оба в продакшне.', en: 'AMF Marketing and bibliotekino.ru — both in production.' },
    },
    {
      value: 1,
      label: { ru: 'Муниципальный проект', en: 'Municipal project' },
      flip: { ru: 'Редизайн bibliotekino.ru — сайт 2008 года. Легаси, SEO, доступность.', en: 'Redesigned bibliotekino.ru — a 2008 site. Legacy code, SEO, accessibility.' },
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
        ru: 'Основное место работы на протяжении двух лет. Начинал по договору — небольшие задачи, быстрый ритм агентства. Постепенно зона ответственности росла: самостоятельная разработка фич, работа с архитектурой проектов, взаимодействие с командой. Последние полгода — официально в штате по ТК.',
        en: 'My main place of work for two years. Started as a contractor — small tasks, fast agency pace. Gradually took on more responsibility: building features independently, working on project architecture, collaborating with the team. Last six months officially on staff.',
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
        ru: 'Проектная работа муниципального уровня. Сайт не обновлялся с 2008 года — настоящий легаси, где каждое изменение требовало осторожности. Провёл редизайн, SEO-оптимизацию, разобрался с кодом который писали задолго до современных стандартов. Интересный опыт работы в условиях ограничений.',
        en: 'A municipal-level project. The site hadn\'t been updated since 2008 — real legacy code where every change required care. Handled the redesign, SEO optimization, and worked through code written long before modern standards existed. A valuable experience of working under constraints.',
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
      label: { ru: 'Коммуникабельность', en: 'Communication' },
      description: {
        ru: 'Легко нахожу общий язык с командой и клиентами',
        en: 'I find common ground with teammates and clients easily',
      },
    },
    {
      icon: 'shield',
      label: { ru: 'Стрессоустойчивость', en: 'Resilience' },
      description: {
        ru: 'Дедлайны не пугают',
        en: "Deadlines don't scare me",
      },
    },
    {
      icon: 'brain',
      label: { ru: 'Обучаемость', en: 'Quick learner' },
      description: {
        ru: 'Новый стек — это интересно, не страшно',
        en: 'A new stack is interesting, not scary',
      },
    },
    {
      icon: 'target',
      label: { ru: 'Целеустремлённость', en: 'Drive' },
      description: {
        ru: 'Если взялся — довожу до конца',
        en: 'If I take it on, I see it through',
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
