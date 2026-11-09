export type Copy = { es: string; en: string };
export const copy = (es: string, en: string): Copy => ({ es, en });
export const profile = {
  email: 'armandogune25@gmail.com',
  github: 'https://github.com/arpwn',
  linkedin: 'https://www.linkedin.com/in/armandonery34/',
};
// Professional contributions use only information already documented in experience.
export const professionalWork = [
  {
    id: 'siri', company: 'IMSS', name: 'SIRI', experienceId: 'experience-imss',
    category: copy('Sistema institucional · Angular', 'Institutional system · Angular'),
    title: copy('Consultar, filtrar y presentar información.', 'Browse, filter, and present information.'),
    context: copy('Sistema institucional utilizado a nivel nacional en México.', 'Institutional system used nationwide in Mexico.'),
    contribution: copy('Desarrollé funcionalidades frontend: menús, filtros, reportes en Excel, mapas y gráficos con Angular.', 'I developed frontend features: menus, filters, Excel reports, maps, and charts with Angular.'),
    tech: ['Angular', 'TypeScript', 'PrimeNG', 'Angular Material'],
  },
  {
    id: 'lynx', company: 'EY GDS', name: 'LYNX / TalentOps', experienceId: 'experience-ey',
    category: copy('Plataformas empresariales · React', 'Enterprise platforms · React'),
    title: copy('Componentes para flujos de trabajo internos.', 'Components for internal workflows.'),
    context: copy('LYNX permite a empleados de EY en Estados Unidos gestionar la aceptación de engagements. TalentOps reúne datos de talento.', 'LYNX enables EY employees in the United States to manage engagement acceptance. TalentOps brings together talent data.'),
    contribution: copy('Contribuí al mantenimiento de LYNX y a la refactorización de componentes con React, TypeScript y Fluent UI. En TalentOps trabajé con componentes, estado con Redux e integración de APIs.', 'I contributed to LYNX maintenance and component refactoring with React, TypeScript, and Fluent UI. In TalentOps, I worked on components, Redux state management, and API integration.'),
    tech: ['React', 'TypeScript', 'Fluent UI', 'Redux'],
  },
];
export const projects = [
  {
    id: 'rulecheck', name: 'RuleCheck', image: '/RuleCheck-v2.jpg', width: 1280, height: 1050,
    category: copy('Proyecto personal · Evaluación de solicitudes', 'Personal project · Request evaluation'),
    description: copy('De una solicitud a una decisión clara.', 'From a request to a clear decision.'),
    summary: copy('Bandeja de solicitudes con búsqueda, filtros y guardado local. Cada evaluación muestra las reglas aplicadas, su puntuación y el siguiente paso.', 'Request inbox with search, filters, and local storage. Each evaluation shows the applied rules, their score, and the next step.'),
    problem: copy('Revisar solicitudes implica interpretar datos y decidir cuáles necesitan atención primero.', 'Reviewing requests means interpreting data and deciding which ones need attention first.'),
    solution: copy('Un formulario y un panel de resultados reúnen el nivel de riesgo, los motivos y la recomendación en una misma vista.', 'A form and a results panel bring the risk level, reasons, and recommendation into one view.'),
    focus: copy('El resultado permanece junto al formulario para comparar los datos capturados con los motivos de la evaluación. El color acompaña al estado escrito y el siguiente paso tiene su propio bloque.', 'The result stays beside the form so entered data can be compared with the evaluation reasons. Color accompanies the written status, and the next step has its own block.'),
    scope: copy('Captura validada, evaluación explicable e historial de solicitudes en este navegador. Las reglas tienen pruebas de umbrales y acumulación; los datos se guardan localmente.', 'Validated entry, explainable evaluation, and request history in this browser. Thresholds and cumulative rules are tested; data is stored locally.'),
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://rulecheck-kappa.vercel.app/', code: 'https://github.com/arpwn/rulecheck',
  },
  {
    id: 'shiftnote', name: 'ShiftNote', image: '/ShiftNote-v2.jpg', width: 1280, height: 1050,
    category: copy('Proyecto personal · Comunicación operativa', 'Personal project · Operational communication'),
    description: copy('Un cambio de turno, sin perder el contexto.', 'A shift change without losing context.'),
    summary: copy('Incidencias con responsable y estado, resumen copiable e historial local. El cierre de turno transfiere solo los pendientes al siguiente equipo.', 'Incidents with owners and status, a copyable summary, and local history. Closing a shift transfers only pending items to the next team.'),
    problem: copy('Las notas libres pueden dificultar la lectura de pendientes y del estado de una operación.', 'Free-form notes can make it difficult to read pending tasks and the status of an operation.'),
    solution: copy('Captura estructurada de datos del turno junto a una vista previa del resumen operativo.', 'Structured shift data entry alongside a preview of the operational summary.'),
    focus: copy('Dar prioridad a la captura y a la revisión del resumen dentro de un mismo flujo.', 'Prioritize data entry and summary review within the same flow.'),
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://shiftnote-one.vercel.app/', code: 'https://github.com/arpwn/shiftnote',
  },
  {
    id: 'spacex', name: 'SpaceX Mission Control', image: '/SpaceX-v2.jpg', width: 1280, height: 1050,
    category: copy('Proyecto personal · Exploración de datos', 'Personal project · Data exploration'),
    description: copy('Datos espaciales, una interfaz de control.', 'Space data, a mission control interface.'),
    summary: copy('Búsqueda, filtros por año y resultado, paginación y detalle de misión. Si la API falla, muestra una selección histórica identificada con fuentes de NASA.', 'Search, year and outcome filters, pagination, and mission details. If the API fails, a labeled historical selection with NASA sources remains available.'),
    problem: copy('Explorar información de misiones requiere dar estructura a muchos datos distintos.', 'Exploring mission information requires giving structure to many different data points.'),
    solution: copy('Un dashboard que organiza los datos de SpaceX en paneles y tarjetas consultables.', 'A dashboard that organizes SpaceX data into browsable panels and cards.'),
    focus: copy('Presentar información densa con agrupaciones visuales y una estética de centro de control.', 'Present dense information with visual grouping and a mission control aesthetic.'),
    tech: ['React', 'TypeScript', 'API'],
    demo: 'https://spacex-mission-control-delta.vercel.app/', code: 'https://github.com/arpwn/spacex-mission-control',
  },
  {
    id: 'crypto', name: 'Crypto Market Dashboard', image: '/CryptoMarket-v2.jpg', width: 1280, height: 1248,
    category: copy('Proyecto personal · Visualización de datos', 'Personal project · Data visualization'),
    description: copy('Precio y volumen, con contexto.', 'Price and volume, in context.'),
    summary: copy('Precio, volumen y variación del periodo con datos de CoinGecko. Filtros de moneda y fechas, gráficas adaptables y recuperación de errores.', 'Price, volume, and period change using CoinGecko data. Currency and date filters, responsive charts, and error recovery.'),
    problem: copy('Comparar movimientos de mercado requiere relacionar precio, volumen y periodo.', 'Comparing market movements requires relating price, volume, and time range.'),
    solution: copy('Métricas y gráficas reúnen el contexto del periodo, con filtros disponibles durante la carga y ante errores.', 'Metrics and charts bring together period context, with filters available while loading and on errors.'),
    focus: copy('Dar espacio a las gráficas, abreviar los ejes y mostrar valores completos en el detalle.', 'Give charts room, abbreviate axes, and show complete values in tooltips.'),
    tech: ['React', 'TypeScript', 'Recharts'],
    demo: 'https://crypto-market-dashboard-steel.vercel.app/', code: 'https://github.com/arpwn/crypto-market-dashboard',
  },
  {
    id: 'devlaunch', name: 'DevLaunch', image: '/DevLaunch-v2.jpg', width: 1280, height: 850,
    category: copy('Proyecto personal · Sitio web', 'Personal project · Website'),
    description: copy('De una idea a un brief de proyecto.', 'From an idea to a project brief.'),
    summary: copy('Concepto de estudio web con servicios, proceso y preguntas frecuentes. Un configurador convierte el objetivo del proyecto en un brief descargable.', 'Web studio concept with services, process, and FAQs. A configurator turns the project goal into a downloadable brief.'),
    problem: copy('Empezar un sitio requiere definir qué debe comunicar y qué necesita hacer su visitante.', 'Starting a website requires defining what it should communicate and what visitors need to do.'),
    solution: copy('Una propuesta de servicios y un proceso claro llevan a un configurador de brief que funciona en el dispositivo.', 'A service offering and clear process lead to a brief configurator that works on the device.'),
    focus: copy('Conectar las llamadas a la acción con el siguiente paso y mantener la página adaptable y accesible.', 'Connect calls to action with the next step while keeping the page responsive and accessible.'),
    tech: ['Astro', 'CSS', 'JavaScript'],
    demo: 'https://landing-astro-bay.vercel.app/', code: 'https://github.com/arpwn/landing-astro',
  },
];
export const experience = [
  {
    id: 'experience-vml',
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
    id: 'experience-imss',
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
    id: 'experience-ey',
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
    id: 'experience-consorcio',
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
