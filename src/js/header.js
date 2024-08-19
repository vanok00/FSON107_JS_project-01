const button_open = document.querySelector('.header-menu-open-btn');
const button_close = document.querySelector('.mob-menu-btn');
const menu = document.querySelector('.mob-menu');

button_open.addEventListener('click', () => {
    menu.classList.add('is-open');
});
button_close.addEventListener('click', () => {
    menu.classList.remove('is-open');
});
