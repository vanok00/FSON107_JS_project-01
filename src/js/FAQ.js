import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.accordion-container', {
    duration: 1000,
    showMultiple: false,
    elementClass: 'ac',
    triggerClass: 'ac-trigger',
    panelClass: 'ac-panel',
    activeClass: 'is-active',
  });
});

// document.querySelectorAll('.ac-trigger').forEach(button => {
//   button.addEventListener('click', () => {
//     const ac = button.closest('.ac');
//     ac.classList.toggle('is-active');
//   });
// });
