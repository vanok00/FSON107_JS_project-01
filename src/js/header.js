const button_open = document.querySelector('.header-menu-open-btn');
const button_close = document.querySelector('.mob-menu-btn');
const menu = document.querySelector('.menu-toggle')
const mobMenu = document.querySelector('.mob-menu');



button_open.addEventListener('click', () => {
    mobMenu.classList.add('is-open');
    menu.classList.add('is-open');
});
button_close.addEventListener('click', () => {
    mobMenu.classList.remove('is-open')
    menu.classList.add('is-open');

});
