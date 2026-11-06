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
    company: 'VML',
    date: copy('AGO 2026 — PRESENTE', 'AUG 2026 — PRESENT'),
    role: copy('Web Publisher', 'Web Publisher'),
    description: copy('Publicación web y gestión de contenido para Ford con Adobe Experience Manager.', 'Web publishing and content management for Ford with Adobe Experience Manager.'),
    points: [
      copy('Contribución a la migración de AEM on-premises a AEM as a Cloud Service, construyendo páginas de accesorios desde cero.', 'Contributed to the migration from AEM on-premises to AEM as a Cloud Service, building accessory pages from scratch.'),
      copy('Configuración de componentes Cards, Billboards y Colorizers, y preparación de páginas para validación.', 'Configured Card, Billboard, and Colorizer components and prepared pages for validation.'),
      copy('Gestión de activos digitales y Content Fragments, y actualización de precios en AEM on-premises.', 'Managed digital assets and Content Fragments and updated pricing in AEM on-premises.'),
    ],
    tech: 'AEM as a Cloud Service · AEM on-premises · HTML · DAM · Content Fragments · Jira',
  },
  {
    company: 'IMSS',
    date: copy('AGO 2024 — SEP 2025', 'AUG 2024 — SEP 2025'),
    role: copy('Desarrollador Frontend', 'Frontend Developer'),
    description: copy('Aplicaciones institucionales con funcionalidades frontend en producción y alcance nacional.', 'Institutional applications with frontend features released to production and nationwide reach.'),
    points: [
      copy('SIRI: funcionalidades para un sistema utilizado a nivel nacional en México; menús, filtros, reportes en Excel, mapas y gráficos con Angular.', 'SIRI: features for a system used nationwide in Mexico, including menus, filters, Excel reports, maps, and charts with Angular.'),
      copy('SMNS: interfaz de login responsiva y accesible, y optimización de carga y rendimiento.', 'SMNS: a responsive, accessible login interface and load-time and performance optimization.'),
      copy('CYSAPR: documentación de requisitos, componentes editables e integración de APIs con TypeScript.', 'CYSAPR: requirements documentation, editable components, and API integration with TypeScript.'),
    ],
    tech: 'Angular 12 / 17 · TypeScript · PrimeNG · Angular Material · Java · SQL',
  },
  {
    company: 'EY GDS',
    date: copy('MAR 2022 — MAR 2023', 'MAR 2022 — MAR 2023'),
    role: copy('Desarrollador Frontend / Ingeniero de Software', 'Frontend Developer / Software Engineer'),
    description: copy('Plataformas empresariales de gestión de engagements y datos de talento, con colaboración internacional.', 'Enterprise engagement and talent data management platforms with international collaboration.'),
    points: [
      copy('LYNX: mantenimiento de una plataforma utilizada por empleados de EY en Estados Unidos para gestionar la aceptación de engagements.', 'LYNX: maintenance of a platform used by EY employees in the United States to manage engagement acceptance.'),
      copy('Refactorización y optimización de componentes con React, TypeScript y Fluent UI para mejorar rendimiento y mantenibilidad.', 'Refactored and optimized components with React, TypeScript, and Fluent UI to improve performance and maintainability.'),
      copy('TalentOps: componentes con React y TypeScript, gestión de estado con Redux e integración de APIs.', 'TalentOps: React and TypeScript components, Redux state management, and API integration.'),
    ],
    tech: 'React · TypeScript · Fluent UI · Microsoft Dynamics 365 · Azure DevOps · Redux · Sass',
  },
  {
    company: 'Consorcio Jurídico',
    date: copy('SEP 2020 — JUN 2021', 'SEP 2020 — JUN 2021'),
    role: copy('Desarrollador Frontend / Ingeniero de Software', 'Frontend Developer / Software Engineer'),
    description: copy('Interfaces web y móviles para la gestión de solicitudes internas.', 'Web and mobile interfaces for internal request management.'),
    points: [
      copy('AGSI: diseño de interfaces, componentes y páginas para una experiencia consistente.', 'AGSI: interface, component, and page design for a consistent experience.'),
      copy('Adaptación de la interfaz web a Android Studio con Java.', 'Adaptation of the web interface to Android Studio with Java.'),
    ],
    tech: 'JavaScript · HTML / CSS · Bootstrap · ASP.NET · SQL Server · Android Studio · Java',
  },
];

export const education = [
  {
    institution: 'TripleTen',
    program: copy('Bootcamp de Diseño UX/UI', 'UX/UI Design Bootcamp'),
    date: copy('ABR 2026 — PRESENTE', 'APR 2026 — PRESENT'),
    status: copy('En curso · Finalización prevista: noviembre de 2026', 'In progress · Expected completion: November 2026'),
    description: copy('Wireframing, prototipado interactivo en Figma, pruebas de usabilidad con Maze y exploración visual con Excalidraw.', 'Wireframing, interactive prototyping in Figma, usability testing with Maze, and visual exploration with Excalidraw.'),
  },
  {
    institution: 'Universidad San Carlos',
    program: copy('Ingeniería en Sistemas Computacionales', "Bachelor’s Degree in Computer Systems Engineering"),
    date: copy('AGO 2015 — JUL 2019', 'AUG 2015 — JUL 2019'),
    status: copy('Estado de México', 'Mexico State'),
    description: copy('Formación universitaria en Ingeniería en Sistemas Computacionales.', 'University education in Computer Systems Engineering.'),
  },
];
