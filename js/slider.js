document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");

  const slides = slider.querySelectorAll(".slide");
  const nextBtn = slider.querySelector(".arrow_right1");
  const prevBtn = slider.querySelector(".arrow_left1");
  const dots = slider.querySelectorAll(".dot");

  let currentIndex = 0;
  let autoSlideInterval;

  function updateSlider(index) {
    if (!slides.length) return;

    slides.forEach(slide => slide.classList.remove("slide_active"));
    slides[index].classList.add("slide_active");

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) {
      dots[index].classList.add("active");
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider(currentIndex);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);

  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  updateSlider(currentIndex);
  startAutoSlide();
});
