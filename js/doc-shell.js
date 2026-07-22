// Shared docs-shell behaviour — nav collapse + active section highlighting.

(function () {
  // Sidebar collapse
  const toggle = document.getElementById('nav-toggle');
  if (toggle) {
    const saved = localStorage.getItem('doc-nav-collapsed') === 'true';
    if (saved) document.body.classList.add('nav-collapsed');
    toggle.addEventListener('click', () => {
      const now = document.body.classList.toggle('nav-collapsed');
      localStorage.setItem('doc-nav-collapsed', String(now));
    });
  }

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
