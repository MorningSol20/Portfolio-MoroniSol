const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    messageDiv.textContent = "✅ Mensagem enviada com sucesso!";
    messageDiv.classList.remove('hidden', 'error');
    
    void messageDiv.offsetWidth;
    
    messageDiv.classList.add('show');

    // ⏳ fade + slide out após 4.5 segundos
    setTimeout(() => {
      messageDiv.classList.remove('show');
      setTimeout(() => {
        messageDiv.classList.add('hidden');
      }, 800); // espera a transição acabar
    }, 4500);


    // Se quiser limpar os campos:
    form.reset();
});