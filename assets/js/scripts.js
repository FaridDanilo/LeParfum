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


const total = 5;

const containers = document.querySelectorAll('.stars-rating');

containers.forEach(container => {
    container.innerHTML = '<i class="fa-solid fa-star"></i>'.repeat(total);
});
