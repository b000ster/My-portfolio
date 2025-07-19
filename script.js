// Example: smooth scroll for navigation
// Smooth scroll for navigation
document.querySelectorAll('.navbar-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

