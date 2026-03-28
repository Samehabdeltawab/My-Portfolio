/* ============================================================
   QA Automation Engineer Portfolio — Main JavaScript
   ============================================================ */

'use strict';

/* ===== DOM READY ===== */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initTypingEffect();
  initSmoothScroll();
  initRevealAnimations();
  initBackToTop();
  initCounterAnimations();
  initContactForm();
  initActiveNavLinks();
  setFooterYear();
});


/* ===== NAVBAR ===== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run on load
}


/* ===== MOBILE MENU ===== */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu on nav link click
  navLinks.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}


/* ===== TYPING EFFECT ===== */
function initTypingEffect() {
  const typedEl = document.getElementById('typed');
  if (!typedEl) return;

  const phrases = [
    'QA Automation Engineer',
    'Test Framework Architect',
    'CI/CD Pipeline Builder',
    'API Testing Specialist',
    'Quality Advocate'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end of phrase
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 600);
}


/* ===== SMOOTH SCROLL ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 70;
      const targetY = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });
}


/* ===== REVEAL ANIMATIONS ===== */
function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  // Add stagger delays to grid children
  document.querySelectorAll('.skills-categories, .projects-grid').forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${i * 80}ms`;
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}


/* ===== BACK TO TOP ===== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ===== COUNTER ANIMATIONS ===== */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.stats-num[data-target]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        el.textContent = current.toLocaleString();
      }
    }, 16);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}


/* ===== CONTACT FORM ===== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;

    // Validate
    const name    = form.querySelector('#name').value.trim();
    const email   = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !subject || !message) {
      shakeForm(form);
      return;
    }

    if (!isValidEmail(email)) {
      const emailInput = form.querySelector('#email');
      emailInput.style.borderColor = '#ef4444';
      emailInput.focus();
      setTimeout(() => { emailInput.style.borderColor = ''; }, 2000);
      return;
    }

    // Simulate sending
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    await delay(1500);

    btn.innerHTML = originalHTML;
    btn.disabled = false;
    form.reset();

    if (successMsg) {
      successMsg.classList.add('show');
      setTimeout(() => successMsg.classList.remove('show'), 5000);
    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function shakeForm(form) {
  form.style.animation = 'shake 0.4s ease';
  setTimeout(() => { form.style.animation = ''; }, 400);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


/* ===== ACTIVE NAV LINKS ===== */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const sectionMap = {};
  sections.forEach(section => {
    sectionMap[section.id] = section;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.4,
    rootMargin: '-80px 0px -40% 0px'
  });

  sections.forEach(section => observer.observe(section));
}


/* ===== FOOTER YEAR ===== */
function setFooterYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}


/* ===== CSS SHAKE ANIMATION (injected) ===== */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%  { transform: translateX(-6px); }
    40%  { transform: translateX(6px); }
    60%  { transform: translateX(-4px); }
    80%  { transform: translateX(4px); }
  }
`;
document.head.appendChild(shakeStyle);


/* ===== SKILL TAG HOVER GLOW ===== */
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px) scale(1.04)';
    this.style.boxShadow = '0 4px 16px rgba(0,212,255,0.15)';
  });
  tag.addEventListener('mouseleave', function() {
    this.style.transform = '';
    this.style.boxShadow = '';
  });
});


/* ===== CODE WINDOW TYPING ANIMATION ===== */
(function animateCodeWindow() {
  const codeBlock = document.querySelector('.code-block code');
  if (!codeBlock) return;

  // Add a subtle blinking line indicator to last line
  const lastLine = document.createElement('span');
  lastLine.className = 'typing-cursor';
  lastLine.innerHTML = '\n<span style="color:#6272a4">▊</span>';
  lastLine.style.animation = 'blink 1s infinite';
  codeBlock.appendChild(lastLine);
})();


/* ===== PARALLAX: glow orbs on mouse move ===== */
document.addEventListener('mousemove', (e) => {
  const glow1 = document.querySelector('.glow-1');
  const glow2 = document.querySelector('.glow-2');
  if (!glow1 || !glow2) return;

  const xPercent = e.clientX / window.innerWidth;
  const yPercent = e.clientY / window.innerHeight;

  glow1.style.transform = `translate(${xPercent * 20}px, ${yPercent * 20}px)`;
  glow2.style.transform = `translate(${-xPercent * 15}px, ${-yPercent * 15}px)`;
}, { passive: true });
