/**
 * Decon 86, S.A. — main.js
 * Vanilla JS — sin dependencias externas.
 * 5 módulos: Navbar, MobileMenu, ProjectFilter, ContactForm, BackToTop
 */

'use strict';

/* ──────────────────────────────────────────────────────────────
   1. initNavbar
   Añade clase `scrolled` al navbar cuando scrollY > 80px.
   Esa clase activa la sombra sutil via CSS (fondo siempre blanco).
────────────────────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // ejecutar al cargar por si ya está scrolleado
}

/* ──────────────────────────────────────────────────────────────
   2. initMobileMenu
   Toggle del drawer mobile. Cierra al hacer click en link
   o al tocar fuera del navbar.
────────────────────────────────────────────────────────────── */
function initMobileMenu() {
  const menuBtn    = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navbar     = document.getElementById('navbar');
  if (!menuBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Cerrar menú');

    // Hamburger → × via transform en spans
    const spans = menuBtn.querySelectorAll('span');
    if (spans.length >= 3) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    }
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Abrir menú');

    const spans = menuBtn.querySelectorAll('span');
    if (spans.length >= 3) {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  }

  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  // Cerrar al hacer click en cualquier link del drawer
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar al tocar fuera del navbar
  document.addEventListener('click', function (e) {
    if (navbar && !navbar.contains(e.target)) {
      closeMenu();
    }
  });

  // Cerrar con Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuBtn.focus();
    }
  });
}

/* ──────────────────────────────────────────────────────────────
   3. initProjectFilter
   Filtra .project-card por data-category cuando se hace
   click en un .filter-btn. "all" muestra todos.
   Botón activo recibe clase `active` (bg azul primario via CSS).
────────────────────────────────────────────────────────────── */
function initProjectFilter() {
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Actualizar botón activo
      filterBtns.forEach(function (b) {
        b.classList.remove('active');
        b.removeAttribute('aria-current');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-current', 'true');

      const filter = btn.getAttribute('data-filter');

      // Mostrar/ocultar cards
      projectCards.forEach(function (card) {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ──────────────────────────────────────────────────────────────
   5. initBackToTop
   Muestra el botón #back-to-top cuando scrollY > 500px.
   Click hace scroll suave al top.
────────────────────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      btn.classList.remove('hidden');
    } else {
      btn.classList.add('hidden');
    }
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ──────────────────────────────────────────────────────────────
   6. initScrollReveal
   Usa IntersectionObserver para añadir la clase `revealed` a
   cualquier elemento con clase `reveal` cuando entra en viewport.
   Una vez revelado, deja de observarse.
────────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
}

/* ──────────────────────────────────────────────────────────────
   7. initCounters
   Anima los contadores numéricos (.stat-number) de 0 al valor
   en data-target cuando entran en el viewport (threshold 50%).
────────────────────────────────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const target   = parseInt(entry.target.dataset.target, 10);
        const suffix   = entry.target.dataset.suffix !== undefined ? entry.target.dataset.suffix : '+';
        const duration = 1500;
        const step     = target / (duration / 16);
        let current    = 0;

        const timer = setInterval(function () {
          current += step;
          if (current >= target) {
            entry.target.textContent = target + suffix;
            clearInterval(timer);
          } else {
            entry.target.textContent = Math.floor(current);
          }
        }, 16);

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (el) {
    observer.observe(el);
  });
}

/* ──────────────────────────────────────────────────────────────
   8. initActiveNav
   Marca el link del nav con text-[#8B1A1A] según la sección
   visible en viewport. Usa IntersectionObserver con threshold
   bajo para capturar la sección dominante al hacer scroll.
────────────────────────────────────────────────────────────── */
function initActiveNav() {
  const navLinks = document.querySelectorAll('nav ul a[href^="#"]');
  if (!navLinks.length) return;

  const sectionIds = Array.from(navLinks).map(function (link) {
    return link.getAttribute('href').slice(1);
  }).filter(Boolean);

  const sections = sectionIds.map(function (id) {
    return document.getElementById(id);
  }).filter(Boolean);

  if (!sections.length) return;

  function setActive(id) {
    navLinks.forEach(function (link) {
      const isActive = link.getAttribute('href') === '#' + id;
      link.style.color = isActive ? '#8B1A1A' : '';
    });
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' });

  sections.forEach(function (section) {
    observer.observe(section);
  });
}

/* ──────────────────────────────────────────────────────────────
   Bootstrap — DOMContentLoaded
────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  initNavbar();
  initMobileMenu();
  initProjectFilter();
  initBackToTop();
  initScrollReveal();
  initCounters();
  initActiveNav();

  // Copyright year dinámico
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
