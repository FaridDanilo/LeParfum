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

const scrollAmount = 120;

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


//? ADD TO THE CART START
const cartBtn = document.querySelector('.feather-shopping-cart');
const myCart = document.querySelector('.shopping-cart-container');

cartBtn.addEventListener('click', () => {
    myCart.classList.add('active');
});


function closeNavMenuIfOutside(e) {
    if (!myCart.contains(e.target)
        && !cartBtn.contains(e.target)) {
        myCart.classList.remove('active');
    }
}

document.addEventListener('click', closeNavMenuIfOutside);
document.addEventListener('touchstart', closeNavMenuIfOutside);
//? ADD TO THE CART END


//? MODAL PRODUCT START
// const parfumData = {
//     "Golden Honey": {
//         description: "Una fragancia cálida y envolvente con dulces notas de miel dorada, vainilla suave y un fondo ambarado que deja una estela irresistible."
//     },
//     "Amber Bloom": {
//         description: "Flores luminosas se mezclan con ámbar cálido y un toque cremoso, creando un aroma elegante, delicado y profundamente femenino."
//     },
//     "Citrus Aura": {
//         description: "Explosión vibrante de cítricos frescos con un corazón ligero y chispeante que transmite energía, limpieza y vitalidad."
//     },
//     "Velvet Rose": {
//         description: "Rosa aterciopelada en su máxima expresión, acompañada de suaves notas dulces y un fondo seductor que envuelve la piel con elegancia."
//     },
//     "Pure Vanilla": {
//         description: "Vainilla cremosa y reconfortante con matices dulces y suaves que evocan calidez, ternura y sofisticación discreta."
//     },
//     "Ocean Mist": {
//         description: "Fresco como la brisa marina, mezcla notas acuáticas con un toque limpio y ligero que recuerda al aire del océano al amanecer."
//     },
//     "Soft Blossom": {
//         description: "Delicadas flores primaverales con un matiz empolvado y suave, perfecto para una sensación ligera, femenina y romántica."
//     },
//     "Fresh Linen": {
//         description: "Aroma limpio y reconfortante que evoca sábanas recién lavadas, con notas suaves y aireadas que transmiten pureza y frescura."
//     },
//     "White Musk": {
//         description: "Almizcle blanco suave y envolvente con un carácter limpio, sensual y elegante que se funde naturalmente con la piel."
//     },
//     "Pure Air": {
//         description: "Ligero y transparente, combina notas frescas y etéreas que evocan aire puro, libertad y una sensación de bienestar natural."
//     },
//     "Morning Dew": {
//         description: "Fresco y delicado como el rocío al amanecer, con toques verdes y florales suaves que despiertan los sentidos con sutileza."
//     },
// };

document.addEventListener('DOMContentLoaded', () => {
    const cardParfum = document.querySelectorAll('article');
    const modalOverlay = document.querySelectorAll('.modal-overlay-product');

    const modalImg = document.querySelector('modalImg');
    const modalTitle = document.querySelector('modalTitle');
    const modalDesc = document.querySelector('modalDesc');
    
    cardParfum.forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img').src;
            const title = card.querySelector('h3').textContent;
            const desc = card.querySelector('p').textContent;

            modalImg.src = img;
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
        });
    });
});
//? MODAL PRODUCT END

