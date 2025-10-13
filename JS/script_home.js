function cima() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('meuBotao');

  function updateButton() {
    const pos = window.pageYOffset || document.documentElement.scrollTop;
    if (pos > 500) {
      if (botao.hasAttribute('disabled')) {
        botao.removeAttribute('disabled');
      }
    } else {
      if (!botao.hasAttribute('disabled')) {
        botao.setAttribute('disabled', '');
      }
    }
  }

  // check inicial (se o usuário já entrou na página com scroll)
  updateButton();

  // atualiza enquanto rola
  window.addEventListener('scroll', updateButton, { passive: true });
});

const toggle = document.querySelector('.toggle');
const canvaoff = document.querySelector('.canvaoff');
const container = document.querySelector('.container');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
  canvaoff.classList.toggle('ativo');
  toggle.classList.toggle('rotate');
  container.classList.toggle('retorn');
  body.classList.toggle('overflow-hidden');
})

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
