document.addEventListener('DOMContentLoaded', function () {
  const stepsContainer = document.querySelector(".steps-buttons-container");
  const articleContainer = document.querySelector(".articles-buttons-container");
  const stepsPrevButton = stepsContainer.querySelector(".prev-step");
  const stepsNextButton = stepsContainer.querySelector('.next-step');
  const articlePrevButton = articleContainer.querySelector(".prev-article")
  const articleNextButton = articleContainer.querySelector(".next-article")
  let currentIndex = 0;
  let xDown = null;

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

  // Добавляем обработчики для смахивания пальцем
  const stepsList = document.querySelector(".steps-list");
  const articleList = document.querySelector(".article-list");

  stepsList.addEventListener('touchstart', handleTouchStart);
  stepsList.addEventListener('touchmove', handleTouchMove);
  stepsList.addEventListener('touchend', handleTouchEnd);

  articleList.addEventListener('touchstart', handleTouchStart);
  articleList.addEventListener('touchmove', handleTouchMove);
  articleList.addEventListener('touchend', handleTouchEnd);

  function handleTouchStart(event) {
    xDown = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    if (!xDown) {
      return;
    }

    let xUp = event.touches[0].clientX;
    let xDiff = xDown - xUp;

    if (Math.abs(xDiff) > 0) {
      if (xDiff > 0) {
        // Swipe left
        currentIndex += 1;
      } else {
        // Swipe right
        currentIndex -= 1;
      }

      if (event.currentTarget.classList.contains('steps-list')) {
        stepsSlide(currentIndex);
      } else if (event.currentTarget.classList.contains('article-list')) {
        articleSlide(currentIndex);
      }

      xDown = null;
    }
  }

  function handleTouchEnd() {
    xDown = null;
  }
});





  