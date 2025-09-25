const track = document.querySelector(".carrossel-track");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".esquerda");
const nextButton = document.querySelector(".direita");

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 130}px)`;
}

nextButton.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

