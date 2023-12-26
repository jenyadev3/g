document.addEventListener('DOMContentLoaded', function () {
  const stepsContainer = document.querySelector(".steps-buttons-container");
  const articleContainer = document.querySelector(".articles-buttons-container");
  const stepsPrevButton = stepsContainer.querySelector(".prev-step");
  const stepsNextButton = stepsContainer.querySelector('.next-step');
  const articlePrevButton = articleContainer.querySelector(".prev-article")
  const articleNextButton = articleContainer.querySelector(".next-article")
  let currentIndex = 0;

  function slide(index, listSelector, itemWidthOffset) {
    const slides = document.querySelector(listSelector);
    const itemWidth = slides.querySelector("li").offsetWidth;
    currentIndex = (index + slides.children.length) % slides.children.length;
    slides.style.transform = `translateX(-${currentIndex * (itemWidth + itemWidthOffset)}px)`;
  }

  function stepsSlide(index) {
    slide(index, ".steps-list", 50);
  }

  function articleSlide(index) {
    slide(index, ".article-list", 40);
  }

  stepsPrevButton.addEventListener('click', () => stepsSlide(currentIndex - 1));
  stepsNextButton.addEventListener('click', () => stepsSlide(currentIndex + 1));
  articlePrevButton.addEventListener('click', () => articleSlide(currentIndex - 1));
  articleNextButton.addEventListener('click', () => articleSlide(currentIndex + 1));

  stepsSlide(currentIndex);
  articleSlide(currentIndex);
});



  