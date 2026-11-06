export type Copy = { es: string; en: string };
export const copy = (es: string, en: string): Copy => ({ es, en });
export const profile = {
  email: 'armandogune25@gmail.com',
  github: 'https://github.com/arpwn',
  linkedin: 'https://www.linkedin.com/in/armandonery34/',
};
export const projects = [
  {
    id: 'rulecheck', name: 'RuleCheck', image: '/RuleCheck.png', width: 2336, height: 1586,
    category: copy('Herramienta de evaluación', 'Evaluation tool'),
    description: copy('De una solicitud a una decisión clara.', 'From a request to a clear decision.'),
    summary: copy('Evaluación de solicitudes internas con reglas de riesgo, prioridades y un siguiente paso visible.', 'Internal request evaluation with risk rules, priorities, and a visible next step.'),
    problem: copy('Revisar solicitudes implica interpretar datos y decidir cuáles necesitan atención primero.', 'Reviewing requests means interpreting data and deciding which ones need attention first.'),
    solution: copy('Un formulario y un panel de resultados reúnen el nivel de riesgo, los motivos y la recomendación en una misma vista.', 'A form and a results panel bring the risk level, reasons, and recommendation into one view.'),
    focus: copy('Separar la captura de datos de la lectura del resultado, manteniendo el contexto de la solicitud.', 'Separate data entry from reading the result while keeping the request in context.'),
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    demo: 'https://rulecheck-kappa.vercel.app/', code: 'https://github.com/arpwn/rulecheck',
  },
  {
    id: 'shiftnote', name: 'ShiftNote', image: '/ShiftNote.png', width: 2346, height: 1810,
    category: copy('Productividad operativa', 'Operational productivity'),
    description: copy('Un cambio de turno, sin perder el contexto.', 'A shift change without losing context.'),
    summary: copy('Datos del turno y un resumen operativo para comunicar lo importante con una estructura consistente.', 'Shift data and an operational summary to communicate what matters in a consistent structure.'),
    problem: copy('Las notas libres pueden dificultar la lectura de pendientes y del estado de una operación.', 'Free-form notes can make it difficult to read pending tasks and the status of an operation.'),
    solution: copy('Captura estructurada de datos del turno junto a una vista previa del resumen operativo.', 'Structured shift data entry alongside a preview of the operational summary.'),
    focus: copy('Dar prioridad a la captura y a la revisión del resumen dentro de un mismo flujo.', 'Prioritize data entry and summary review within the same flow.'),
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    demo: 'https://shiftnote-one.vercel.app/', code: 'https://github.com/arpwn/shiftnote',
  },
  {
    id: 'spacex', name: 'SpaceX Mission Control', image: '/SpaceX.png', width: 3416, height: 1890,
    category: copy('Exploración de datos', 'Data exploration'),
    description: copy('Datos espaciales, una interfaz de control.', 'Space data, a mission control interface.'),
    summary: copy('Un panel para explorar misiones y lanzamientos con datos de API y una jerarquía visual compacta.', 'A dashboard to explore missions and launches with API data and a compact visual hierarchy.'),
    problem: copy('Explorar información de misiones requiere dar estructura a muchos datos distintos.', 'Exploring mission information requires giving structure to many different data points.'),
    solution: copy('Un dashboard que organiza los datos de SpaceX en paneles y tarjetas consultables.', 'A dashboard that organizes SpaceX data into browsable panels and cards.'),
    focus: copy('Presentar información densa con agrupaciones visuales y una estética de centro de control.', 'Present dense information with visual grouping and a mission control aesthetic.'),
    tech: ['React', 'TypeScript', 'API'],
    demo: 'https://spacex-mission-control-delta.vercel.app/', code: 'https://github.com/arpwn/spacex-mission-control',
  },
];
export const experiments = [
  { name: 'Crypto Market Dashboard', image: '/CryptoMarket.png', width: 840, height: 1112, category: copy('Visualización de datos', 'Data visualization'), summary: copy('Precios, tendencias y métricas del mercado cripto en un dashboard responsivo.', 'Crypto prices, trends, and metrics in a responsive dashboard.'), tech: 'React / TypeScript / Charts', demo: 'https://crypto-market-dashboard-steel.vercel.app/', code: 'https://github.com/arpwn/crypto-market-dashboard' },
  { name: 'Landing Astro', image: '/AstroLanding.png', width: 3420, height: 1896, category: copy('Experiencia web', 'Web experience'), summary: copy('Una landing page construida con Astro Islands y Tailwind, con foco en rendimiento y SEO.', 'A landing page built with Astro Islands and Tailwind, focused on performance and SEO.'), tech: 'Astro / Tailwind CSS', demo: 'https://landing-astro-bay.vercel.app/', code: 'https://github.com/arpwn/landing-astro' },
];
export const experience = [
  {
    company: 'VML', date: copy('AGO 2026 — PRESENTE', 'AUG 2026 — PRESENT'), role: copy('Web Publisher', 'Web Publisher'),
    description: copy('Experiencias web responsivas para Ford con Adobe Experience Manager.', 'Responsive web experiences for Ford with Adobe Experience Manager.'),
    points: [
      copy('Desarrollo y personalización de componentes de AEM, como tarjetas, banners y colorizadores, para escritorio y móvil.', 'Development and customization of AEM components, including cards, billboards, and colorizers, for desktop and mobile.'),
      copy('Gestión de contenido y activos digitales: DAM, fragmentos de contenido, precios y plantillas.', 'Content and digital asset management: DAM, content fragments, pricing, and nameplates.'),
    ],
    tech: 'AEM as a Cloud Service · HTML · CSS · Jira',
  },
  {
    company: 'IMSS', date: copy('AGO 2024 — SEP 2025', 'AUG 2024 — SEP 2025'), role: copy('Desarrollador Frontend', 'Frontend Developer'),
    description: copy('Interfaces para sistemas de información y gestión institucional.', 'Interfaces for institutional information and management systems.'),
    points: [copy('SIRI: menús administrativos, filtros, reportes en Excel, mapas y gráficos estadísticos.', 'SIRI: administrative menus, filters, Excel reports, maps, and statistical charts.'), copy('SMNS y CYSAPR: login responsivo, componentes de edición e integración de APIs.', 'SMNS and CYSAPR: responsive login, editing components, and API integration.')],
    tech: 'Angular 12 / 17 · TypeScript · PrimeNG · Angular Material',
  },
  {
    company: 'EY GDS', date: copy('MAR 2022 — MAR 2023', 'MAR 2022 — MAR 2023'), role: copy('Desarrollador Frontend / Ingeniero de Software', 'Frontend Developer / Software Engineer'),
    description: copy('Productos de gestión de proyectos y datos de talento, en un equipo internacional.', 'Project and talent data management products within an international team.'),
    points: [copy('LYNX: refactorización de componentes con Fluent UI y mejoras de rendimiento.', 'LYNX: component refactoring with Fluent UI and performance improvements.'), copy('TalentOps: componentes con React y TypeScript, gestión de estado con Redux y consumo de APIs.', 'TalentOps: React and TypeScript components, Redux state management, and API consumption.')],
    tech: 'React · TypeScript · Redux · Fluent UI · Sass',
  },
  {
    company: 'Consorcio Jurídico', date: copy('SEP 2020 — JUN 2021', 'SEP 2020 — JUN 2021'), role: copy('Desarrollador Frontend / Ingeniero de Software', 'Frontend Developer / Software Engineer'),
    description: copy('Interfaces web y móviles para la gestión de solicitudes internas.', 'Web and mobile interfaces for internal request management.'),
    points: [copy('AGSI: diseño de interfaces, componentes y páginas para una experiencia consistente.', 'AGSI: interface, component, and page design for a consistent experience.'), copy('Adaptación de la interfaz web a Android Studio con Java.', 'Adaptation of the web interface to Android Studio with Java.')],
    tech: 'JavaScript · HTML / CSS · Bootstrap · ASP.NET · Java',
  },
];
