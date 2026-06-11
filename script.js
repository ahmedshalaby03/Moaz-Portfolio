/* ── Custom Syringe Cursor ── */
const cursorSyringe = document.getElementById('cursor-syringe');
const cursorDot     = document.getElementById('cursor-dot');

let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorSyringe.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
  cursorDot.style.transform     = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
});

document.addEventListener('mousedown', () => document.body.classList.add('cursor-clicking'));
document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-clicking'));

// Hide on leave, show on enter
document.addEventListener('mouseleave', () => {
  cursorSyringe.style.opacity = '0';
  cursorDot.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
  cursorSyringe.style.opacity = '1';
  cursorDot.style.opacity = '1';
});

/* ═══════════════════════════
   PORTFOLIO JS
═══════════════════════════ */

// ── Scroll animation (Intersection Observer) ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      const id = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { passive: true });

// ── Nav shadow on scroll ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20
    ? '0 2px 20px rgba(10,74,74,0.09)'
    : 'none';
}, { passive: true });