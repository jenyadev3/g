const buttons = document.querySelectorAll(".service-item-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const parent = button.closest(".service-item");
    const itemContent = parent.nextElementSibling;
    itemContent.classList.toggle("visually-hidden");
  });
});

