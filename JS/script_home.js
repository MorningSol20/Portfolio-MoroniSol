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

