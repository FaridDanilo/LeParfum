//? NAVBAR START
const menuToggle = document.getElementById('openMenu');
const navbar = document.querySelector('.navbar-mobile-container');
const navbarLinks = document.querySelectorAll('.navbar-links a');

menuToggle.addEventListener('click', (e) => {
    navbar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
});
//? NAVBAR END


//? CATEGORIES SELECT START
const categoryItems = document.querySelectorAll('.categories li');
const categoryContents = document.querySelectorAll('.categories-content');

categoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        // Quitar active de todas las categorías (li)
        categoryItems.forEach(li => li.classList.remove('active'));

        // Agregar active a la seleccionada
        item.classList.add('active');

        // Obtener el nombre de la categoría
        const categoryName = item.textContent.trim().toLowerCase();

        // Ocultar todos los contenidos
        categoryContents.forEach(content => {
            content.classList.remove('active');
        });

        // Mostrar el contenido correspondiente
        const activeContent = document.querySelector(
            `.categories-content.${categoryName}`
        );

        if (activeContent) {
            activeContent.classList.add('active');
        }
    });
});
//? CATEGORIES SELECT END 


//? CLIENTS SAY START
const total = 5;

const containers = document.querySelectorAll('.stars-rating');

containers.forEach(container => {
    container.innerHTML = '<i class="fa-solid fa-star"></i>'.repeat(total);
});
//? CLIENTS SAY END 

