// document.addEventListener('DOMContentLoaded', function () {
//     const coversSection = document.querySelector('.covers');
//     const marqueeLines = document.querySelectorAll('.marquee__line');

//     // Функція, яка запускає анімацію
//     function startAnimation() {
//         marqueeLines.forEach(line => {
//             line.style.animationPlayState = 'running';
//         });
//     }

//     // Функція, яка зупиняє анімацію
//     function stopAnimation() {
//         marqueeLines.forEach(line => {
//             line.style.animationPlayState = 'paused';
//         });
//     }

//     // Налаштування IntersectionObserver
//     const observerOptions = {
//         root: null, // Спостерігає за viewport'ом
//         rootMargin: '0px',
//         threshold: 0.1 // 10% елемента має бути у полі зору
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 startAnimation(); // Запуск анімації
//             } else {
//                 stopAnimation(); // Зупинка анімації
//             }
//         });
//     }, observerOptions);

//     if (coversSection) {
//         observer.observe(coversSection);
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    const block = document.querySelector('.covers');
    const cards = document.querySelectorAll('.covers-line-item');
    function startAnimation() {
      cards.forEach(card => {
        card.classList.add('animation');
      });
    }
    function stopAnimation() {
      cards.forEach(card => {
        card.classList.remove('animation');
      });
    }
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.01
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      });
    }, observerOptions);
    if (block) {
      observer.observe(block);
    }
  });