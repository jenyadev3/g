// Получаем кнопки "consult" и модальные окна
const consultButtons = document.querySelectorAll(".consult");
const modalDesk = document.querySelector(".modal-desk");
const modalMob = document.querySelector(".modal-mob");
const closeButtons = document.querySelectorAll('.close-button');

// Добавляем обработчик события на клик по кнопке "consult"
consultButtons.forEach(function (consultButton) {
  consultButton.addEventListener("click", function () {
    if (window.innerWidth >= 991) {
      modalDesk.style.display = "block";
    } else {
      modalMob.style.display = "block";
    }
  });
});

// Добавляем обработчик события для закрытия обоих модальных окон
closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener("click", function () {
    modalDesk.style.display = "none";
    modalMob.style.display = "none";
  });
});

