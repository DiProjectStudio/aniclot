import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const heroSlider = new Swiper('.hero .swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    pagination: {
        el: '.hero .swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.hero .swiper-button-next',
        prevEl: '.hero .swiper-button-prev'
    }
});
