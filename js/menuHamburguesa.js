const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuButton.classList.toggle('active');
});