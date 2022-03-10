const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const mobileNavigation = document.querySelector('.mobile-navigation');

burgerMenu.addEventListener('click', () => {
    burgerMenuBtn.classList.toggle('bmb-open');
    mobileNavigation.classList.toggle('mobile-navigation-open');
});