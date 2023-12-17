document.addEventListener('DOMContentLoaded', function () {
  const wrap = document.querySelector(".steps-wrap");
  const prevButton = document.querySelector(".prev-step");
  const nextButton = document.querySelector('.next-step');
  let currentIndex = 0;

  function showSlide(index) {
    const slides = document.querySelector(".steps-wrap .steps-list");
    const itemWidth = document.querySelector(".steps-item").offsetWidth;
    const slideWidth = itemWidth + 50;
    
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function showPrevSlide() {
    const slides = document.querySelector(".steps-list");
    currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
    showSlide(currentIndex);
  }

  function showNextSlide() {
    const slides = document.querySelector(".steps-wrap .steps-list");
    currentIndex = (currentIndex + 1) % slides.children.length;
    showSlide(currentIndex);
  }

  prevButton.addEventListener('click', showPrevSlide);
  nextButton.addEventListener('click', showNextSlide);

  showSlide(currentIndex);
});

  