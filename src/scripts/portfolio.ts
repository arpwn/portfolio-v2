import { profile } from '../data/portfolio';

type Language = 'es' | 'en';
const root = document.documentElement;
const languageToggle = document.querySelector<HTMLButtonElement>('#language-toggle');
const themeToggle = document.querySelector<HTMLButtonElement>('#theme-toggle');
const dialog = document.querySelector<HTMLDialogElement>('#command-dialog');
const search = document.querySelector<HTMLInputElement>('#command-search');
const commandLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('#command-dialog nav a'));
const getLanguage = (): Language => root.lang === 'en' ? 'en' : 'es';
function savePreference(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* Preferences are optional. */ }
}
function updateLabels() {
  const en = getLanguage() === 'en';
  document.querySelector('#language-label')!.textContent = en ? 'ES' : 'EN';
  languageToggle?.setAttribute('aria-label', en ? 'Cambiar a español' : 'Switch to English');
  themeToggle?.setAttribute('aria-label', root.classList.contains('dark') ? (en ? 'Switch to light theme' : 'Cambiar a tema claro') : (en ? 'Switch to dark theme' : 'Cambiar a tema oscuro'));
  if (search) search.placeholder = en ? 'Search for a section…' : 'Buscar una sección…';
  document.querySelector('#close-command')?.setAttribute('aria-label', en ? 'Close commands' : 'Cerrar comandos');
  document.querySelector('.back-top')?.setAttribute('aria-label', en ? 'Back to top' : 'Volver al inicio');
  document.querySelector('.hero-preview')?.setAttribute('aria-label', en ? 'RuleCheck — View project' : 'RuleCheck — Ver proyecto');
  document.querySelector('.wordmark')?.setAttribute('aria-label', en ? 'Armando Gtz — Home' : 'Armando Gtz — Inicio');
  document.querySelector('.main-nav')?.setAttribute('aria-label', en ? 'Main navigation' : 'Navegación principal');
  document.querySelector('#command-dialog nav')?.setAttribute('aria-label', en ? 'Commands' : 'Comandos');
  document.querySelector('.hero-footnote > a')?.setAttribute('aria-label', en ? 'Go to projects' : 'Ir a proyectos');
  document.querySelectorAll('.tech-list').forEach(list => list.setAttribute('aria-label', en ? 'Technologies' : 'Tecnologías'));
  const demoHosts = new Set(['rulecheck-kappa.vercel.app', 'shiftnote-one.vercel.app', 'spacex-mission-control-delta.vercel.app', 'crypto-market-dashboard-steel.vercel.app', 'landing-astro-bay.vercel.app']);
  document.querySelectorAll<HTMLAnchorElement>('#proyectos a[href]').forEach(link => {
    const url = new URL(link.href);
    if (demoHosts.has(url.hostname)) {
      url.searchParams.set('lang', en ? 'en' : 'es');
      link.href = url.href;
    }
  });
  document.title = 'Armando Gtz — Front-End Developer';
  document.querySelector('meta[name="description"]')?.setAttribute('content', en ? "Armando Gutiérrez Nery's portfolio. Frontend development with React, Angular, and TypeScript. Projects, professional experience, and contact." : 'Portafolio de Armando Gutiérrez Nery. Desarrollo frontend con React, Angular y TypeScript. Proyectos, experiencia profesional y contacto.');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', root.classList.contains('dark') ? '#111014' : '#f8f7fa');
}
updateLabels();
languageToggle?.addEventListener('click', () => {
  root.lang = getLanguage() === 'es' ? 'en' : 'es';
  savePreference('lang', root.lang);
  document.querySelector('#copy-status')!.textContent = '';
  updateLabels();
});
themeToggle?.addEventListener('click', () => {
  const dark = root.classList.toggle('dark');
  savePreference('theme', dark ? 'dark' : 'light');
  updateLabels();
});
function filterCommands() {
  const query = (search?.value || '').trim().toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  let matches = 0;
  commandLinks.forEach(link => {
    link.hidden = !(link.dataset.search || '').includes(query);
    if (!link.hidden) matches++;
  });
  const empty = document.querySelector<HTMLElement>('#command-empty');
  if (empty) empty.hidden = matches > 0;
}
function openCommands() {
  if (!dialog || dialog.open) return;
  if (search) search.value = '';
  filterCommands();
  dialog.showModal();
  search?.focus();
}
document.querySelector('#command-button')?.addEventListener('click', openCommands);
document.querySelector('#close-command')?.addEventListener('click', () => dialog?.close());
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && dialog?.open) {
    event.preventDefault();
    dialog.close();
    return;
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    if (dialog?.open) dialog.close(); else openCommands();
  }
});
search?.addEventListener('input', filterCommands);
search?.addEventListener('keydown', event => {
  const results = commandLinks.filter(link => !link.hidden);
  if (event.key === 'Enter' && results.length) { event.preventDefault(); results[0].click(); }
  if (event.key === 'ArrowDown' && results.length) { event.preventDefault(); results[0].focus(); }
});
commandLinks.forEach(link => link.addEventListener('click', () => dialog?.close()));
dialog?.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
document.querySelector<HTMLButtonElement>('#copy-email')?.addEventListener('click', async event => {
  const button = event.currentTarget as HTMLButtonElement;
  const status = document.querySelector<HTMLElement>('#copy-status');
  button.disabled = true;
  try {
    await navigator.clipboard.writeText(profile.email);
    if (status) status.textContent = getLanguage() === 'es' ? 'Email copiado. ¡Hablamos pronto!' : 'Email copied. Talk soon!';
  } catch {
    if (status) status.textContent = getLanguage() === 'es' ? `Puedes copiarlo directamente: ${profile.email}` : `You can copy it directly: ${profile.email}`;
  } finally { button.disabled = false; }
});
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.main-nav a'));
const sections = navLinks.map(link => document.querySelector<HTMLElement>(link.hash)).filter((section): section is HTMLElement => !!section);
if ('IntersectionObserver' in window) {
  const visible = new Set<string>();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) visible.add(entry.target.id); else visible.delete(entry.target.id); });
    const current = sections.find(section => visible.has(section.id));
    navLinks.forEach(link => {
      if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-130px 0px -35% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
