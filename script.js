const buttons = document.querySelectorAll(".service-item-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const parent = button.closest(".service-item");
    const itemContent = parent.nextElementSibling;
    itemContent.classList.toggle("visually-hidden");
  });
});

const consultButtons = document.querySelectorAll(".consult");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

const openModal = () => {
  modal.style.display = "block";
}

const closeModal = () => {
  modal.style.display = "none";
}

consultButtons.forEach(button => {
  button.addEventListener("click", openModal);
});

closeButton.addEventListener("click", closeModal);