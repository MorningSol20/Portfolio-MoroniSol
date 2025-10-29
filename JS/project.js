const filterButtons = document.querySelectorAll('.filtros li');
const projects = document.querySelectorAll('.article-projetos figure');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        projects.forEach(project => {
            const categories = project.dataset.category.split(' ');
            if (filter === 'all' || categories.includes(filter)) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        });
    });
});
