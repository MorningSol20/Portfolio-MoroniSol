// CARROSSEL PEQUENO de LETRAS NA PAGINA HOME

const track = document.getElementById("interTrack");
const dots = document.querySelectorAll(".dot");

let index = 0;
const total = dots.length;

function updateSlide(newIndex) {
  index = newIndex;
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// alternância automática a cada 4s
setInterval(() => {
  index = (index + 1) % total;
  updateSlide(index);
}, 4000);

// clique manual
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    updateSlide(Number(dot.dataset.index));
  });
});
