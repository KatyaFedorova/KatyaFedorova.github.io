/* Kat Fedorova — site behaviour. No dependencies. */
(function () {
  'use strict';

  /* Current year in the footer */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* Reveal elements as they scroll into view */
  var reveals = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 4, 3) * 70) + 'ms';
      io.observe(el);
    });
  }

  /* Border on the nav once the page is scrolled */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    nav.classList.toggle('is-stuck', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
