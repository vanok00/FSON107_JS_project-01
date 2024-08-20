const button_open = document.querySelector('.header-menu-open-btn');
const button_close = document.querySelector('.mob-menu-btn');
const mobMenu = document.querySelector('.mob-menu');

button_open.addEventListener('click', () => {
    mobMenu.classList.add('is-open');
});
button_close.addEventListener('click', () => {
    mobMenu.classList.remove('is-open');
});

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-toggle');
    const menuContainer = document.querySelector('.menu-container');
    const menu = document.createElement('div');
    menu.className = 'menu';

    const links = [
        { href: '#about', text: 'About me' },
        { href: '#benefits', text: 'Benefits' },
        { href: '#projects-section', text: 'Projects' },
        { href: '#frequently-asked-questions', text: 'FAQ' }
    ];

    links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.text;
        menu.appendChild(anchor);
    });

    menuContainer.appendChild(menu);
    menuButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (menu.classList.contains('show')) {
            menu.style.height = 0;
            setTimeout(() => {
                menu.classList.remove('show');
            }, 300);
        } else {
            menu.classList.add('show');
            const menuHeight = menu.scrollHeight + 'px';
            menu.style.height = menuHeight;
        }
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            if (menu.classList.contains('show')) {
                menu.style.height = 0;
                setTimeout(() => {
                    menu.classList.remove('show');
                }, 300);
            }
        }
    });

    menu.addEventListener('click', (event) => {
        
        if (event.target.tagName === '') {
            const targetId = event.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                menu.style.height = 0;
                setTimeout(() => {
                    menu.classList.remove('show');
                }, 300);
            }
        }
    });
});