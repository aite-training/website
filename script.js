// Loader, animate sections on scroll, smooth transitions
document.addEventListener("DOMContentLoaded", function () {
  // Hide preloader
  setTimeout(() => {
    const loader = document.getElementById("preloader");
    if (loader) loader.style.display = "none";
    // Animate sections after load
    document.querySelectorAll('.animated').forEach(sec => {
      sec.classList.add('fadeIn');
    });
  }, 3000);

  // Optional: Animate on scroll (for long pages)
  function revealOnScroll() {
    document.querySelectorAll('.animated').forEach(sec => {
      if (sec.getBoundingClientRect().top < window.innerHeight - 80) {
        sec.classList.add('fadeIn');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
