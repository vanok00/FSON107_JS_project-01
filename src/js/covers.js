// document.addEventListener('DOMContentLoaded', function () {
//   const coversSection = document.querySelector('#covers');
//   const coversList = document.querySelector('.marquee');

//   function checkIfInView() {
//     const rect = coversSection.getBoundingClientRect();
//     const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

//     if (inView) {
//       coversList.classMarquee.add('scrolling');
//       window.removeEventListener('scroll', checkIfInView);
//     }
//   }

//   if (coversSection) {
//     window.addEventListener('scroll', checkIfInView);
//     checkIfInView(); // Для запуску анімації, якщо секція вже в viewport'і при завантаженні
//   }
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const coversSection = document.querySelector('.covers');
//   const coversList = document.querySelectorAll('.marquee__line');

//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         coversList.forEach(line => line.classList.add('animate'));
//       } else {
//         coversList.forEach(line => line.classList.remove('animate'));
//       }
//     });
//   });

//   observer.observe(coversSection);
// });
