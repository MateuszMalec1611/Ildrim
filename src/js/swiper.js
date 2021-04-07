import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
 
});


