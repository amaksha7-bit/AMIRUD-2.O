(() => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('nav');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();
  if (!btn || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Close' : 'Menu';
  };

  btn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
})();
