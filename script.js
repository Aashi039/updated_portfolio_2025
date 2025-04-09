document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.querySelector(".typing-text");
  const words = ["Web Developer", "ML Enthusiast", "Automation Explorer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const visibleText = currentWord.substring(0, charIndex);

    typingText.textContent = visibleText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(type, 1000); // Pause before deleting
      } else {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500); // Pause before typing next word
      }
    }
  }

  type();

  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // Slide-up on scroll
  const slideSections = document.querySelectorAll(".slide-up");

  function revealOnScroll() {
    slideSections.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
});


