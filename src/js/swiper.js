import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export const swiperCards = new Swiper('.services__swiper-container', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.services__swiper-next',
        prevEl: '.services__swiper-prev',
    },
    pagination: {
        el: '.services__swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

});


export const gallery = new Swiper('.gallery__swiper-container', {
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    lazy: true,
    lazy: {
        loadPrevNext: true,
      },
    watchSlidesVisibility: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

