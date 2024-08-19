import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const reviewsSection = document.querySelector('#reviews');
const reviewsList = document.querySelector('.reviews-list');

const reviewsSwiper = new Swiper('.reviews-swiper', {
  navigation: {
    nextEl: '.reviews-controls-next',
    prevEl: '.reviews-controls-prev',
  },

  spaceBetween: '16',

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1440: {
      slidesPerView: 4,
    },
  },
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fetchAndRenderReviews();
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(reviewsSection);

async function getReviews() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );

    return response.data;
  } catch {
    iziToast.error({
      message: 'Error fetching reviews',
    });

    return [];
  }
}

function renderReviews(reviews) {
  if (reviews.length === 0) {
    reviewsList.innerHTML = `<p class="reviews-notfound">Not found</p>`;
    return;
  }

  const markup = reviews
    .map(
      ({ author, avatar_url, review }) => `
    <li class="reviews-list-item swiper-slide">
      <img class="reviews-avatar" src="${avatar_url}" alt="Review author" loading="lazy"/>
      <h3 class="reviews-author">${author}</h3>
      <p class="reviews-text">${review}</p>
    </li>`
    )
    .join('');

  reviewsList.insertAdjacentHTML('beforeend', markup);
}

async function fetchAndRenderReviews() {
  const reviews = await getReviews();
  renderReviews(reviews);
}
