const button_open = document.querySelector('.header-menu-open-btn');
const button_close = document.querySelector('.mob-menu-btn');
const menu = document.querySelector('.mobile-menu-overlay');

button_open.addEventListener('click', () => {
    menu.classList.add('hidden');
});
button_close.addEventListener('click', () => {
    menu.classList.remove('hidden');
});
