(() => {
    const refs = {
        openModalBtn: document.querySelector('.header-menu-open-btn'),
        closeModalBtn: document.querySelector('.mob-menu-btn'),
        modal: document.querySelector('.mob-menu'),
        menuButton: document.querySelector('.menu-toggle'),
        menuContainer: document.querySelector('.menu-container'),
        menuLinks: document.querySelectorAll('.mob-menu-link'), 
        orderProject: document.querySelector('.order-button-desktop'),
        orderProjectMob: document.querySelector('.mob-menu-link-nav')
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-open");
        document.body.classList.toggle('no-scroll');
    }

    refs.menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                toggleModal();
            }
        });
    });

    if (refs.orderProjectMob) {
        refs.orderProjectMob.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = refs.orderProjectMob.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                toggleModal();
            }
        });
    }


    document.addEventListener('DOMContentLoaded', () => {
        const menu = document.createElement('div');
        menu.className = 'menu';

        const links = [
            { href: '#about-me', text: 'About me' },
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

        refs.menuContainer.appendChild(menu);

        refs.menuButton.addEventListener('click', (event) => {
            event.preventDefault();
            toggleMenu();
        });

        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && !refs.menuButton.contains(event.target) && menu.classList.contains('show')) {
                closeMenu();
            }
        });

        menu.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                const targetId = event.target.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    closeMenu();
                }
            }
        });

        function toggleMenu() {
            if (menu.classList.contains('show')) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        function openMenu() {
            menu.classList.add('show');
            menu.style.height = menu.scrollHeight + 'px';
        }

        function closeMenu() {
            menu.style.height = 0;
            setTimeout(() => {
                menu.classList.remove('show');
            }, 300);
        }
    });
})();
