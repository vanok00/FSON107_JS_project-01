import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const projectsSwiper = new Swiper('.projects-swiper', {
  grabCursor: true,
  mousewheel: true,
  speed: 500,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
