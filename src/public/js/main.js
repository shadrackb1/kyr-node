/* ══════════════════════════════════════════
   Know Your Rights KE — Client JS
   ══════════════════════════════════════════ */

// ── Scroll reveal ──
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// ── Navbar scroll effect ──
function initNav() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      nav.style.background = 'rgba(9,9,11,0.95)';
    } else {
      nav.style.background = 'rgba(9,9,11,0.85)';
    }
    lastScroll = scrollY;
  }, { passive: true });
}

// ── Close mobile nav on link click ──
function initMobileNav() {
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links')?.classList.remove('open');
    });
  });
}

// ── Live search (optional) ──
function initLiveSearch() {
  const input = document.querySelector('.search-wrap input');
  if (!input || !input.closest('form')) return;

  // If using the form-based search, skip live search
  // (the form submits to /library?q=...)
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initNav();
  initMobileNav();
});
