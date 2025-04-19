
(function () {
  const elements = document.querySelectorAll('[data-string="reveal"]');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("string--visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  elements.forEach(el => observer.observe(el));
  console.log("StringTune initialized with reveal animation");
})();
