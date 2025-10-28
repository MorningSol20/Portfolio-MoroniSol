const filterButtons = document.querySelectorAll('.filtros li');
const projects = document.querySelectorAll('.article-projetos figure');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        // remove classe "active" dos outros botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // exibe ou esconde os projetos
        projects.forEach(project => {
            if (filter === 'all' || project.dataset.category === filter) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        });
    });
});