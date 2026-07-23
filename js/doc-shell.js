// Shared docs-shell behaviour — nav collapse + active section highlighting.

(function () {
  const toggle = document.getElementById('nav-toggle');
  const scrim = document.getElementById('nav-scrim');
  const drawer = document.getElementById('doc-drawer');
  const mobile = window.matchMedia('(max-width: 860px)');
  const isMobile = () => mobile.matches;

  // Desktop collapse state is persisted; it has no effect on mobile
  // (the CSS neutralises it — the drawer is the mobile model).
  if (localStorage.getItem('doc-nav-collapsed') === 'true') {
    document.body.classList.add('nav-collapsed');
  }

  function openDrawer() {
    document.body.classList.add('drawer-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer() {
    document.body.classList.remove('drawer-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      if (isMobile()) {
        document.body.classList.contains('drawer-open') ? closeDrawer() : openDrawer();
      } else {
        const now = document.body.classList.toggle('nav-collapsed');
        localStorage.setItem('doc-nav-collapsed', String(now));
      }
    });
  }

  if (scrim) scrim.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
  // Tapping any link inside the mobile drawer closes it.
  if (drawer) {
    drawer.addEventListener('click', (e) => {
      if (isMobile() && e.target.closest('a')) closeDrawer();
    });
  }
  // Growing back to desktop clears any open-drawer state.
  mobile.addEventListener('change', (e) => {
    if (!e.matches) closeDrawer();
  });

  // Active nav on scroll — highlight the section closest to the top.
  const navItems = document.querySelectorAll('.docs-nav-item[data-nav-id]');
  if (!navItems.length) return;

  const sections = Array.from(navItems)
    .map((item) => {
      const href = item.getAttribute('href') || '';
      const id = href.startsWith('#') ? href.slice(1) : '';
      const el = id ? document.getElementById(id) : null;
      return el ? { item, el } : null;
    })
    .filter(Boolean);

  function update() {
    const scrollTop = window.scrollY + 120; // topbar + gutter
    let active = sections[0];
    for (const s of sections) {
      if (s.el.offsetTop <= scrollTop) active = s;
    }
    navItems.forEach((n) => n.classList.remove('active'));
    if (active) active.item.classList.add('active');
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);

  // Smooth-scroll nav clicks
  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      const href = item.getAttribute('href') || '';
      if (!href.startsWith('#')) return;
      const el = document.getElementById(href.slice(1));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
