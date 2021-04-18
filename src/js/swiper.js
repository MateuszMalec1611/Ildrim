import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export const mySwiper = new Swiper('.services__swiper-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 1,
    disableAutoResize: false,
    centerInsufficientSlides: true,
    centeredSlides: true,

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


export const galleryTop = new Swiper('.gallery__swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
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

