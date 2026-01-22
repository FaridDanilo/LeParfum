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
const categoryContainers = document.querySelectorAll('.categories-grid-container');

categoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        categoryItems.forEach(li => li.classList.remove('active'));

        categoryContainers.forEach(container => container.classList.remove('active'));

        item.classList.add('active');
        
        const categoryName = item.textContent.trim().toLowerCase();
        
        const activeContent = document.querySelector(`.categories-grid-container.${categoryName}`);
        
        if (activeContent) {
            activeContent.classList.add('active');
        }
        
    });
});

const categories = document.querySelector('.categories');
const btnLeft = document.querySelector('.cat-arrow.left');
const btnRight = document.querySelector('.cat-arrow.right');

const scrollAmount = 120; // px por click

btnLeft.addEventListener('click', () => {
    categories.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

btnRight.addEventListener('click', () => {
    categories.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
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

