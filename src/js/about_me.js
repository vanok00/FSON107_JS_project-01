document.addEventListener('DOMContentLoaded', function() {
  // знаходим всі кнопки аккордеона
  const accButtons = document.querySelectorAll('.accordion-btn');

  accButtons.forEach(button => {
    button.addEventListener('click', () => {
      // знаходим наступний елемент списку
      const content = button.nextElementSibling;

      // перемикаєм клас для показу або скриття контенту
      if (content.classList.contains('show')) {
        content.classList.remove('show');
        button.classList.remove('active');
      } else {
        // закриваєм всі інші секції
        document.querySelectorAll('.descrip-text-list.show').forEach(item => {
          item.classList.remove('show');
          item.previousElementSibling.classList.remove('active');
        });
        // відкриваєм наступну секцію
        content.classList.add('show');
        button.classList.add('active');
      }
    });
  });
});