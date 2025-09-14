const observers = document.querySelectorAll('.animate');

const showOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

observers.forEach(el => showOnScroll.observe(el));
