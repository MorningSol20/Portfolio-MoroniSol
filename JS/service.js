// Seleciona todas as service-boxes
const boxes = document.querySelectorAll('.service-box');

// Seleciona todos os links do menu lateral
const links = document.querySelectorAll('.menu-aside ol li a');

// Cria o observador
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.querySelector('.title-service').id; // ex: "angle1"

        // Procura o link correspondente
        const link = document.querySelector(`.menu-aside a[href="#${id}"]`);

        if (entry.isIntersecting) {
            // Remove a classe 'ativo' de todos os links
            links.forEach(l => l.classList.remove('ativo'));

            // Adiciona 'ativo' apenas no link correspondente
            link.classList.add('ativo');
        }
    });
}, {
    root: null,              // observa a viewport (tela)
    threshold: 0.5,          // metade do elemento visível
    rootMargin: "0px 0px -50% 0px" // ativa quando o centro da tela cruza o elemento
});

// Observa cada caixa de serviço
boxes.forEach(box => observer.observe(box));
